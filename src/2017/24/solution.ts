import {readInput} from '../../utils/read-input';

interface Component {
  first: number;
  second: number;
}

type Bridge = Component[];

const getAllPossibleBridges = (
  availableComponents: Component[],
  bridge: Bridge,
  currentPort: number
): Bridge[] => {
  const matchingComponents = availableComponents.filter(
    c => c.first === currentPort || c.second === currentPort
  );

  return matchingComponents.length === 0
    ? [bridge]
    : matchingComponents.reduce(
        (bridges: Bridge[], component) => [
          ...bridges,
          ...getAllPossibleBridges(
            availableComponents.filter(c => c !== component),
            [...bridge, component],
            component.first === currentPort ? component.second : component.first
          )
        ],
        []
      );
};

const parseInput = () =>
  readInput(__dirname)
    .map(s => s.split('/').map(Number))
    .map(([first, second]) => ({first, second}));

export const part1 = () => {
  const components = parseInput();
  const bridges = getAllPossibleBridges(components, [], 0);

  return bridges
    .map(bridge =>
      bridge.reduce((sum, {first, second}) => sum + first + second, 0)
    )
    .reduce((max, n) => (max > n ? max : n), Number.NEGATIVE_INFINITY);
};

export const part2 = () => {
  const components = parseInput();
  const bridges = getAllPossibleBridges(components, [], 0);

  const maxLength = bridges.reduce(
    (max, bridge) => (max > bridge.length ? max : bridge.length),
    0
  );

  return bridges
    .filter(bridge => bridge.length === maxLength)
    .map(bridge =>
      bridge.reduce((sum, {first, second}) => sum + first + second, 0)
    )
    .reduce((max, n) => (max > n ? max : n), Number.NEGATIVE_INFINITY);
};
