import { Pokemon } from './decorators/pokemon';

const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander);

console.log(charmander.savePokemonToDB(50));
