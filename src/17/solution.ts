import {readInput} from '../utils/read-input';
import {runProgram} from '../int-computer/run-program';
import {Direction, Position} from '../15/types';
import {turnLeft, turnRight} from '../15/transform';

const move = ({x, y}: Position, direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return {x, y: y - 1};
    case Direction.East:
      return {x: x + 1, y};
    case Direction.South:
      return {x, y: y + 1};
    case Direction.West:
      return {x: x - 1, y};
  }
};

const toAscii = (main: string) => main.split('').map(s => s.charCodeAt(0));

export const part1 = () => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);

  let s = '';

  runProgram(
    program,
    () => 0,
    value => (s += String.fromCharCode(value))
  );

  return s
    .split('\n')
    .map(row => row.split(''))
    .reduce(
      (sum, row, y, rows) =>
        row.reduce(
          (sum, cell, x) =>
            x > 0 &&
            x < row.length - 1 &&
            y > 0 &&
            y < rows.length - 1 &&
            cell === '#' &&
            row[x + 1] === '#' &&
            row[x - 1] === '#' &&
            rows[y + 1][x] === '#' &&
            rows[y + 1][x] === '#'
              ? sum + y * x
              : sum,
          sum
        ),
      0
    );
};

export const part2 = () => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);
  const program2 = [
    2,
    ...line
      .split(',')
      .map(Number)
      .slice(1)
  ];

  let s = '';

  runProgram(
    program,
    () => 0,
    value => (s += String.fromCharCode(value))
  );

  const rows = s.split('\n');
  let position: Position = {x: 20, y: 20};
  let direction: Direction = Direction.North;

  const path: string[] = [];

  while (true) {
    const {x, y} = move(position, direction);

    const next = rows[y] && rows[y][x];

    if (next === '#') {
      position = {x, y};
      path.push('F');
    } else {
      const left = turnLeft(direction);
      const right = turnRight(direction);

      const leftPosition = move(position, left);
      const rightPosition = move(position, right);

      if (
        rows[leftPosition.y] &&
        rows[leftPosition.y][leftPosition.x] === '#'
      ) {
        direction = left;
        path.push('L');
      } else if (
        rows[rightPosition.y] &&
        rows[rightPosition.y][rightPosition.x] === '#'
      ) {
        direction = right;
        path.push('R');
      } else {
        break;
      }
    }
  }

  const p = path.join('').replace(/(F+)/g, match => match.length.toString(16));
  console.log(p);

  const shorten = (path: string, subs: string[] = []): string[] => {
    if (subs.length === 3) {
      if (/^[ABC]+$/.test(path)) {
        console.log([path, ...subs]);
        return [path, ...subs];
      }

      return [];
    }

    const startIndex = path
      .split('')
      .findIndex(p => !['A', 'B', 'C'].includes(p));

    for (
      let i = startIndex + 1;
      i < path.length && !['A', 'B', 'C'].includes(path[i]);
      i++
    ) {
      const sub = path.slice(startIndex, i);

      const next = path.replace(
        new RegExp(sub, 'g'),
        subs.length === 0 ? 'A' : subs.length === 1 ? 'B' : 'C'
      );

      const shorten1 = shorten(next, [...subs, sub]);
      if (shorten1.length) {
        return shorten1;
      }
    }
    return [];
  };

  const [main, subA, subB, subC] = shorten(p).map(s =>
    toAscii(
      s
        .split('')
        .map(s => (/[a-f]/.test(s) ? Number.parseInt(s, 16) : s))
        .join(',') + '\n'
    )
  );

  /*
  const main = toAscii('B,C,B,A,C,A,C,B,A,C\n');
  const subA = toAscii('L,10,R,8,R,8,L,10\n');
  const subB = toAscii('L,10,L,6,R,10\n');
  const subC = toAscii('R,6,R,8,R,8,L,6,R,8\n');
*/
  const feed = toAscii('n\n');

  const all = [...main, ...subA, ...subB, ...subC, ...feed];

  let lastValue = -1;
  runProgram(
    program2,
    () => all.shift()!,
    value => (lastValue = value)
  );

  console.log(lastValue);
};
