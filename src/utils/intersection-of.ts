export const intersectionOf = <T>(arr1: T[], arr2: T[]) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set1].filter(c => set2.has(c));
};
