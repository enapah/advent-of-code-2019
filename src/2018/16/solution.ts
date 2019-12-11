import {readInput} from '../../utils/read-input';
import {splitInChunks} from '../../utils/split-in-chunks';

function matchOperations(lines: string[]) {
  const operations = splitInChunks(lines.slice(0, 3295), 4)
    .map(([before, operation, after]) => {
      const [opCode, a, b, c] = operation.split(' ').map(Number);

      return {
        before: before
          .match(/Before: \[(.*)]/)![1]
          .split(', ')
          .map(Number),
        after: after
          .match(/After: {2}\[(.*)]/)![1]
          .split(', ')
          .map(Number),
        opCode,
        a,
        b,
        c
      };
    })
    .map(({before, after, opCode, a, b, c}) => {
      const possibleNames = [];

      // addr (add register) stores into register C the result of adding register A and register B.
      if (before[a] + before[b] === after[c]) {
        possibleNames.push('addr');
      }
      // addi (add immediate) stores into register C the result of adding register A and value B.
      if (before[a] + b === after[c]) {
        possibleNames.push('addi');
      }
      // mulr (multiply register) stores into register C the result of multiplying register A and register B.
      if (before[a] * before[b] === after[c]) {
        possibleNames.push('mulr');
      }
      // muli (multiply immediate) stores into register C the result of multiplying register A and value B.
      if (before[a] * b === after[c]) {
        possibleNames.push('muli');
      }
      // banr (bitwise AND register) stores into register C the result of the bitwise AND of register A and register B.
      if ((before[a] & before[b]) === after[c]) {
        possibleNames.push('banr');
      }
      // bani (bitwise AND immediate) stores into register C the result of the bitwise AND of register A and value B.
      if ((before[a] & b) === after[c]) {
        possibleNames.push('bani');
      }
      // borr (bitwise OR register) stores into register C the result of the bitwise OR of register A and register B.
      if ((before[a] | before[b]) === after[c]) {
        possibleNames.push('borr');
      }
      // bori (bitwise OR immediate) stores into register C the result of the bitwise OR of register A and value B.
      if ((before[a] | b) === after[c]) {
        possibleNames.push('bori');
      }
      // setr (set register) copies the contents of register A into register C. (Input B is ignored.)
      if (before[a] === after[c]) {
        possibleNames.push('setr');
      }
      // seti (set immediate) stores value A into register C. (Input B is ignored.)
      if (a === after[c]) {
        possibleNames.push('seti');
      }
      // gtir (greater-than immediate/register) sets register C to 1 if value A is greater than register B. Otherwise, register C is set to 0.
      if (a > before[b] ? after[c] === 1 : after[c] === 0) {
        possibleNames.push('gtir');
      }
      // gtri (greater-than register/immediate) sets register C to 1 if register A is greater than value B. Otherwise, register C is set to 0.
      if (before[a] > b ? after[c] === 1 : after[c] === 0) {
        possibleNames.push('gtri');
      }
      // gtrr (greater-than register/register) sets register C to 1 if register A is greater than register B. Otherwise, register C is set to 0.
      if (before[a] > before[b] ? after[c] === 1 : after[c] === 0) {
        possibleNames.push('gtrr');
      }
      // eqir (equal immediate/register) sets register C to 1 if value A is equal to register B. Otherwise, register C is set to 0.
      if (a === before[b] ? after[c] === 1 : after[c] === 0) {
        possibleNames.push('eqir');
      }
      // eqri (equal register/immediate) sets register C to 1 if register A is equal to value B. Otherwise, register C is set to 0.
      if (before[a] === b ? after[c] === 1 : after[c] === 0) {
        possibleNames.push('eqri');
      }
      // eqrr (equal register/register) sets register C to 1 if register A is equal to register B. Otherwise, register C is set to 0.
      if (before[a] > before[b] ? after[c] === 1 : after[c] === 0) {
        possibleNames.push('eqrr');
      }
      return {
        opCode,
        possibleNames
      };
    });
  return operations;
}

export const part1 = () => {
  const lines = readInput(__dirname);
  const operations = matchOperations(lines);

  return operations.filter(x => x.possibleNames.length >= 3).length;
};

export const part2 = () => {
  const trans: {[opCode: number]: string} = {
    0: 'borr',
    1: 'addr',
    2: 'eqri',
    3: 'addi',
    4: 'eqri',
    5: 'eqir', //eqir, eqrr, gtrr
    6: 'gtri',
    7: 'mulr',
    8: 'setr',
    9: 'gtir',
    10: 'muli',
    11: 'banr',
    12: 'seti',
    13: 'gtrr', //eqrr, gtrr
    14: 'bani',
    15: 'bori'
  };

  const registers = [0, 0, 0, 0];

  function apply(name: string, c: number, a: number, b: number) {
    switch (name) {
      case 'addr':
        return registers[a] + registers[b];
      case 'addi':
        return registers[a] + b;
      case 'mulr':
        return registers[a] * registers[b];
      case 'muli':
        return registers[a] * b;
      case 'banr':
        return registers[a] & registers[b];
      case 'bani':
        return registers[a] & b;
      case 'borr':
        return registers[a] | registers[b];
      case 'bori':
        return registers[a] | b;
      case 'setr':
        return registers[a];
      case 'seti':
        return a;
      case 'gtir':
        return a > registers[b] ? 1 : 0;
      case 'gtri':
        return registers[a] > b ? 1 : 0;
      case 'gtrr':
        return registers[a] > registers[b] ? 1 : 0;
      case 'eqir':
        return a === registers[b] ? 1 : 0;
      case 'eqri':
        return registers[a] === b ? 1 : 0;
      case 'eqrr':
        return registers[a] === registers[b] ? 1 : 0;
    }
    throw new Error(`Unknown operation: ${name}`)
  }

  readInput(__dirname)
    .slice(3299)
    .forEach(s => {
      const [opCode, a, b, c] = s.split(' ').map(Number);

      registers[c] = apply(trans[opCode], c, a, b);
    });

  console.log(registers);

  const lines = readInput(__dirname);
  const operations = matchOperations(lines).map(o => ({
    ...o,
    possibleNames: o.possibleNames.filter(
      name => !Object.values(trans).includes(name)
    )
  })).filter(o => !trans[o.opCode]);

  console.log([
    ...new Set(
      operations
        .sort((a, b) => a.opCode - b.opCode)
        .map(o => o.opCode + ' - ' + o.possibleNames.join(','))
    )
  ]);
};
