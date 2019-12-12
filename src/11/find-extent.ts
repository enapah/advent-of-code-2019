export const findExtent = (colors: Map<string, number>) =>
  [...colors.keys()]
    .map(s => JSON.parse(s))
    .reduce(
      ({minX, maxX, minY, maxY}, {x, y}) => ({
        minX: Math.min(minX, x),
        minY: Math.min(minY, y),
        maxX: Math.max(maxX, x),
        maxY: Math.max(maxY, y)
      }),
      {
        minX: Number.POSITIVE_INFINITY,
        maxX: Number.NEGATIVE_INFINITY,
        minY: Number.POSITIVE_INFINITY,
        maxY: Number.NEGATIVE_INFINITY
      }
    );
