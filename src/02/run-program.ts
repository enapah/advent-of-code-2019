export const runProgram = (input: number[], noun: number, verb: number) => {
  const program = [input[0], noun, verb, ...input.slice(3)];

  let instructionPointer = 0;

  while (true) {
    const [opCode, param1, param2, address] = program.slice(instructionPointer);
    instructionPointer += 4;

    if (opCode === 1) {
      program[address] = program[param1] + program[param2];
    } else if (opCode === 2) {
      program[address] = program[param1] * program[param2];
    } else {
      return program[0];
    }
  }
};
