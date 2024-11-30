import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pokemon {
  id: number;
  nombre: string;
  altura: number;
  peso: number;
  tipo: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) {}

  // Obtener todos los Pokémon
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokemons`);
  }

  // Obtener un Pokémon por ID
  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemons/${pokemonId}`);
  }

  // Crear un nuevo Pokémon
  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.apiUrl}/pokemons`, pokemon, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  

  // Actualizar un Pokémon
  updatePokemon(pokemonId: number, pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiUrl}/pokemons/${pokemonId}`, pokemon, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Eliminar un Pokémon
  deletePokemon(pokemonId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/pokemons/${pokemonId}`);
  }

  // Agregar a favoritos
  addToFavorites(pokemonId: number): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.apiUrl}/favorites/${pokemonId}`, {});
  }

  // Remover de favoritos
  removeFromFavorites(pokemonId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/favorites/${pokemonId}`);
  }

  // Obtener lista de favoritos
  getFavorites(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/favorites`);
  }
}
