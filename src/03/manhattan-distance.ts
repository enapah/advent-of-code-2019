export const manhattanDistance = (coords: string) => {
  const [first, second] = coords.split(',').map(Number);

  return Math.abs(first) + Math.abs(second);
};
