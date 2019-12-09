import {assert} from 'chai';

import {part1, part2} from './solution';
import {runProgram} from './run-program';
import {parseInstruction} from '../int-computer/parse-instruction';

describe('Day 5', () => {
  describe('parseInstruction', () => {
    it('mode 00', () => {
      const {mode1, mode2} = parseInstruction(8);

      assert.equal(mode1, 0);
      assert.equal(mode2, 0);
    });

    it('mode 01', () => {
      const {mode1, mode2} = parseInstruction(108);

      assert.equal(mode1, 1);
      assert.equal(mode2, 0);
    });

    it('mode 10', () => {
      const {mode1, mode2} = parseInstruction(1008);

      assert.equal(mode1, 0);
      assert.equal(mode2, 1);
    });

    it('mode 11', () => {
      const {mode1, mode2} = parseInstruction(1108);

      assert.equal(mode1, 1);
      assert.equal(mode2, 1);
    });
  });

  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 13547311);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      const run = (input: number[], id: number, expected: number) => {
        let output = Number.POSITIVE_INFINITY;
        runProgram(
          input,
          () => id,
          value => (output = value)
        );
        assert.equal(output, expected);
      };

      run([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 3, 0);
      run([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 8, 1);

      run([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 3, 1);
      run([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 8, 0);

      run([3, 3, 1108, -1, 8, 3, 4, 3, 99, 3], 3, 0);
      run([3, 3, 1108, -1, 8, 3, 4, 3, 99, 3], 8, 1);

      run([3, 3, 1107, -1, 8, 3, 4, 3, 99, 3], 3, 1);
      run([3, 3, 1107, -1, 8, 3, 4, 3, 99, 3], 8, 0);

      run([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 0, 0);
      run([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 5, 1);
    });

    it('solution', () => {
      assert.equal(part2(), 236453);
    });
  });
});
