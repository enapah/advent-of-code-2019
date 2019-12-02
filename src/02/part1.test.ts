import {assert} from 'chai';

import solution from './part1';
import {calc} from './part1';

describe('part 1', () => {
  it('examples', () => {
    const input = '1,9,10,3,2,3,11,0,99,30,40,50';

    console.log(calc(input));
  });

  it('solution', () => {
    console.log(solution())
  });
});
