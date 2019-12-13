import {readInput} from '../../utils/read-input';

const swapPositions = (
  password: string[],
  positionX: number,
  positionY: number
) =>
  password.map((c, i) => {
    if (i === positionX) {
      return password[positionY];
    }
    if (i === positionY) {
      return password[positionX];
    }
    return c;
  });

const swapLetters = (password: string[], letterX: string, letterY: string) =>
  swapPositions(password, password.indexOf(letterX), password.indexOf(letterY));

const rotateSteps = (password: string[], direction: string, steps: number) => {
  const dir = direction === 'left' ? -1 : 1;
  let s = (dir * steps) % password.length;

  if (s < 0) {
    s = password.length + steps;
  }

  return [...password.slice(steps), ...password.slice(0, steps)];
};

const rotateByPosition = (password: string[], letter: string) => {
  let position = password.indexOf(letter);

  return rotateSteps(
    password,
    'right',
    position >= 4 ? position + 2 : position + 1
  );
};

const movePosition = (
  password: string[],
  positionX: number,
  positionY: number
) => {
  const letter = password[positionX];

  const p = password.filter((_, i) => i !== positionX);

  return p;
};

export const part1 = () => {
  /*
swap position X with position Y
  means that the letters at indexes X and Y (counting from 0) should be swapped.

swap letter X with letter Y
  means that the letters X and Y should be swapped (regardless of where they appear in the string).

rotate left/right X steps
  means that the whole string should be rotated; for example, one right rotation would turn abcd into dabc.

rotate based on position of letter X
  means that the whole string should be rotated to the right based on the index of letter X (counting from 0) as determined before this instruction does any rotations. Once the index is determined, rotate the string to the right one time, plus a number of times equal to that index, plus one additional time if the index was at least 4.

reverse positions X through Y 
  means that the span of letters at indexes X through Y (including the letters at X and Y) should be reversed in order.

move position X to position Y means that the letter which is at index X should be removed from the string, then inserted such that it ends up at index Y.
   */

  let password = 'abcde'.split('');

  readInput(__dirname).forEach(s => {
    let match = s.match(/swap position (.*) with position (.*)/);
    if (match) {
      password = swapPositions(password, Number(match[1]), Number(match[2]));
    }
    match = s.match(/swap letter (.*) with letter (.*)/);
    if (match) {
      password = swapLetters(password, match[1], match[2]);
    }
    match = s.match(/rotate (.*) (.*) steps/);
    if (match) {
      password = rotateSteps(password, match[1], Number(match[2]));
    }
    match = s.match(/rotate based on position of letter (.*)/);
    if (match) {
      rotateByPosition(password, match[1]);
    }
  });
};

export const part2 = () => readInput(__dirname);
