import {ParameterMode} from './types';
import {execute} from './execute';

export const runProgram = (input: number[], [p1, p2, p3, p4, p5]: number[]) => {
  let currentAmp = 0;
  let running = true;

  const inputs = [[p1, 0], [p2], [p3], [p4], [p5]];
  const programs = [[...input], [...input], [...input], [...input], [...input]];
  const instructionPointers = [0, 0, 0, 0, 0];

  const read = (mode: ParameterMode = ParameterMode.Immediate) => {
    const program = programs[currentAmp];

    return mode === ParameterMode.Immediate
      ? program[instructionPointers[currentAmp]++]
      : program[program[instructionPointers[currentAmp]++]];
  };

  const write = (value: number) => {
    const program = programs[currentAmp];

    return (program[program[instructionPointers[currentAmp]++]] = value);
  };

  const jump = (address: number) => (instructionPointers[currentAmp] = address);

  const readInput = () => {
    const number = inputs[currentAmp].shift();
    if (number === undefined) {
      throw new Error('undefined');
    }
    return number;
  };

  const writeOutput = (value: number) => {
    currentAmp++;
    if (currentAmp > 4) {
      currentAmp = 0;
    }
    inputs[currentAmp].push(value);
  };

  const halt = () => (running = false);

  while (running) {
    execute(read, write, readInput, writeOutput, jump, halt);
  }
  return inputs[0][0]!;
};
