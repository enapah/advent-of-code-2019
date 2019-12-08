import {assert} from 'chai';

import {renderImage, part1, part2} from './solution';

describe('Day 8', () => {
  describe('part 1', () => {
    it('solution', () => {
      assert.equal(part1(), 1485);
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.deepEqual(renderImage('0222112222120000', 2, 2), [
        ['0', '1'],
        ['1', '0']
      ]);
    });

    it('solution', () => {
      assert.equal(
        part2(),
        `███  █     ██  █  █ ████ 
█  █ █    █  █ █ █  █    
█  █ █    █  █ ██   ███  
███  █    ████ █ █  █    
█ █  █    █  █ █ █  █    
█  █ ████ █  █ █  █ █    `
      );
    });
  });
});
