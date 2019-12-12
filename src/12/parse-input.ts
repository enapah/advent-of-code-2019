export const parseInput = (lines: string[]) =>
  lines
    .map(s =>
      s
        .match(/<x=(.*), y=(.*), z=(.*)>/)!
        .slice(1, 4)
        .map(Number)
    )
    .map(([x, y, z]) => ({
      position: {x, y, z},
      velocity: {x: 0, y: 0, z: 0}
    }));
