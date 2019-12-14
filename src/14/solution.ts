import {readInput} from '../utils/read-input';
import {minAmountOfOre} from './min-amount-of-ore';
import {parseInput} from './parse-input';
import {maxAmountOfFuel} from './max-amount-of-fuel';

export const part1 = () => minAmountOfOre(parseInput(readInput(__dirname)), 1);

export const part2 = () => maxAmountOfFuel(parseInput(readInput(__dirname)));
