import {State} from './types';
import {updateState} from './update-state';

export const getTotalEnergy = (moons: State, steps: number) => {
  for (let step = 1; step <= steps; step++) {
    updateState(moons, 'x');
    updateState(moons, 'y');
    updateState(moons, 'z');
  }

  const energy = moons.map(
    moon =>
      (Math.abs(moon.velocity.x) +
        Math.abs(moon.velocity.y) +
        Math.abs(moon.velocity.z)) *
      (Math.abs(moon.position.x) +
        Math.abs(moon.position.y) +
        Math.abs(moon.position.z))
  );

  return energy.reduce((sum, e) => sum + e, 0);
};
