import {Operation, ParameterMode} from './types';

export const parseInstruction = (
  instruction: number
): {
  opCode: Operation;
  mode1: ParameterMode;
  mode2: ParameterMode;
  mode3: ParameterMode;
} => {
  const [mode3, mode2, mode1, ...opCode] = `0000${instruction}`
    .split('')
    .slice(-5)
    .map(Number);

  return {
    opCode: Number(opCode.join('')) as Operation,
    mode1: mode1 as ParameterMode,
    mode2: mode2 as ParameterMode,
    mode3: mode3 as ParameterMode
  };
};
