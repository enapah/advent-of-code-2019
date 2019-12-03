import {readInput} from '../utils/read-input';
import {intersectionOf} from '../utils/intersection-of';

import {calculateSteps} from './calculate-steps';
import {manhattanDistance} from './manhattan-distance';

export const findClosestIntersectionByDistance = (
  first: string,
  second: string
) => {
  const intersectionPoints = intersectionOf(
    calculateSteps(first),
    calculateSteps(second)
  );

  return Math.min(...intersectionPoints.map(manhattanDistance));
};

export const part1 = () => {
  const [first, second] = readInput(__dirname);

  return findClosestIntersectionByDistance(first, second);
};

export const findClosestIntersectionByNumberOfSteps = (
  first: string,
  second: string
) => {
  const steps1 = calculateSteps(first);
  const steps2 = calculateSteps(second);

  return Math.min(
    ...intersectionOf(steps1, steps2).map(
      point => steps1.indexOf(point) + steps2.indexOf(point) + 2
    )
  );
};

export const part2 = () => {
  const [first, second] = readInput(__dirname);

  return findClosestIntersectionByNumberOfSteps(first, second);
};
