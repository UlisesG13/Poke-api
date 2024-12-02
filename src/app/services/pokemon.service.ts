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

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokemons`);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemons/${pokemonId}`);
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.apiUrl}/pokemons`, pokemon, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updatePokemon(pokemonId: number, pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiUrl}/pokemons/${pokemonId}`, pokemon, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deletePokemon(pokemonId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/pokemons/${pokemonId}`);
  }

  addToFavorites(pokemonId: number): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.apiUrl}/favorites/${pokemonId}`, {});
  }

  removeFromFavorites(pokemonId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/favorites/${pokemonId}`);
  }

  getFavorites(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/favorites`);
  }
}
