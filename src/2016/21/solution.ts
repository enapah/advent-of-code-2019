import {readInput} from '../../utils/read-input';
import {combinationsWithoutRepetition} from '../../utils/combinations-without-repetition';

export const swapPositions = (
  password: string,
  positionX: number,
  positionY: number
): string =>
  password
    .split('')
    .map((c, i) => {
      if (i === positionX) {
        return password[positionY];
      }
      if (i === positionY) {
        return password[positionX];
      }
      return c;
    })
    .join('');

export const swapLetters = (
  password: string,
  letterX: string,
  letterY: string
): string =>
  swapPositions(password, password.indexOf(letterX), password.indexOf(letterY));

export const rotateSteps = (
  password: string,
  direction: string,
  steps: number
): string => {
  const dir = direction === 'left' ? 1 : -1;
  let s = (dir * steps) % password.length;

  return [...password.slice(s), ...password.slice(0, s)].join('');
};

export const rotateByPosition = (password: string, letter: string): string => {
  let position = password.indexOf(letter);

  return rotateSteps(
    password,
    'right',
    position >= 4 ? position + 2 : position + 1
  );
};

export const movePosition = (
  password: string,
  positionX: number,
  positionY: number
): string => {
  const letter = password[positionX];

  const p = password.split('').filter((_, i) => i !== positionX);

  return [...p.slice(0, positionY), letter, ...p.slice(positionY)].join('');
};

export const reversePositions = (
  password: string,
  positionX: number,
  positionY: number
): string => {
  const p = password.split('');

  return [
    ...p.slice(0, positionX),
    ...p.slice(positionX, positionY + 1).reverse(),
    ...p.slice(positionY + 1)
  ].join('');
};

const applyOperation = (password: string, operation: string) => {
  let match = operation.match(/swap position (.*) with position (.*)/);
  if (match) {
    return swapPositions(password, Number(match[1]), Number(match[2]));
  }
  match = operation.match(/swap letter (.) with letter (.)/);
  if (match) {
    return swapLetters(password, match[1], match[2]);
  }
  match = operation.match(/rotate (left|right) (.*) steps?/);
  if (match) {
    return rotateSteps(password, match[1], Number(match[2]));
  }
  match = operation.match(/rotate based on position of letter (.)/);
  if (match) {
    return rotateByPosition(password, match[1]);
  }
  match = operation.match(/reverse positions (.*) through (.*)/);
  if (match) {
    return reversePositions(password, Number(match[1]), Number(match[2]));
  }
  match = operation.match(/move position (.*) to position (.*)/);
  if (match) {
    return movePosition(password, Number(match[1]), Number(match[2]));
  }
  throw new Error('No match for ' + operation);
};

const scramble = (operations: string[], password: string) =>
  operations.reduce(applyOperation, password);

export const part1 = () => {
  const password = 'abcdefgh';
  const operations = readInput(__dirname);

  return scramble(operations, password);
};

export const part2 = () => {
  const scrambled = 'fbgdceah';
  const operations = readInput(__dirname);
  const allCombinations = combinationsWithoutRepetition(
    scrambled.split('')
  ).map(s => s.join(''));

  return allCombinations.find(c => scramble(operations, c) === scrambled)!;
};
