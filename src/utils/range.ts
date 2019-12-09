export const range = (start: number, end: number) => {
  function* generate(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  return [...generate(start, end)];
};
