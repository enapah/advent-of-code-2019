import {readLines} from '../util';

export const fuelRequired = (mass: number): number => {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel > 0) {
    return fuel + fuelRequired(fuel);
  }
  return 0;
};

export default () =>
  readLines(`${__dirname}/input`)
    .map(Number)
    .map(fuelRequired)
    .reduce((sum, fuel) => sum + fuel, 0);
