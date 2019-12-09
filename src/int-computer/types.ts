export enum ParameterMode {
  Position = 0,
  Immediate = 1,
  Relative = 2
}

export enum Operation {
  Add = 1,
  Multiply = 2,
  Input = 3,
  Output = 4,
  JumpIfTrue = 5,
  JumpIfFalse = 6,
  LessThan = 7,
  Equals = 8,
  AdjustRelative = 9,
  Halt = 99
}
