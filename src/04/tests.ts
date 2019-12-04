import {assert} from 'chai';

import {
  notDecreasing,
  atLeastTwoAdjacent,
  exactlyTwoAdjacent,
  part1,
  part2
} from './solution';

describe('Day 4', () => {
  it('notDecreasing', () => {
    assert.isTrue(notDecreasing([1, 1, 1, 1, 1, 1]));
    assert.isTrue(notDecreasing([1, 2, 3, 3, 3, 3]));
    assert.isFalse(notDecreasing([3, 2, 3, 3, 3, 3]));
  });

  it('atLeastTwoAdjacent', () => {
    assert.isTrue(atLeastTwoAdjacent([1, 1, 1, 1, 1, 1]));
    assert.isFalse(atLeastTwoAdjacent([1, 2, 3, 4, 5, 6]));
  });

  it('exactlyTwoAdjacent', () => {
    assert.isTrue(exactlyTwoAdjacent([1, 1, 1, 2, 2, 3]));
    assert.isTrue(exactlyTwoAdjacent([1, 1, 1, 1, 2, 2]));
    assert.isTrue(exactlyTwoAdjacent([1, 1, 2, 2, 2, 2]));
    assert.isFalse(exactlyTwoAdjacent([1, 1, 1, 2, 2, 2]));
  });

  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 481);
    });
  });

  describe('part 2', () => {
    it('solution', () => {
      assert.equal(part2(), 299);
    });
  });
});
