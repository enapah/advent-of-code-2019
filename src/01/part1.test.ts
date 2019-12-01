import {assert} from 'chai';

import solution, {fuelRequired} from './part1';

describe('part 1', () => {
  it('examples', () => {
    assert.equal(fuelRequired(12), 2);
    assert.equal(fuelRequired(14), 2);
    assert.equal(fuelRequired(1969), 654);
    assert.equal(fuelRequired(100756), 33583);
  });

  it('solution', () => {
    assert.equal(solution(), 3415695);
  });
});
