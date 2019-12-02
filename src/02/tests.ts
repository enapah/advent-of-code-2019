import {assert} from 'chai';

import {part1, part2} from './solution';

describe('Day 2', () => {
  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 7594646);
    });
  });

  describe('part 2', () => {
    it('examples', () => {});

    it('solution', () => {
      assert.equal(part2(), 3376);
    });
  });
});
