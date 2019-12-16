import {readInput} from '../utils/read-input';

export const getNext = (numbers: number[]) => {
  const pattern = [0, 1, 0, -1];

  return numbers.map((_, i) => {
    let res = 0;

    for (let j = 0; j < numbers.length; j++) {
      res += numbers[j] * pattern[Math.floor((j + 1) / (i + 1)) % 4];
    }

    return Number(String(Math.abs(res)).substr(-1));
  });
};

export const getNext2 = (numbers: number[]) => {
  for (let i = numbers.length - 2; i >= 0; i--) {
    numbers[i] = (numbers[i + 1] + numbers[i]) % 10;
  }
};

export const extracted = (input: string) => {
  let numbers = input.split('').map(Number);

  for (let i = 0; i < 100; i++) {
    numbers = getNext(numbers);
  }

  return numbers.join('').slice(0, 8);
};

export const extracted2 = (input: string) => {
  const offset = Number(input.slice(0, 7));

  const numbers = input
    .repeat(10000)
    .substr(offset)
    .split('')
    .map(Number);

  for (let i = 0; i < 100; i++) {
    getNext2(numbers);
  }
  return numbers.join('').slice(0, 8);
};

export const part1 = () => {
  const [line] = readInput(__dirname);

  return extracted(line);
};

export const part2 = () => {
  const [line] = readInput(__dirname);

  return console.log(extracted2(line));
};
