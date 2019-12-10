import {Location} from './location';

export const parseInput = (input: string[]) => {
  const rows = input;

  const height = rows.length;
  const width = rows[0].length;

  let asteroids: Location[] = [];

  rows.map((row, y) =>
    row.split('').map((cell, x) => {
      if (cell === '#') {
        asteroids.push({x, y});
      }
    })
  );
  return {height, width, asteroids};
};
