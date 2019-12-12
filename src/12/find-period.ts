import {State} from './types';
import {lcm} from '../utils/lcm';
import {findPeriodForAxis} from './find-period-for-axis';

export const findPeriod = (moons: State) => {
  const startState = JSON.parse(JSON.stringify(moons)) as State;

  return lcm(
    findPeriodForAxis(startState, moons, 'x'),
    findPeriodForAxis(startState, moons, 'y'),
    findPeriodForAxis(startState, moons, 'z')
  );
};
