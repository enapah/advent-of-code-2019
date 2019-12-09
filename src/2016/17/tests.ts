import {assert} from 'chai';

import {findShortestPath, findLongestPath} from './solution';

describe('2016 - Day 17', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(findShortestPath('ihgpwlah'), 'DDRRRD');
      assert.equal(findShortestPath('kglvqrro'), 'DDUDRLRRUDRD');
      assert.equal(findShortestPath('ulqzkmiv'), 'DRURDRUDDLLDLUURRDULRLDUUDDDRR');
    });

    it('solution', () => {
      assert.equal(findShortestPath('yjjvjgan'), 'RLDRUDRDDR');
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      assert.lengthOf(findLongestPath('ihgpwlah'), 370);
      assert.lengthOf(findLongestPath('kglvqrro'), 492);
      assert.lengthOf(findLongestPath('ulqzkmiv'), 830);
    });

    it('solution', () => {
      assert.lengthOf(findLongestPath('yjjvjgan'), 498);
    });
  });
});
