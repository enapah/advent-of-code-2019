import {assert} from 'chai';

import {part1, part2} from './solution';

describe('Day 13', () => {
  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 296);
    });
  });

  describe('part 2', () => {
    it('solution', () => {
      assert.equal(part2(), 13824);
    });
  });
});
