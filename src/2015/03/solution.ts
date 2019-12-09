import {readInput} from '../../utils/read-input';

const visitedHoses = (directions: string[]) =>
  directions
    .map(dir => {
      switch (dir) {
        case '^':
          return {dx: 0, dy: 1};
        case '>':
          return {dx: 1, dy: 0};
        case 'v':
          return {dx: 0, dy: -1};
        case '<':
        default:
          return {dx: -1, dy: 0};
      }
    })
    .reduce(
      ([{x, y}, ...rest], {dx, dy}) => [
        {x: x + dx, y: y + dy},
        {x, y},
        ...rest
      ],
      [{x: 0, y: 0}]
    )
    .map(({x, y}) => `${x}-${y}`);

export const numberOfVisitedHouses = (...directions: string[][]) => {
  const moves = directions.reduce(
    (acc, dir) => [...acc, ...visitedHoses(dir)],
    []
  );

  return new Set(moves).size;
};

export const part1 = () => {
  const [directions] = readInput(__dirname);

  return numberOfVisitedHouses(directions.split(''));
};

export const part2 = () => {
  const [directions] = readInput(__dirname);

  const {even, odd} = directions.split('').reduce(
    ({odd, even}, direction, i) => ({
      odd: i % 2 === 0 ? [...odd, direction] : odd,
      even: i % 2 === 1 ? [...even, direction] : even
    }),
    {odd: [], even: []} as {odd: string[]; even: string[]}
  );

  return numberOfVisitedHouses(even, odd);
};
