import {Reactions} from './types';
import {minAmountOfOre} from './min-amount-of-ore';

export const maxAmountOfFuel = (reactions: Reactions) => {
  const oreToUse = 1e12;

  let low = 0;
  let high = oreToUse;

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);

    if (minAmountOfOre(reactions, mid) <= oreToUse) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return low;
};
