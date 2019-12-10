import {Location} from './location';
import {getAllBlockedLocations} from './get-all-blocked-locations';

export const getVisibleAsteroids = (
  location: Location,
  asteroids: Location[],
  width: number,
  height: number
): Location[] => {
  const blockedLocations = asteroids.reduce(
    (acc, b) => [...acc, ...getAllBlockedLocations(location, b, width, height)],
    [location]
  );
  return asteroids.filter(
    s => !blockedLocations.some(b => b.x === s.x && b.y === s.y)
  );
};
