import {Direction, Position} from './types';

export const move = ({x, y}: Position, direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return {x, y: y + 1};
    case Direction.East:
      return {x: x + 1, y};
    case Direction.South:
      return {x, y: y - 1};
    case Direction.West:
      return {x: x - 1, y};
  }
};
export const turnLeft = (direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return Direction.West;
    case Direction.East:
      return Direction.North;
    case Direction.South:
      return Direction.East;
    case Direction.West:
      return Direction.South;
  }
};
export const turnRight = (direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return Direction.East;
    case Direction.East:
      return Direction.South;
    case Direction.South:
      return Direction.West;
    case Direction.West:
      return Direction.North;
  }
};
export const turnAround = (direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return Direction.South;
    case Direction.East:
      return Direction.West;
    case Direction.South:
      return Direction.North;
    case Direction.West:
      return Direction.East;
  }
};
