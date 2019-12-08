import {readInput} from '../../utils/read-input';

type Dimensions = {length: number; width: number; height: number};

const parseDimensions = (dimensions: string) => {
  const [length, width, height] = dimensions.split('x').map(Number);

  return {length, width, height};
};

export const calculateAmountOfWrappingPaper = ({
  length,
  width,
  height
}: Dimensions) => {
  const sides = [length * width, width * height, height * length];

  return sides.reduce((area, side) => area + 2 * side, Math.min(...sides));
};

export const calculateAmountOfRibbon = ({length, width, height}: Dimensions) =>
  2 * Math.min(length + width, length + height, width + height) +
  length * width * height;

const solve = (f: (dimensions: Dimensions) => number) =>
  readInput(__dirname)
    .map(parseDimensions)
    .reduce((sum, dimensions) => sum + f(dimensions), 0);

export const part1 = () => solve(calculateAmountOfWrappingPaper);

export const part2 = () => solve(calculateAmountOfRibbon);
