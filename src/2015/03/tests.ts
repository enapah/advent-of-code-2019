import {assert} from 'chai';

import {numberOfVisitedHouses, part1, part2} from './solution';

describe('Day XX', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(numberOfVisitedHouses(['>']), 2);
      assert.equal(numberOfVisitedHouses(['^', '>', 'v', '<']), 4);
      assert.equal(
        numberOfVisitedHouses([
          '^',
          'v',
          '^',
          'v',
          '^',
          'v',
          '^',
          'v',
          '^',
          'v'
        ]),
        2
      );
    });

    it('solution', () => {
      assert.equal(part1(), 2565);
    });
  });

  xdescribe('part 2', () => {
    it('examples', () => {
      assert.equal(numberOfVisitedHouses(['^','v']), 3);
      assert.equal(numberOfVisitedHouses(['^', '>', 'v', '<']), 3);
      assert.equal(
        numberOfVisitedHouses([
          '^',
          'v',
          '^',
          'v',
          '^',
          'v',
          '^',
          'v',
          '^',
          'v'
        ]),
        11
      );
    });

    it('solution', () => {
      assert.equal(part2(), 2639);
    });
  });
});
