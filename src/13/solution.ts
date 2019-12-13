import {readInput} from '../utils/read-input';
import {runProgram} from '../int-computer/run-program';

enum Tile {
  Empty,
  Wall,
  Block,
  Paddle,
  Ball
}

enum Joystick {
  Left = -1,
  Center = 0,
  Right = 1
}

const bufferedInput = (
  callback: (value: {x: number; y: number; id: number}) => void
) => {
  let buffer: number[] = [];

  return (value: number) => {
    buffer.push(value);

    if (buffer.length === 3) {
      const [x, y, id] = buffer;

      callback({x, y, id});

      buffer = [];
    }
  };
};

export const part1 = () => {
  const [program] = readInput(__dirname);

  let numberOfBlocks = 0;

  runProgram(
    program.split(',').map(Number),
    () => 0,
    bufferedInput(({id}) => {
      if (id === 2) {
        numberOfBlocks++;
      }
    })
  );

  return numberOfBlocks;
};

const adjustJoystick = (dx: number) => {
  if (dx < 0) {
    return Joystick.Left;
  }
  if (dx > 0) {
    return Joystick.Right;
  }
  return Joystick.Center;
};

export const part2 = () => {
  const [line] = readInput(__dirname);
  const program = [
    2,
    ...line
      .split(',')
      .slice(1)
      .map(Number)
  ];

  let score = 0;
  let ballPosition = 0;
  let paddlePosition = 0;

  runProgram(
    program,
    () => adjustJoystick(ballPosition - paddlePosition),
    bufferedInput(({x, y, id}) => {
      if (x === -1 && y === 0) {
        score = id;
      } else {
        if (id === Tile.Ball) {
          ballPosition = x;
        }
        if (id === Tile.Paddle) {
          paddlePosition = x;
        }
      }
    })
  );

  return score;
};
