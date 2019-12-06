import {Orbits} from './types';

export const parseInput = (lines: string[]): Orbits =>
  lines
    .map(s => s.split(')'))
    .reduce(
      (orbits, [a, b]) => ({
        ...orbits,
        [a]: orbits[a] ? [...orbits[a], b] : [b]
      }),
      {} as Orbits
    );
