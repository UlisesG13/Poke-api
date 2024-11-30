import { UppercasePokemonPipe } from './uppercase-pokemon.pipe';

describe('UppercasePokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercasePokemonPipe();
    expect(pipe).toBeTruthy();
  });
});
