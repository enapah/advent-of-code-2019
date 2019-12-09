import {execute} from '../int-computer/execute';

export const runProgram = (input: number[], noun: number, verb: number) => {
  const program = [input[0], noun, verb, ...input.slice(3)];

  let instructionPointer = 0;
  let running = true;

  const read = () => program[program[instructionPointer++]] || 0;

  const write = (value: number) =>
    (program[program[instructionPointer++]] = value);

  while (running) {
    execute(
      program[instructionPointer++],
      read,
      write,
      () => (running = false)
    );
  }
  return program[0];
};
