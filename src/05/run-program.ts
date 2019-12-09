import {execute} from '../int-computer/execute';
import {ParameterMode} from '../int-computer/types';

export const runProgram = (
  input: number[],
  readInput: () => number,
  writeOutput: (value: number) => void
) => {
  let running = true;
  let instructionPointer = 0;

  const program = [...input];

  const read = (mode: ParameterMode) =>
    mode === ParameterMode.Immediate
      ? program[instructionPointer++]
      : program[program[instructionPointer++]];

  const write = (value: number) =>
    (program[program[instructionPointer++]] = value);

  const jump = (address: number) => (instructionPointer = address);

  const halt = () => (running = false);

  while (running) {
    execute(
      program[instructionPointer++],
      read,
      write,
      halt,
      readInput,
      writeOutput,
      jump
    );
  }
};
