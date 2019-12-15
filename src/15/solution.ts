import {readInput} from '../utils/read-input';
import {runProgram} from '../int-computer/run-program';
import {Direction, Position, Tile} from './types';
import {move, turnAround, turnLeft, turnRight} from './transform';

const getTile = (
  map: Map<string, {tile: Tile; path: Position[]}>,
  position: Position
) => {
  const key = JSON.stringify(position);

  return map.has(key)
    ? map.get(key)!
    : {
        tile: Tile.Unknown,
        path: []
      };
};

const setTile = (
  map: Map<string, {tile: Tile; path: Position[]}>,
  position: Position,
  tile: Tile,
  path: Position[]
) => {
  if (!map.has(JSON.stringify(position))) {
    map.set(JSON.stringify(position), {tile, path});
  }
};

export const part1 = () => {
  const [line] = readInput(__dirname);
  const program = line.split(',').map(Number);

  const map = new Map<
    string,
    {
      tile: Tile;
      path: Position[];
    }
  >();

  let position: Position = {x: 0, y: 0};
  let direction: Direction = Direction.North;
  let running = true;

  setTile(map, position, Tile.Nothing, []);

  runProgram(
    program,
    () => {
      const options = [
        turnRight(direction),
        direction,
        turnLeft(direction),
        turnAround(direction)
      ];
      for (let i = 0; i < options.length; i++) {
        const next = getTile(map, move(position, options[i]));

        if (next.tile === Tile.Unknown) {
          direction = options[i];
          return direction;
        }
      }
      for (let i = 0; i < options.length; i++) {
        const next = getTile(map, move(position, options[i]));

        if (next.tile === Tile.Nothing) {
          direction = options[i];
          return direction;
        }
      }
      throw new Error('Nowhere to go');
    },
    (tile: Tile) => {
      const newPosition = move(position, direction);
      const path = [...getTile(map, position).path, newPosition];
      setTile(map, newPosition, tile, path);

      if (tile === Tile.Nothing) {
        position = newPosition;
      } else if (tile === Tile.OxygenSystem) {
        position = newPosition;
        running = false;
      }
    },
    () => running
  );

  return getTile(map, position)!.path.length;
};

export const part2 = () => {
  return readInput(__dirname);
};
