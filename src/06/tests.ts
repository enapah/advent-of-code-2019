import {assert} from 'chai';

import {part1, part2} from './solution';
import {parseInput} from './parse-input';
import {findAllPaths} from './find-all-paths';
import {totalNumberOfOrbits} from './total-number-of-orbits';
import {shortestPath} from './shortest-path';

describe('Day 06', () => {
  it('parseInput', () => {
    assert.deepEqual(parseInput(['A)B', 'B)C']), {A: ['B'], B: ['C']});
    assert.deepEqual(parseInput(['A)B', 'A)C']), {A: ['B', 'C']});
  });

  it('findAllPaths', function() {
    assert.deepEqual(findAllPaths({COM: ['B'], B: ['C']}), [
      ['COM'],
      ['COM', 'B'],
      ['COM', 'B', 'C']
    ]);
  });

  it('totalNumberOfOrbits', function() {
    assert.equal(totalNumberOfOrbits([['COM', 'A']]), 1);
    assert.equal(
      totalNumberOfOrbits([
        ['COM', 'A'],
        ['COM', 'A', 'B']
      ]),
      3
    );
  });

  describe('part 1', () => {
    it('examples', () => {
      const paths = findAllPaths(
        parseInput([
          'COM)B',
          'B)C',
          'C)D',
          'D)E',
          'E)F',
          'B)G',
          'G)H',
          'D)I',
          'E)J',
          'J)K',
          'K)L'
        ])
      );

      assert.equal(totalNumberOfOrbits(paths), 42);
    });

    it('solution', () => {
      assert.equal(part1(), 301100);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      const paths = findAllPaths(
        parseInput([
          'COM)B',
          'B)C',
          'C)D',
          'D)E',
          'E)F',
          'B)G',
          'G)H',
          'D)I',
          'E)J',
          'J)K',
          'K)L',
          'K)YOU',
          'I)SAN'
        ])
      );

      assert.equal(shortestPath(paths, 'YOU', 'SAN'), 4);
    });

    it('solution', () => {
      assert.equal(part2(), 547);
    });
  });
});
