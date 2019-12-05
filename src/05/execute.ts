import {Operation, ParameterMode} from './types';
import {parseInstruction} from './parse-instruction';

export const execute = (
  read: (mode?: ParameterMode) => number,
  write: (value: number) => void,
  readInput: () => number,
  writeOutput: (value: number) => void,
  jump: (address: number) => void,
  halt: () => void
) => {
  const {mode1, mode2, opCode} = parseInstruction(read());

  switch (opCode) {
    case Operation.Add: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 + param2);
      break;
    }
    case Operation.Multiply: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 * param2);
      break;
    }
    case Operation.Input: {
      write(readInput());

      break;
    }
    case Operation.Output: {
      writeOutput(read(ParameterMode.Position));
      break;
    }
    case Operation.JumpIfTrue: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      if (param1 !== 0) {
        jump(param2);
      }
      break;
    }
    case Operation.JumpIfFalse: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      if (param1 === 0) {
        jump(param2);
      }
      break;
    }
    case Operation.LessThan: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 < param2 ? 1 : 0);
      break;
    }
    case Operation.Equals: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 === param2 ? 1 : 0);
      break;
    }
    case Operation.Halt:
      halt();
      break;
  }
};
