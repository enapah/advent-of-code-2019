import {readInput} from '../utils/read-input';

import {runProgram} from './run-program';

const solve = (id: number) => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);

  let output = Number.POSITIVE_INFINITY;
  runProgram(
    program,
    () => id,
    value => (output = value)
  );
  return output;
};

export const part1 = () => solve(1);

export const part2 = () => solve(5);
