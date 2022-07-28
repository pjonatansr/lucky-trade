import { IPokemon } from '../types/IPokemon';
import { ITrainer } from '../types/ITrainer';
import { Team } from '../types/Team';

export default function createTrainer(name: string, team: Team, initial: IPokemon): ITrainer {
  return {
    name,
    team,
    pokemons: [initial],
    level: 1,
  };
}