import {readLines} from '../util';

export const calc = (input: string) => {
  const program = input.split(',').map(Number);
  program[1] = 12;
  program[2] = 2;

  let pc = 0;

  while (true) {

    const instr = program[pc];

    if (instr === 1) {
      const arg1 = program[pc + 1];
      const arg2 = program[pc + 2];
      const dest = program[pc + 3];
      program[dest] = program[arg1] + program[arg2];

      pc += 4;
    } else if (instr === 2) {
      const arg1 = program[pc + 1];
      const arg2 = program[pc + 2];
      const dest = program[pc + 3];
      program[dest] = program[arg1] * program[arg2];
      pc += 4;
    } else if (instr === 99) {
      return program[0];
    } else {
      return program[0];
    }
  }
};

export default () => {
  const [program] = readLines(`${__dirname}/input`);


  return calc(program);
};
