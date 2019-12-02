import {assert} from 'chai';

import {part1, part2, fuelRequired, fuelRequiredRec} from './solution';

describe('Day 1', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(fuelRequired(12), 2);
      assert.equal(fuelRequired(14), 2);
      assert.equal(fuelRequired(1969), 654);
      assert.equal(fuelRequired(100756), 33583);
    });

    it('solution', () => {
      assert.equal(part1(), 3415695);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.equal(fuelRequiredRec(14), 2);
      assert.equal(fuelRequiredRec(1969), 966);
      assert.equal(fuelRequiredRec(100756), 50346);
    });

    it('solution', () => {
      assert.equal(part2(), 5120654);
    });
  });
});
