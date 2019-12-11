import {assert} from 'chai';

import {part1, part2} from './solution';

// 14,58,0,116,179,16,1,104,2,254,167,86,255,55,122,244

type Node = {id: number; prev: Node; next: Node};

function reverse(current: Node, length: number) {
  const nodes: Node[] = [];

  let node = current;

  for (let i = 0; i < length; i++) {
    nodes.push(node);
    node = node.next;
  }

  const before = nodes[0].prev;
  const after = nodes[nodes.length - 1].next;

  for (let i = 0; i < length; i++) {
    let node = nodes[i];

    const temp = node.next;
    node.next = node.prev;
    node.prev = temp;
  }

  nodes[0].next = after;
  nodes[nodes.length - 1].prev = before;
  before.next = nodes[nodes.length - 1];
  after.prev = nodes[0];

  return nodes[nodes.length - 1];
}

describe('Day XX', () => {
  describe('part 1', () => {
    it('examples', () => {
      let list = [0, 1, 2, 3, 4]
        .map(id => ({id}))
        .map((node: any, i, arr) => {
          node.prev = arr[i === 0 ? arr.length - 1 : i - 1];
          node.next = arr[i === arr.length - 1 ? 0 : i + 1];

          return node as Node;
        });

      const lengths = [3, 4, 1, 5];
      let current = list[0];
      let skipSize = 0;

      lengths.forEach(length => {
        current = reverse(current, length);

        for (let i = 0; i < skipSize; i++) {
          current = current.next;
        }
        skipSize++;
      });

      console.log(current);
    });

    it('solution', () => {});
  });

  describe('part 2', () => {
    it('examples', () => {});

    it('solution', () => {});
  });
});
