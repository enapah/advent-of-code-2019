import {Location} from './location';
import {getVisibleAsteroids} from './get-visible-asteroids';

export const findLocationOfMonitoringStation = (
  asteroids: Location[],
  width: number,
  height: number
) => {
  const [bestLocation] = asteroids
    .map(location => ({
      location,
      visible: getVisibleAsteroids(location, asteroids, width, height)
    }))
    .sort((a, b) => b.visible.length - a.visible.length);
  return bestLocation;
};
