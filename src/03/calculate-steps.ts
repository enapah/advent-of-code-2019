const convertDirection = (direction: string) => {
  switch (direction) {
    case 'U':
      return {dx: 0, dy: -1};
    case 'R':
      return {dx: 1, dy: 0};
    case 'D':
      return {dx: 0, dy: 1};
    case 'L':
      return {dx: -1, dy: 0};
  }
  throw new Error(`Unknown direction: ${direction}`);
};

const convertInstruction = ([direction, ...rest]: string) => ({
  ...convertDirection(direction),
  amount: Number(rest.join(''))
});

export function calculateSteps(instructions: string): string[] {
  const steps: string[] = [];
  let x = 0;
  let y = 0;

  instructions.split(',').forEach(instruction => {
    const {amount, dx, dy} = convertInstruction(instruction);

    for (let i = 0; i < amount; i++) {
      x += dx;
      y += dy;
      steps.push(`${x},${y}`);
    }
  });
  return steps;
}
