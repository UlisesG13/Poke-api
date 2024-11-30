import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePokemon',
  standalone: true,
})
export class UppercasePokemonPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
