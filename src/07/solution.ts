import {readInput} from '../utils/read-input';
import {combinationsWithoutRepetition} from '../utils/combinations-without-repetition';

import {runProgram} from './run-program';

const solve = (phaseSettings: number[]) => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);

  const combinations = combinationsWithoutRepetition(phaseSettings);

  return Math.max(
    ...combinations.map((phaseSettings: number[]) =>
      runProgram(program, phaseSettings)
    )
  );
};

export const part1 = () => solve([0, 1, 2, 3, 4]);

export const part2 = () => solve([5, 6, 7, 8, 9]);
