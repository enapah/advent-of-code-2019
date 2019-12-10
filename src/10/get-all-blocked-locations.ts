import {Location} from './location';
import {gcd} from '../utils/gcd';

export const getAllBlockedLocations = (
  origin: Location,
  blocker: Location,
  width: number,
  height: number
) => {
  const blocked = [];
  let dx = blocker.x - origin.x;
  let dy = blocker.y - origin.y;

  if (dx !== 0 || dy !== 0) {
    const divisor = Math.abs(gcd(dx, dy));

    if (divisor !== 0) {
      dx /= divisor;
      dy /= divisor;
    }

    let x = blocker.x;
    let y = blocker.y;

    while (x >= 0 && y >= 0 && x < width && y < height) {
      x += dx;
      y += dy;
      blocked.push({x, y});
    }
  }
  return blocked;
};
