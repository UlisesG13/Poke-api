import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-pokemon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-pokemon.component.html',
  styleUrl: './agregar-pokemon.component.scss'
})
export class AgregarPokemonComponent { pokemon = {
  id: 0,
  nombre: '',
  altura: 0,
  peso: 0,
  tipo: '',
};

constructor(private pokemonService: PokemonService, private router: Router) {}

onSubmit() {
  this.pokemonService.createPokemon(this.pokemon).subscribe({
    next: (data) => {
      alert('Pokémon agregado con éxito');
      this.router.navigate(['/']);  // Redirigir a la página principal
    },
    error: (err) => {
      alert('Error al agregar Pokémon: ' + err.error.detail);
    }
  });
}
}
