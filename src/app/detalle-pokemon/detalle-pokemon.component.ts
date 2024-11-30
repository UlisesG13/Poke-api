import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pokemon',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent {
  pokemon: Pokemon | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe((data) => {
        this.pokemon = data;
      });
    }
  }
}
