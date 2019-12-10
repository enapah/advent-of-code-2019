import {readInput} from '../../utils/read-input';
import {combinationsWithoutRepetition} from '../../utils/combinations-without-repetition';

interface Node {
  x: number;
  y: number;
}

const collectNeighborNodes = (nodes: Node[]) =>
  new Map<Node, Node[]>(
    nodes.map(node => {
      const north = nodes.find(({x, y}) => x === node.x && y === node.y - 1);
      const east = nodes.find(({x, y}) => x === node.x + 1 && y === node.y);
      const south = nodes.find(({x, y}) => x === node.x && y === node.y + 1);
      const west = nodes.find(({x, y}) => x === node.x - 1 && y === node.y);

      const neighbors = [];
      if (north) {
        neighbors.push(north);
      }
      if (east) {
        neighbors.push(east);
      }
      if (south) {
        neighbors.push(south);
      }
      if (west) {
        neighbors.push(west);
      }
      return [node, neighbors];
    })
  );

const shortestPaths = (
  nodes: Node[],
  startPoint: any,
  neighbors: Map<Node, Node[]>
) => {
  const distances = new Map<Node, number>();
  nodes.forEach(n => distances.set(n, Number.POSITIVE_INFINITY));
  distances.set(startPoint, 0);

  const unvisited: Node[] = [...nodes];

  while (unvisited.length > 0) {
    unvisited.sort((a, b) => distances.get(b)! - distances.get(a)!);
    const node = unvisited.pop()!;

    neighbors
      .get(node)!
      .forEach(neighbor =>
        distances.set(
          neighbor,
          Math.min(distances.get(node)! + 1, distances.get(neighbor)!)
        )
      );
  }
  return distances;
};

const parseInput = (lines: string[]) => {
  const nodes: Node[] = [];
  const waypoints: {[key: string]: Node} = {};

  lines.forEach((line, y) =>
    line.split('').forEach((cell, x) => {
      if (cell !== '#') {
        const node = {x, y};
        nodes.push(node);

        if (cell !== '.') {
          waypoints[cell] = node;
        }
      }
    })
  );
  return {nodes, waypoints};
};

function calculateDistancesPerNode(
  waypoints: {[p: string]: Node},
  nodes: Node[],
  neighbors: Map<Node, Node[]>
) {
  const distancePerNode = new Map<Node, Map<Node, number>>(
    Object.values(waypoints).map(waypoint => [
      waypoint,
      shortestPaths(nodes, waypoint, neighbors)
    ])
  );
  return distancePerNode;
}

export const part1 = () => {
  const lines = readInput(__dirname);
  const {nodes, waypoints} = parseInput(lines);
  const neighbors = collectNeighborNodes(nodes);
  const distancePerNode = calculateDistancesPerNode(
    waypoints,
    nodes,
    neighbors
  );

  const {[0]: first, ...rest} = waypoints;
  const c = combinationsWithoutRepetition(Object.values(rest));
  return Math.min(
    ...c.map(combinations =>
      combinations.reduce(
        (sum, node, i) =>
          sum +
          distancePerNode
            .get(i === 0 ? first : combinations[i - 1])!
            .get(node)!,
        0
      )
    )
  );
};

export const part2 = () => {
  const lines = readInput(__dirname);
  const {nodes, waypoints} = parseInput(lines);
  const neighbors = collectNeighborNodes(nodes);
  const distancePerNode = calculateDistancesPerNode(
    waypoints,
    nodes,
    neighbors
  );

  const {[0]: first, ...rest} = waypoints;
  const c = combinationsWithoutRepetition(Object.values(rest)).map(c => [
    ...c,
    first
  ]);
  return Math.min(
    ...c.map(combinations =>
      combinations.reduce(
        (sum, node, i) =>
          sum +
          distancePerNode
            .get(i === 0 ? first : combinations[i - 1])!
            .get(node)!,
        0
      )
    )
  );
};
