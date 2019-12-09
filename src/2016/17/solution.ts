import crypto from 'crypto';

import {readInput} from '../../utils/read-input';

export const part1 = () => findShortestPath(readInput(__dirname)[0]);

export const part2 = () => findLongestPath(readInput(__dirname)[0]);

export const hash = (s: string) =>
  crypto
    .createHash('md5')
    .update(s)
    .digest('hex')
    .substr(0, 4)
    .split('')
    .map(s => Number(`0x${s}`) > 0xa);

const traverse = (
  password: string,
  isBetter: (path1: string, path2: string) => boolean
) => {
  const toVisit: {path: string; x: number; y: number}[] = [
    {path: '', x: 0, y: 0}
  ];

  let optimalPath = '';

  const end = (path: string) => {
    if (!optimalPath || isBetter(path, optimalPath)) {
      optimalPath = path;
    }
  };

  while (toVisit.length > 0) {
    const {path, x, y} = toVisit.shift()!;
    const [up, down, left, right] = hash(password + path);

    if (up && y > 0) {
      toVisit.push({path: `${path}U`, x, y: y - 1});
    }
    if (down && y < 3) {
      if (x === 3 && y === 2) {
        end(`${path}D`);
      } else {
        toVisit.push({path: `${path}D`, x, y: y + 1});
      }
    }
    if (left && x > 0) {
      toVisit.push({path: `${path}L`, x: x - 1, y});
    }
    if (right && x < 3) {
      if (x === 2 && y === 3) {
        end(`${path}R`);
      } else {
        toVisit.push({path: `${path}R`, x: x + 1, y});
      }
    }
  }
  return optimalPath;
};

export const findShortestPath = (password: string) =>
  traverse(password, (path1, path2) => path1.length < path2.length);

export const findLongestPath = (password: string) =>
  traverse(password, (path1, path2) => path1.length > path2.length);
