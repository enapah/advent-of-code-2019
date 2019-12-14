import {assert} from 'chai';

import {
  movePosition,
  part1,
  part2,
  reversePositions,
  rotateByPosition,
  rotateSteps,
  swapLetters,
  swapPositions
} from './solution';

describe('Day XX', () => {
  it('swapPositions', () => {
    assert.deepEqual(swapPositions('abcde', 4, 0), 'ebcda');
  });

  it('swapLetters', () => {
    assert.deepEqual(swapLetters('ebcda', 'd', 'b'), 'edcba');
  });

  it('rotateSteps', () => {
    assert.deepEqual(rotateSteps('abcde', 'left', 1), 'bcdea');
    assert.deepEqual(rotateSteps('abcde', 'left', 2), 'cdeab');
    assert.deepEqual(rotateSteps('abcde', 'left', 7), 'cdeab');

    assert.deepEqual(rotateSteps('abcde', 'right', 1), 'eabcd');
    assert.deepEqual(rotateSteps('abcde', 'right', 2), 'deabc');
    assert.deepEqual(rotateSteps('abcde', 'right', 7), 'deabc');
  });

  it('rotateByPosition', () => {
    assert.deepEqual(rotateByPosition('abdec', 'b'), 'ecabd');
    assert.deepEqual(rotateByPosition('ecabd', 'd'), 'decab');
    assert.deepEqual(rotateByPosition('abcdefgh', 'a'), 'habcdefg');
    assert.deepEqual(rotateByPosition('abcdefgh', 'b'), 'ghabcdef');
    assert.deepEqual(rotateByPosition('abcdefgh', 'c'), 'fghabcde');
    assert.deepEqual(rotateByPosition('abcdefgh', 'd'), 'efghabcd');
    assert.deepEqual(rotateByPosition('abcdefgh', 'e'), 'cdefghab');
    assert.deepEqual(rotateByPosition('abcdefgh', 'f'), 'bcdefgha');
    assert.deepEqual(rotateByPosition('abcdefgh', 'g'), 'abcdefgh');
    assert.deepEqual(rotateByPosition('abcdefgh', 'h'), 'habcdefg');
  });

  it('movePosition', () => {
    assert.deepEqual(movePosition('bcdea', 1, 4), 'bdeac');
    assert.deepEqual(movePosition('bdeac', 3, 0), 'abdec');
    assert.deepEqual(movePosition('abcde', 0, 2), 'bcade');
  });

  it('reversePositions', () => {
    assert.deepEqual(reversePositions('edcba', 0, 4), 'abcde');
    assert.deepEqual(reversePositions('abcde', 1, 2), 'acbde');
    assert.deepEqual(reversePositions('abcde', 1, 3), 'adcbe');
  });

  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 'aefgbcdh');
    });
  });

  describe('part 2', () => {
    it('solution', () => {
      assert.equal(part2(), 'egcdahbf');
    });
  });
});
