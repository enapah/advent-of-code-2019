import {assert} from 'chai';

import {part1, part2} from './solution';
import {getTotalEnergy} from './get-total-energy';
import {parseInput} from './parse-input';
import {findPeriod} from './find-period';

const firstExample = `<x=-1, y=0, z=2>
<x=2, y=-10, z=-7>
<x=4, y=-8, z=8>
<x=3, y=5, z=-1>`.split(/\n/);

const secondExample = `<x=-8, y=-10, z=0>
<x=5, y=5, z=10>
<x=2, y=-7, z=3>
<x=9, y=-8, z=-3>`.split(/\n/);

describe('Day 12', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(getTotalEnergy(parseInput(firstExample), 10), 179);
      assert.equal(getTotalEnergy(parseInput(secondExample), 100), 1940);
    });

    it('solution', () => {
      assert.equal(part1(), 10845);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.equal(findPeriod(parseInput(firstExample)), 2772);
      assert.equal(findPeriod(parseInput(secondExample)), 4686774924);
    });

    it('solution', () => {
      assert.equal(part2(), 551272644867044);
    });
  });
});
