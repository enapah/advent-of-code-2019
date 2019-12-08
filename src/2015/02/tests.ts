import {assert} from 'chai';

import {
  calculateAmountOfRibbon,
  calculateAmountOfWrappingPaper,
  part1,
  part2
} from './solution';

describe('2015 - Day 2', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(
        calculateAmountOfWrappingPaper({length: 2, width: 3, height: 4}),
        58
      );
      assert.equal(
        calculateAmountOfWrappingPaper({length: 1, width: 1, height: 10}),
        43
      );
    });

    it('solution', () => {
      assert.equal(part1(), 1586300);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.equal(
        calculateAmountOfRibbon({length: 2, width: 3, height: 4}),
        34
      );
      assert.equal(
        calculateAmountOfRibbon({length: 1, width: 1, height: 10}),
        14
      );
    });

    it('solution', () => {
      assert.equal(part2(), 3737498);
    });
  });
});
