import fs from 'fs';

export const readLines = (filename: string) => fs.readFileSync(filename, 'utf8').split('\n');
