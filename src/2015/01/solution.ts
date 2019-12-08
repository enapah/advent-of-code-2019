import {readInput} from '../../utils/read-input';

export const followInstructions = (instructions: string) => {
  let floor = 0;

  return instructions
    .split('')
    .map(c => (c === '(' ? 1 : -1))
    .map(c => {
      floor += c;
      return floor;
    });
};

export const getEndFloor = (instructions: string) => {
  const [floor] = followInstructions(instructions).slice(-1);
  return floor;
};

export const positionOfFirstVisitToBasement = (instructions: string) =>
  followInstructions(instructions).indexOf(-1) + 1;

export const part1 = () => {
  const [instructions] = readInput(__dirname);

  return getEndFloor(instructions);
};

export const part2 = () => {
  const [instructions] = readInput(__dirname);

  return positionOfFirstVisitToBasement(instructions);
};
