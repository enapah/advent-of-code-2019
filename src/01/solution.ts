import {readInput} from '../utils/read-input';

export const fuelRequired = (mass: number) => Math.floor(mass / 3) - 2;

export const fuelRequiredRec = (mass: number): number => {
  const fuel = fuelRequired(mass);

  if (fuel > 0) {
    return fuel + fuelRequiredRec(fuel);
  }
  return 0;
};

export const part1 = () =>
  readInput(__dirname)
    .map(Number)
    .map(fuelRequired)
    .reduce((sum, fuel) => sum + fuel, 0);

export const part2 = () =>
  readInput(__dirname)
    .map(Number)
    .map(fuelRequiredRec)
    .reduce((sum, fuel) => sum + fuel, 0);
