import {splitInChunks} from '../utils/split-in-chunks';

import {Color} from './color';

export const splitInLayers = (
  pixels: Color[],
  width: number,
  height: number
): Color[][][] =>
  splitInChunks(pixels, width * height).map(layerPixels =>
    splitInChunks(layerPixels, width)
  );
