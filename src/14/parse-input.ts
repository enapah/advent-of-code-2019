import {readInput} from '../utils/read-input';

import {Checmical, Reactions} from './types';

const parseChemical = (s: string): Checmical => {
  const [amount, name] = s.split(' ');

  return {name, amount: Number(amount)};
};

export const parseInput = (lines: string[]): Reactions =>
  lines.reduce((acc: Reactions, s) => {
    const [from, to] = s.split(' => ');
    const {name, amount} = parseChemical(to);

    return {
      ...acc,
      [name]: {
        producedAmount: amount,
        from: from.split(', ').map(parseChemical)
      }
    };
  }, {});
