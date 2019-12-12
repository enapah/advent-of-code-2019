import {State} from './types';
import {updateState} from './update-state';

export const findPeriodForAxis = (
  startState: State,
  moons: State,
  axis: 'x' | 'y' | 'z'
) => {
  let steps = 0;

  do {
    steps++;
    updateState(moons, axis);
  } while (
    !moons.every(
      (moon, i) =>
        startState[i].position[axis] === moon.position[axis] &&
        startState[i].velocity[axis] === moon.velocity[axis]
    )
  );
  return steps;
};
