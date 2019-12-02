import {readInput} from '../utils/read-input';
import {runProgram} from './run-program';

export const part1 = () => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);

  return runProgram(program, 12, 2);
};

export const part2 = () => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);
  const targetOutput = 19690720;

  let verb = 0;
  let noun = 0;

  while (true) {
    const res = runProgram(program, noun, verb);

    if (res === targetOutput) {
      return 100 * noun + verb;
    }

    if (++verb === 100) {
      verb = 0;
      noun++;
    }
  }
};
