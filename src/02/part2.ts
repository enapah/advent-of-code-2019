import {readLines} from '../util';

export const calc = (input: string, verb: number, noun: number) => {
  const program = input.split(',').map(Number);
  program[1] = noun;
  program[2] = verb;

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

  let res = -1;
  let verb = 0;
  let noun = 0;

  while (res !== 19690720) {
    res = calc(program, verb, noun);

    if (res === 19690720) {
      return verb + noun * 100;
    }

    verb++;
    if (verb === 100) {
      verb = 0;
      noun++;
    }
  }
};
