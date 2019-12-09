import {ParameterMode} from './types';
import {execute} from './execute';

export const runProgram = (
  input: number[],
  readInput: () => number,
  writeOutput: (value: number) => void
) => {
  let running = true;
  let instructionPointer = 0;
  let relativeBase = 0;

  const program: {[i: number]: number} = input.reduce(
    (p, inst, i) => ({
      ...p,
      [i]: inst
    }),
    {}
  );

  const read = (mode: ParameterMode) => {
    switch (mode) {
      case ParameterMode.Position:
        return program[program[instructionPointer++] || 0] || 0;
      case ParameterMode.Immediate:
        return program[instructionPointer++] || 0;
      case ParameterMode.Relative:
        return (
          program[relativeBase + (program[instructionPointer++] || 0)] || 0
        );
    }
  };

  const write = (value: number, mode: ParameterMode) => {
    switch (mode) {
      case ParameterMode.Position:
        program[program[instructionPointer++] || 0] = value;
        break;
      case ParameterMode.Relative:
        program[relativeBase + (program[instructionPointer++] || 0)] = value;
        break;
    }
  };

  const jump = (address: number) => (instructionPointer = address);

  const adjustRelativeBase = (address: number) =>
    (relativeBase = relativeBase + address);

  const halt = () => (running = false);

  while (running) {
    execute(
      read(ParameterMode.Immediate),
      read,
      write,
      halt,
      readInput,
      writeOutput,
      jump,
      adjustRelativeBase
    );
  }
};
