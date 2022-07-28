import { ITrainer } from '@models/types/ITrainer';

type TwoTrainers = {
  trainer1: ITrainer;
  trainer2: ITrainer;
};

export default function addFriend({ trainer1, trainer2 }: TwoTrainers): TwoTrainers {
  trainer1.friends = [
    ...trainer1.friends,
    trainer2,
  ];

  trainer2.friends = [
    ...trainer2.friends,
    trainer1,
  ];

  return {
    trainer1,
    trainer2,
  };
}