import { ITrainer } from '@models/types/ITrainer';
import { IPokemon } from '@models/types/IPokemon';
import { CaptureResult } from '@models/types/CaptureType';

export default function tryCapture(trainer: ITrainer, pokemon: IPokemon): CaptureResult {
  const captureRate = (trainer.level / pokemon.level) * 100;
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber < captureRate) return CaptureResult.Success;

  if (randomNumber > captureRate) return CaptureResult.Retry;

  return CaptureResult.Fail;
}