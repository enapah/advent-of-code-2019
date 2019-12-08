export const splitInChunks = <T>(arr: T[], chunkSize: number): T[][] =>
  arr.length <= chunkSize
    ? [arr]
    : [
        arr.slice(0, chunkSize),
        ...splitInChunks(arr.slice(chunkSize), chunkSize)
      ];
