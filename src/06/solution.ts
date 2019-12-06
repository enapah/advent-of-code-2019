import {readInput} from '../utils/read-input';

import {parseInput} from './parse-input';
import {findAllPaths} from './find-all-paths';
import {totalNumberOfOrbits} from './total-number-of-orbits';
import {shortestPath} from './shortest-path';

const solve = (reduce: (paths: string[][]) => number) =>
  reduce(findAllPaths(parseInput(readInput(__dirname))));

export const part1 = () => solve(totalNumberOfOrbits);

export const part2 = () => solve(paths => shortestPath(paths, 'YOU', 'SAN'));
