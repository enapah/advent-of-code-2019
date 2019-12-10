import {assert} from 'chai';

import {part1, part2} from './solution';

describe('2017 - Day 24', () => {
  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 1859);
    });
  });

  describe('part 2', () => {
    it('solution', () => {
      assert.equal(part2(), 1799);
    });
  });
});
