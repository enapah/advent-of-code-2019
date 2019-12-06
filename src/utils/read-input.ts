import fs from 'fs';

export const readInput = (dirname: string) =>
  fs.readFileSync(`${dirname}/input`, 'utf8').split(/\r?\n/);
