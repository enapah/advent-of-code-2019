import {Reactions} from './types';

export const minAmountOfOre = (reactions: Reactions, amountOfFuel: number) => {
  const alreadyProduced: {[chemical: string]: number} = Object.keys(
    reactions
  ).reduce((acc, c) => ({...acc, [c]: 0}), {});

  const amountOfOre = (name: string, amount: number): number => {
    const {from, producedAmount} = reactions[name];
    const ratio = Math.ceil(amount / producedAmount);

    const ore = from.reduce((ore, {name, amount}) => {
      const required = ratio * amount;

      if (name === 'ORE') {
        return ore + required;
      }
      if (alreadyProduced[name] < required) {
        ore += amountOfOre(name, required - alreadyProduced[name]);
      }

      alreadyProduced[name] -= required;
      return ore;
    }, 0);

    alreadyProduced[name] += ratio * producedAmount;

    return ore;
  };

  return amountOfOre('FUEL', amountOfFuel);
};
