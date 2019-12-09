import {Operation, ParameterMode} from './types';
import {parseInstruction} from './parse-instruction';

const notImplemented = () => {
  throw new Error('Not implemented');
};

export const execute = (
  instruction: number,
  read: (mode: ParameterMode) => number,
  write: (value: number, mode: ParameterMode) => void,
  halt: () => void,
  readInput: () => number = notImplemented,
  writeOutput: (value: number) => void = notImplemented,
  jump: (address: number) => void = notImplemented,
  adjustRelativeBase: (address: number) => void = notImplemented
) => {
  const {mode1, mode2, mode3, opCode} = parseInstruction(instruction);

  switch (opCode) {
    case Operation.Add: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 + param2, mode3);
      break;
    }
    case Operation.Multiply: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 * param2, mode3);
      break;
    }
    case Operation.Input: {
      write(readInput(), mode1);

      break;
    }
    case Operation.Output: {
      writeOutput(read(mode1));
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

      if (param1 == 0) {
        jump(param2);
      }
      break;
    }
    case Operation.LessThan: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 < param2 ? 1 : 0, mode3);
      break;
    }
    case Operation.Equals: {
      const param1 = read(mode1);
      const param2 = read(mode2);

      write(param1 === param2 ? 1 : 0, mode3);
      break;
    }
    case Operation.AdjustRelative: {
      const param1 = read(mode1);

      adjustRelativeBase(param1);
      break;
    }
    case Operation.Halt:
      halt();
      break;
  }
};
