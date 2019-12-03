import {assert} from 'chai';

import {
  findClosestIntersectionByDistance,
  findClosestIntersectionByNumberOfSteps,
  part1,
  part2
} from './solution';
import {calculateSteps} from './calculate-steps';
import {intersectionOf} from '../utils/intersection-of';

describe('Day 3', () => {
  it('calculateSteps', () => {
    assert.deepEqual(calculateSteps('R2'), ['1,0', '2,0']);
    assert.deepEqual(calculateSteps('R2,U1'), ['1,0', '2,0', '2,-1']);
    assert.deepEqual(calculateSteps('R1,U1,L1,D1'), [
      '1,0',
      '1,-1',
      '0,-1',
      '0,0'
    ]);
  });

  it('intersectionOf', () => {
    assert.sameMembers(intersectionOf([1, 2], [2, 3]), [2]);
  });

  describe('part 1', () => {
    it('examples', () => {
      assert.equal(
        findClosestIntersectionByDistance(
          'R75,D30,R83,U83,L12,D49,R71,U7,L72',
          'U62,R66,U55,R34,D71,R55,D58,R83'
        ),
        159
      );
      assert.equal(
        findClosestIntersectionByDistance(
          'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
          'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
        ),
        135
      );
    });

    it('solution', () => {
      assert.equal(part1(), 768);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.equal(
        findClosestIntersectionByNumberOfSteps(
          'R75,D30,R83,U83,L12,D49,R71,U7,L72',
          'U62,R66,U55,R34,D71,R55,D58,R83'
        ),
        610
      );
      assert.equal(
        findClosestIntersectionByNumberOfSteps(
          'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
          'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
        ),
        410
      );
    });

    it('solution', () => {
      assert.equal(part2(), 8684);
    });
  });
});
