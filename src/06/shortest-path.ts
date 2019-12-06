export const shortestPath = (paths: string[][], from: string, to: string) => {
  const pathToYou = paths.find(s => s.includes(from))!.filter(s => s !== from);
  const pathToSan = paths.find(s => s.includes(to))!.filter(s => s !== to);

  return (
    pathToYou.filter(s => !pathToSan.includes(s)).length +
    pathToSan.filter(s => !pathToYou.includes(s)).length
  );
};
