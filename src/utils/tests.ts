import {assert} from 'chai';

import {intersectionOf} from './intersection-of';
import {range} from './range';
import {combinationsWithoutRepetition} from './combinations-without-repetition';
import {splitInChunks} from './split-in-chunks';
import {gcd} from './gcd';

describe('utils', () => {
  it('intersectionOf', () => {
    assert.deepEqual(intersectionOf([1, 2], [2, 3]), [2]);
    assert.isEmpty(intersectionOf([1, 2], [3, 4]));
  });

  it('range', () => {
    assert.deepEqual(range(1, 5), [1, 2, 3, 4, 5]);
  });

  it('combinationsWithoutRepetition', () => {
    assert.deepEqual(combinationsWithoutRepetition([0]), [[0]]);
    assert.deepEqual(combinationsWithoutRepetition([0, 1]), [
      [0, 1],
      [1, 0]
    ]);
    assert.deepEqual(combinationsWithoutRepetition([0, 1, 2]), [
      [0, 1, 2],
      [0, 2, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 0, 1],
      [2, 1, 0]
    ]);
  });

  it('splitInChunks', () => {
    assert.deepEqual(splitInChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });

  it('gcd', () => {
    assert.equal(gcd(60, 45), 15);
    assert.equal(gcd(60, 30), 30);
    assert.equal(gcd(13, 7), 1);
  });
});
