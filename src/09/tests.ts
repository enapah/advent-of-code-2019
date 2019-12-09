import {assert} from 'chai';

import {part1, part2} from './solution';
import {runProgram} from './run-program';

const run = (input: number[], id: number, expected: number[]) => {
  const outputs: number[] = [];

  runProgram(
    input,
    () => id,
    value => outputs.push(value)
  );
  assert.deepEqual(outputs, expected);
};

describe('Day 9', () => {
  describe('part 1', () => {
    it('examples', () => {
      run([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 3, [0]);
      run([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 0, [0]);
      run([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 5, [1]);
      run([1102, 34915192, 34915192, 7, 4, 7, 99, 0], 3, [1219070632396864]);
      run([104, 1125899906842624, 99], 3, [1125899906842624]);
      run(
        [
          109,
          1,
          204,
          -1,
          1001,
          100,
          1,
          100,
          1008,
          100,
          16,
          101,
          1006,
          101,
          0,
          99
        ],
        3,
        [
          109,
          1,
          204,
          -1,
          1001,
          100,
          1,
          100,
          1008,
          100,
          16,
          101,
          1006,
          101,
          0,
          99
        ]
      );
    });

    it('solution', done => {
      assert.equal(part1(), 3638931938);
      done();
    });
  });

  describe('part 2', () => {
    it('solution', done => {
      assert.equal(part2(), 86025);
      done();
    });
  });
});
