import {readLines} from '../util';

export const fuelRequired = (mass: number) => Math.floor(mass / 3) - 2;

export default () =>
  readLines(`${__dirname}/input`)
    .map(Number)
    .map(fuelRequired)
    .reduce((sum, fuel) => sum + fuel, 0);
