import {gcd} from './gcd';

export const lcm = (...numbers: number[]): number =>
  numbers.reduce((acc, number) => (acc * number) / gcd(acc, number), 1);
