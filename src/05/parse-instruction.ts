import {Operation, ParameterMode} from './types';

export const parseInstruction = (
  instruction: number
): {opCode: Operation; mode1: ParameterMode; mode2: ParameterMode} => {
  const [mode2, mode1, _, opCode] = `000${instruction}`
    .split('')
    .slice(-4)
    .map(Number);

  return {
    opCode: opCode as Operation,
    mode1: mode1 as ParameterMode,
    mode2: mode2 as ParameterMode
  };
};
