import {State} from './types';

export const updateState = (moons: State, axis: 'x' | 'y' | 'z') => {
  for (let i = 0; i < moons.length; i++) {
    for (let j = i + 1; j < moons.length; j++) {
      const d = moons[i].position[axis] - moons[j].position[axis];

      moons[i].velocity[axis] += Math.sign(-d);
      moons[j].velocity[axis] += Math.sign(d);
    }
  }
  moons.forEach(moon => (moon.position[axis] += moon.velocity[axis]));
};
