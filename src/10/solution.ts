import {readInput} from '../utils/read-input';

import {parseInput} from './parse-input';
import {findLocationOfMonitoringStation} from './find-location-of-monitoring-station';
import {getVisibleAsteroids} from './get-visible-asteroids';
import {Location} from './location';
import {getAngle} from './get-angle';

export const part1 = () => {
  const {asteroids, width, height} = parseInput(readInput(__dirname));
  const {visible} = findLocationOfMonitoringStation(asteroids, width, height);

  return visible.length;
};

const sortByAngle = (asteroids: Location[], location: Location): Location[] =>
  asteroids
    .map(a => ({x: a.x, y: a.y, angle: getAngle(a, location)}))
    .sort((a, b) => a.angle - b.angle);

export const part2 = () => {
  const {asteroids, width, height} = parseInput(readInput(__dirname));
  const {location} = findLocationOfMonitoringStation(asteroids, width, height);

  let asteroidsLeft = [...asteroids];
  const destroyedAsteroids: Location[] = [];

  while (asteroidsLeft.length > 1) {
    destroyedAsteroids.push(
      ...sortByAngle(
        getVisibleAsteroids(location, asteroidsLeft, width, height),
        location
      )
    );
    asteroidsLeft = asteroidsLeft.filter(
      a => !destroyedAsteroids.some(b => a.x === b.x && a.y === b.y)
    );
  }

  const {x, y} = destroyedAsteroids[199];

  return x * 100 + y;
};
