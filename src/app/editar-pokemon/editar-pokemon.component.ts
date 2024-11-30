import { Component } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-pokemon',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './editar-pokemon.component.html',
  styleUrl: './editar-pokemon.component.scss'
})
export class EditarPokemonComponent {
  pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pokemonId = +this.route.snapshot.paramMap.get('id')!; // Obtén el ID de la ruta
    this.pokemonService.getPokemonById(pokemonId).subscribe(
      (data) => {
        this.pokemon = data;
      },
      (error) => {
        console.error('Error al cargar el Pokémon', error);
      }
    );
  }

  editarPokemon(): void {
    if (this.pokemon) {
      this.pokemonService.updatePokemon(this.pokemon.id, this.pokemon).subscribe(
        (updatedPokemon) => {
          console.log('Pokémon actualizado', updatedPokemon);
          this.router.navigate(['/']); // Redirige a la página principal
        },
        (error) => {
          console.error('Error al actualizar el Pokémon', error);
        }
      );
    }
  }
}
