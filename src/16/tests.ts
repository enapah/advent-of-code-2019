import {assert} from 'chai';

import {extracted, extracted2, part1, part2} from './solution';

describe('Day 16', () => {
  describe('part 1', () => {
    it('examples', () => {
      assert.equal(extracted('80871224585914546619083218645595'), '24176176');
      assert.equal(extracted('19617804207202209144916044189917'), '73745418');
      assert.equal(extracted('69317163492948606335995924319873'), '52432133');
    });

    xit('solution', () => {
      assert.equal(part1(), '94935919');
    });
  });

  describe('part 2', () => {
    it('examples', () => {
      /*
      03036732577212944063491565474664 becomes 84462026.
02935109699940807407585447034323 becomes 78725270.
03081770884921959731165446850517 becomes 53553731.
       */
      assert.equal(extracted2('03036732577212944063491565474664'), '84462026');
    });

    it('solution', () => {
      //console.log(part2());
    });
  });
});
