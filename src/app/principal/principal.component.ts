import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../services/pokemon.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { ReplaceLettersPipe } from '../pipes/replace-letters.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NgFor,RouterLink,CapitalizePipe,ReplaceLettersPipe,UpperCasePipe],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  pokemons: Pokemon[] = [];
  favorites: Pokemon[] = [];
  newPokemon: Pokemon = { id: 0, nombre: '', altura: 0, peso: 0, tipo: ''};


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
    this.loadFavorites();
  }

  // Cargar la lista de todos los Pokémon
  loadPokemons(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }

  // Cargar la lista de favoritos
  loadFavorites(): void {
    this.pokemonService.getFavorites().subscribe((data) => {
      this.favorites = data;
    });
  }

  deletePokemonFromAll(pokemonId: number): void {
    // Primero, eliminamos el Pokémon de la base de datos
    this.pokemonService.deletePokemon(pokemonId).subscribe(() => {
      // Luego, eliminamos el Pokémon de la lista principal (pokemons)
      this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== pokemonId);
  
      // Finalmente, eliminamos el Pokémon de los favoritos
      this.pokemonService.removeFromFavorites(pokemonId).subscribe(() => {
        // Actualizamos la lista de favoritos después de eliminar
        this.favorites = this.favorites.filter((pokemon) => pokemon.id !== pokemonId);
        
        // Opcional: Mostrar un mensaje de éxito
        alert('Pokémon eliminado exitosamente de todos los lugares.');
      }, error => {
        // Manejo de errores al intentar eliminar del favorito
        alert('Hubo un error al eliminar el Pokémon de los favoritos.');
        console.error(error);
      });
    }, error => {
      // Manejo de errores al intentar eliminar de la base de datos
      alert('Hubo un error al eliminar el Pokémon de la base de datos.');
      console.error(error);
    });
  }
  
  // Agregar un Pokémon a favoritos
  addToFavorites(pokemonId: number): void {
  if (this.favorites.length >= 5) {
    alert('No puedes agregar más de 5 favoritos.');
    return;
  }

  this.pokemonService.addToFavorites(pokemonId).subscribe((pokemon) => {
    this.favorites.push(pokemon);
  });
}


  removeFromFavorites(pokemonId: number): void {
    this.pokemonService.removeFromFavorites(pokemonId).subscribe(() => {
      this.favorites = this.favorites.filter(
        (pokemon) => pokemon.id !== pokemonId
      );
    });
  }

  addPokemon(): void {
    this.newPokemon.id = this.pokemons.length + 1; 
    this.pokemonService.createPokemon(this.newPokemon).subscribe(() => {
      this.loadPokemons();
      this.newPokemon = { id: 0, nombre: '', altura: 0, peso: 0, tipo: '' }; 
    });
  }

  deletePokemon(pokemonId: number): void {
    this.pokemonService.deletePokemon(pokemonId).subscribe(() => {
      this.loadPokemons();
    });
  }
}
