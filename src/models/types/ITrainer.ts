import { IPokemon } from './IPokemon';
import { Team } from './Team';

export interface ITrainer {
  id?: number;
  name: string;
  team: Team;
  level: number;
  pokemons: IPokemon[];
  friends?: Pick<ITrainer, 'id'>[];
}