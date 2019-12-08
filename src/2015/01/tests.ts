import {assert} from 'chai';

import {
  getEndFloor,
  part1,
  part2,
  positionOfFirstVisitToBasement
} from './solution';

describe('2015 - Day 1', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(getEndFloor('(())'), 0);
      assert.equal(getEndFloor('()()'), 0);

      assert.equal(getEndFloor('((('), 3);
      assert.equal(getEndFloor('(()(()('), 3);
      assert.equal(getEndFloor('))((((('), 3);

      assert.equal(getEndFloor('())'), -1);
      assert.equal(getEndFloor('))('), -1);

      assert.equal(getEndFloor(')))'), -3);
      assert.equal(getEndFloor(')())())'), -3);
    });

    it('solution', () => {
      assert.equal(part1(), 232);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.equal(positionOfFirstVisitToBasement(')'), 1);
      assert.equal(positionOfFirstVisitToBasement('()())'), 5);
    });

    it('solution', () => {
      assert.equal(part2(), 1783);
    });
  });
});
