import {Direction, Position, TurnDirection} from './types';

const turnLeft = (direction: Direction) => {
  switch (direction) {
    case Direction.Up:
      return Direction.Left;
    case Direction.Right:
      return Direction.Up;
    case Direction.Down:
      return Direction.Right;
    case Direction.Left:
      return Direction.Down;
  }
};
const turnRight = (direction: Direction) => {
  switch (direction) {
    case Direction.Up:
      return Direction.Right;
    case Direction.Right:
      return Direction.Down;
    case Direction.Down:
      return Direction.Left;
    case Direction.Left:
      return Direction.Up;
  }
};
export const move = ({x, y}: Position, direction: Direction) => {
  switch (direction) {
    case Direction.Up:
      return {x, y: y - 1};
    case Direction.Right:
      return {x: x + 1, y};
    case Direction.Down:
      return {x, y: y + 1};
    case Direction.Left:
      return {x: x - 1, y};
  }
};
export const turn = (turnDirection: TurnDirection, direction: Direction) => {
  switch (turnDirection) {
    case TurnDirection.Left:
      return turnLeft(direction);
    case TurnDirection.Right:
      return turnRight(direction);
  }
};
