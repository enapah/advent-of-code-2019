import {Location} from './location';

export const getAngle = (a: Location, b: Location) =>
  ((5 * Math.PI) / 2 + Math.atan2(a.y - b.y, a.x - b.x)) % (2 * Math.PI);
