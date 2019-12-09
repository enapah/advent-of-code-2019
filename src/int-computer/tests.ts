import {assert} from 'chai';

import {parseInstruction} from './parse-instruction';

describe('Int computer', () => {
  describe('parseInstruction', () => {
    it('mode 00', () => {
      const {mode1, mode2} = parseInstruction(8);

      assert.equal(mode1, 0);
      assert.equal(mode2, 0);
    });

    it('mode 01', () => {
      const {mode1, mode2} = parseInstruction(108);

      assert.equal(mode1, 1);
      assert.equal(mode2, 0);
    });

    it('mode 10', () => {
      const {mode1, mode2} = parseInstruction(1008);

      assert.equal(mode1, 0);
      assert.equal(mode2, 1);
    });

    it('mode 11', () => {
      const {mode1, mode2} = parseInstruction(1108);

      assert.equal(mode1, 1);
      assert.equal(mode2, 1);
    });
  });
});
