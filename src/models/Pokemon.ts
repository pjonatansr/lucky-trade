import { IPokemon } from './types/IPokemon';

const validatePokemon = (pokemon: Partial<IPokemon>) => {
  const requiredProperties: string[] = [
    'number',
    'name',
    'attack',
    'defense',
    'hp',
    'types',
  ];

  const errors = requiredProperties
    .filter(property => !pokemon[property])
    .map(property => `${property} is required`);

  if (Boolean(errors.length)) throw new Error(errors.join(', '));
};

export default function createPokemon(pokemon: Partial<IPokemon>): IPokemon {
  validatePokemon(pokemon);

  //TODO: persist to database

  return pokemon as IPokemon;
}