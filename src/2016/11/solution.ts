import {readInput} from '../../utils/read-input';

enum Isotope {
  thulium,
  plutonium,
  strontium,
  promethium,
  ruthenium,
  Hydrogen,
  Lithium
}

type Type = 'generator' | 'microchip';

type Floor = {type: Type; isotope: Isotope}[];

type State = {
  e: number;
  steps: number;
  1: Floor;
  2: Floor;
  3: Floor;
  4: Floor;
};

const isValidFloor = (stateElement: {type: Type; isotope: Isotope}[]) =>
  stateElement.every(
    i =>
      i.type === 'generator' ||
      stateElement.some(
        i2 => i2.type === 'generator' && i2.isotope === i.isotope
      ) ||
      !stateElement.some(i2 => i2.type === 'generator')
  );

export const part1 = () => {
  /*
  EXAMPLE
  The first floor contains a hydrogen-compatible microchip and a lithium-compatible microchip.
  The second floor contains a hydrogen generator.
  The third floor contains a lithium generator.
  The fourth floor contains nothing relevant.
*/
  /*
  const initialState: State = {
    e: 1,
    steps: 0,
    1: [
      {type: 'microchip', isotope: Isotope.Hydrogen},
      {type: 'microchip', isotope: Isotope.Lithium}
    ],
    2: [{type: 'generator', isotope: Isotope.Hydrogen}],
    3: [{type: 'generator', isotope: Isotope.Lithium}],
    4: []
  };
*/

  /*
  The first floor contains:
    a thulium generator, 
    a thulium-compatible microchip, 
    a plutonium generator, and 
    a strontium generator.
  The second floor contains:
    a plutonium-compatible microchip and 
    a strontium-compatible microchip.
  The third floor contains:
    a promethium generator, 
    a promethium-compatible microchip, 
    a ruthenium generator, and 
    a ruthenium-compatible microchip.
  The fourth floor contains nothing relevant.
   */
  const initialState: State = {
    e: 1,
    steps: 0,
    1: [
      {type: 'generator', isotope: Isotope.thulium},
      {type: 'microchip', isotope: Isotope.thulium},
      {type: 'generator', isotope: Isotope.plutonium},
      {type: 'generator', isotope: Isotope.strontium}
    ],
    2: [
      {type: 'microchip', isotope: Isotope.plutonium},
      {type: 'microchip', isotope: Isotope.strontium}
    ],
    3: [
      {type: 'generator', isotope: Isotope.promethium},
      {type: 'microchip', isotope: Isotope.promethium},
      {type: 'generator', isotope: Isotope.ruthenium},
      {type: 'microchip', isotope: Isotope.ruthenium}
    ],
    4: []
  };

  const previousStates: State[] = [];

  const generateNextStates = (state: State): State[] => {
    const states: State[] = [];

    if (state.e === 1) {
      for (let i = 0; i < state['1'].length; i++) {
        const item1 = state['1'][i];

        states.push({
          e: 2,
          steps: state.steps + 1,
          1: state['1'].filter(i => i !== item1),
          2: [...state['2'], item1],
          3: state['3'],
          4: state['4']
        });

        for (let j = i + 1; j < state['1'].length; j++) {
          const item2 = state['1'][j];

          states.push({
            e: 2,
            steps: state.steps + 1,
            1: state['1'].filter(i => i !== item1 && i !== item2),
            2: [...state['2'], item1, item2],
            3: state['3'],
            4: state['4']
          });
        }
      }
    }
    if (state.e === 2) {
      for (let i = 0; i < state['2'].length; i++) {
        const item1 = state['2'][i];

        if (state['1'].length > 0) {
          states.push({
            e: 1,
            steps: state.steps + 1,
            1: [...state['1'], item1],
            2: state['2'].filter(i => i !== item1),
            3: state['3'],
            4: state['4']
          });
        }
        states.push({
          e: 3,
          steps: state.steps + 1,
          1: state['1'],
          2: state['2'].filter(i => i !== item1),
          3: [...state['3'], item1],
          4: state['4']
        });

        for (let j = i + 1; j < state['2'].length; j++) {
          const item2 = state['2'][j];

          if (state['1'].length > 0) {
            states.push({
              e: 1,
              steps: state.steps + 1,
              1: [...state['1'], item1, item2],
              2: state['2'].filter(i => i !== item1 && i !== item2),
              3: state['3'],
              4: state['4']
            });
          }
          states.push({
            e: 3,
            steps: state.steps + 1,
            1: state['1'],
            2: state['2'].filter(i => i !== item1 && i !== item2),
            3: [...state['3'], item1, item2],
            4: state['4']
          });
        }
      }
    }
    if (state.e === 3) {
      for (let i = 0; i < state['3'].length; i++) {
        const item1 = state['3'][i];

        if (state['1'].length > 0 || state['2'].length > 0) {
          states.push({
            e: 2,
            steps: state.steps + 1,
            1: state['1'],
            2: [...state['2'], item1],
            3: state['3'].filter(i => i !== item1),
            4: state['4']
          });
        }
        states.push({
          e: 4,
          steps: state.steps + 1,
          1: state['1'],
          2: state['2'],
          3: state['3'].filter(i => i !== item1),
          4: [...state['4'], item1]
        });

        for (let j = i + 1; j < state['3'].length; j++) {
          const item2 = state['3'][j];

          if (state['1'].length > 0 || state['2'].length > 0) {
            states.push({
              e: 2,
              steps: state.steps + 1,
              1: state['1'],
              2: [...state['2'], item1, item2],
              3: state['3'].filter(i => i !== item1 && i !== item2),
              4: state['4']
            });
          }
          states.push({
            e: 4,
            steps: state.steps + 1,
            1: state['1'],
            2: state['2'],
            3: state['3'].filter(i => i !== item1 && i !== item2),
            4: [...state['4'], item1, item2]
          });
        }
      }
    }
    if (state.e === 4) {
      for (let i = 0; i < state['4'].length; i++) {
        const item1 = state['4'][i];

        states.push({
          e: 3,
          steps: state.steps + 1,
          1: state['1'],
          2: state['2'],
          3: [...state['3'], item1],
          4: state['4'].filter(i => i !== item1)
        });

        for (let j = i + 1; j < state['4'].length; j++) {
          const item2 = state['4'][j];

          states.push({
            e: 3,
            steps: state.steps + 1,
            1: state['1'],
            2: state['2'],
            3: [...state['3'], item1, item2],
            4: state['4'].filter(i => i !== item1 && i !== item2)
          });
        }
      }
    }

    const states1 = states.filter(
      state =>
        isValidFloor(state['1']) &&
        isValidFloor(state['2']) &&
        isValidFloor(state['3']) &&
        isValidFloor(state['4'])
    );

    return states1;
  };

  const getNumberOfSteps = (initialState: State): number => {
    const queue: State[] = [initialState];

    let state: State;

    while ((state = queue.shift()!)) {
      if (
        !previousStates.some(
          s2 =>
            state.e === s2.e &&
            state['1'].every(i => s2['1'].includes(i)) &&
            s2['1'].every(i => state['1'].includes(i)) &&
            state['2'].every(i => s2['2'].includes(i)) &&
            s2['2'].every(i => state['2'].includes(i)) &&
            state['3'].every(i => s2['3'].includes(i)) &&
            s2['3'].every(i => state['3'].includes(i)) &&
            state['4'].every(i => s2['4'].includes(i)) &&
            s2['4'].every(i => state['4'].includes(i))
        )
      ) {
        if (
          state['1'].length === 0 &&
          state['2'].length === 0 &&
          state['3'].length === 0
        ) {
          return state.steps;
        }
        previousStates.push(state);

        queue.push(...generateNextStates(state));
      }
    }
    return Number.POSITIVE_INFINITY;
  };

  console.log(getNumberOfSteps(initialState));
};

export const part2 = () => readInput(__dirname);
