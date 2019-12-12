import {readInput} from '../utils/read-input';
import {findPeriod} from './find-period';
import {getTotalEnergy} from './get-total-energy';
import {parseInput} from './parse-input';

export const part1 = () =>
  getTotalEnergy(parseInput(readInput(__dirname)), 1000);

export const part2 = () => findPeriod(parseInput(readInput(__dirname)));
