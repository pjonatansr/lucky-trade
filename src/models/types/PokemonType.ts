const pokemonTypes = [
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Psychic',
  'Ice',
  'Dragon',
  'Dark',
  'Fairy',
  'Fighting',
  'Poison',
  'Ground',
  'Rock',
  'Steel',
  'Normal',
  'Ghost',
  'Flying',
  'Bug',
];

export type PokemonType = typeof pokemonTypes[number];