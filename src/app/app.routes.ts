import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AgregarPokemonComponent } from './agregar-pokemon/agregar-pokemon.component';
import { EditarPokemonComponent } from './editar-pokemon/editar-pokemon.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


export const routes: Routes = [
    { path: '', component: PrincipalComponent},
    { path: 'pokedex', component: PokedexComponent},
    { path: 'pokemon/:id', component: DetallePokemonComponent },
    { path: 'agregar-pokemon', component: AgregarPokemonComponent }, 
    { path: 'editar-pokemon/:id', component: EditarPokemonComponent },
    { path: 'pokebola', component: FavoritosComponent }, 
    { path: '**', component: ErrorPageComponent },
];
