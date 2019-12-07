export const combinationsWithoutRepetition = <T>(
  available: T[],
  path: T[] = []
): T[][] =>
  available.length === 0
    ? [path]
    : available.reduce(
        (acc: T[][], s, i) => [
          ...acc,
          ...combinationsWithoutRepetition(
            [...available.slice(0, i), ...available.slice(i + 1)],
            [...path, s]
          )
        ],
        []
      );
