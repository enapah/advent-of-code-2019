import {assert} from 'chai';
import {intersectionOf} from './intersection-of';

describe('utils', () => {
  it('intersectionOf', () => {
    assert.deepEqual(intersectionOf([1, 2], [2, 3]), [2]);
    assert.isEmpty(intersectionOf([1, 2], [3, 4]));
  });
});
