import {assert} from 'chai';

import solution, {fuelRequired} from './part2';

describe('part 2', () => {
  it('examples', () => {
    assert.equal(fuelRequired(14), 2);
    assert.equal(fuelRequired(1969), 966);
    assert.equal(fuelRequired(100756), 50346);
  });

  it('solution', () => {
    assert.equal(solution(), 5120654);
  });
});
