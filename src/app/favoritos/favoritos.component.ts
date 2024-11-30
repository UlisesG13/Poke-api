import { Component } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {
  favorites: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.pokemonService.getFavorites().subscribe(
      (data: Pokemon[]) => {
        this.favorites = data;
      },
      (error) => {
        console.error('Error al cargar los favoritos', error);
      }
    );
  }
}
