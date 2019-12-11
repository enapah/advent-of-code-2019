import {readInput} from '../utils/read-input';
import {runProgram} from '../int-computer/run-program';
import {range} from '../utils/range';
import {Color, Direction, Mode, Position} from './types';
import {move, turn} from './transform';
import {findExtent} from './find-extent';

const paint = (startingColor: Color) => {
  const [input] = readInput(__dirname);
  const program = input.split(',').map(Number);
  const pixels = new Map<string, Color>();

  let position: Position = {x: 0, y: 0};
  let direction: Direction = Direction.Up;
  let mode = Mode.Color;

  pixels.set(JSON.stringify(position), startingColor);

  runProgram(
    program,
    () => pixels.get(JSON.stringify(position)) || 0,
    value => {
      switch (mode) {
        case Mode.Color:
          pixels.set(JSON.stringify(position), value);

          mode = Mode.Move;
          break;
        case Mode.Move:
          direction = turn(value, direction);
          position = move(position, direction);

          mode = Mode.Color;
          break;
      }
    }
  );
  return pixels;
};

const colorToString = (color: Color) => (color === Color.White ? '█' : ' ');

export const part1 = () => [...paint(Color.Black).keys()].length;

export const part2 = () => {
  const pixels = paint(Color.White);
  const {minX, maxX, minY, maxY} = findExtent(pixels);
  const xs = range(minX, maxX);
  const ys = range(minY, maxY);

  return ys
    .map(y =>
      xs
        .map(x => JSON.stringify({x, y}))
        .map(position => pixels.get(position)!)
        .map(colorToString)
        .join('')
    )
    .join('\n');
};
