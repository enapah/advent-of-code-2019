export enum Direction {
  North = 1,
  South = 2,
  West = 3,
  East = 4
}

export enum Tile {
  Wall,
  Nothing,
  OxygenSystem = 2,
  Unknown
}

export type Position = {x: number; y: number};