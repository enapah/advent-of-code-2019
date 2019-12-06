import {Orbits} from './types';

export const findAllPaths = (orbits: Orbits) => {
  const findPaths = (node: string, x: string[]): string[][] =>
    (orbits[node] || []).reduce(
      (acc, m) => [...acc, ...findPaths(m, [...x, node])],
      [[...x, node]]
    );

  return findPaths('COM', []);
};
