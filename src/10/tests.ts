import {assert} from 'chai';

import {part1, part2} from './solution';
import {getAngle} from './get-angle';
import {Location} from './location';

describe('Day 10', () => {
  it('getAngle', () => {
    const assertAngleFromOrigo = ({x, y}: Location, angle: number) =>
      assert.closeTo(getAngle({x, y}, {x: 0, y: 0}), angle, 1e-5);

    assertAngleFromOrigo({x: 0, y: -1}, 0);
    assertAngleFromOrigo({x: 1, y: -1}, Math.PI / 4);
    assertAngleFromOrigo({x: 1, y: 0}, Math.PI / 2);
    assertAngleFromOrigo({x: 1, y: 1}, (3 * Math.PI) / 4);
    assertAngleFromOrigo({x: 0, y: 1}, Math.PI);
    assertAngleFromOrigo({x: -1, y: 1}, (5 * Math.PI) / 4);
    assertAngleFromOrigo({x: -1, y: 0}, (3 * Math.PI) / 2);
    assertAngleFromOrigo({x: -1, y: -1}, (7 * Math.PI) / 4);
  });

  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 347);
    });
  });

  describe('part 2', () => {
    it('solution', () => {
      assert.equal(part2(), 829);
    });
  });
});
