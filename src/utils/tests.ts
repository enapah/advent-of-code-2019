import {assert} from 'chai';

import {intersectionOf} from './intersection-of';
import {range} from './range';

describe('utils', () => {
  it('intersectionOf', () => {
    assert.deepEqual(intersectionOf([1, 2], [2, 3]), [2]);
    assert.isEmpty(intersectionOf([1, 2], [3, 4]));
  });

  it('range', () => {
    assert.deepEqual(range(1, 5), [1, 2, 3, 4, 5]);
  });
});
