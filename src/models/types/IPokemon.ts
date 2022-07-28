import { PokemonType } from './PokemonType';


type Types = [PokemonType, PokemonType] | [PokemonType];

export interface IPokemon {
  number: Required<number>;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  types: Types;
  level: number;
  isShiny?: boolean;
  isAlolan?: boolean;
  isMega?: boolean;
  isShadow?: boolean;
  isPurified?: boolean;
}
