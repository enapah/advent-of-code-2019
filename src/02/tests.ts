import {assert} from 'chai';

import {part1, part2} from './solution';
import {runProgram} from './run-program';

describe('Day 2', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(
        runProgram([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], 9, 10),
        3500
      );
    });

    it('solution', () => {
      assert.equal(part1(), 7594646);
    });
  });

  describe('part 2', () => {
    it('solution', () => {
      assert.equal(part2(), 3376);
    });
  });
});
