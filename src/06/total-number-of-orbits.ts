export const totalNumberOfOrbits = (paths: string[][]) =>
  paths.reduce((sum, p) => sum + p.length - 1, 0);
