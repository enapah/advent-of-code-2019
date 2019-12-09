import {readInput} from '../utils/read-input';
import {runProgram} from '../int-computer/run-program';

const solve = (input: number) => {
  const [strings] = readInput(__dirname);

  let output = Number.POSITIVE_INFINITY;

  runProgram(
    strings.split(',').map(Number),
    () => input,
    value => (output = value)
  );
  return output;
};

export const part1 = () => solve(1);

export const part2 = () => solve(2);
