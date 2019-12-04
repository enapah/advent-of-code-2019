import {range} from '../utils/range';
import {readInput} from '../utils/read-input';

export const notDecreasing = (numbers: number[]) =>
  numbers.every((c, i) => i === 0 || c >= numbers[i - 1]);

export const atLeastTwoAdjacent = (numbers: number[]) =>
  numbers.some((c, i) => c === numbers[i - 1]);

export const exactlyTwoAdjacent = (numbers: number[]) =>
  numbers.some(
    (c, i) =>
      c !== numbers[i - 2] && c === numbers[i - 1] && c !== numbers[i + 1]
  );

const solution = (predicate: (numbers: number[]) => boolean) => {
  const [line] = readInput(__dirname);
  const [from, to] = line.split('-').map(Number);

  return range(from, to)
    .map(String)
    .map(s => s.split('').map(Number))
    .filter(predicate).length;
};

export const part1 = () =>
  solution(numbers => atLeastTwoAdjacent(numbers) && notDecreasing(numbers));

export const part2 = () =>
  solution(numbers => exactlyTwoAdjacent(numbers) && notDecreasing(numbers));
