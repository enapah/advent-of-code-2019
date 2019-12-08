import {readInput} from '../utils/read-input';
import {splitInChunks} from '../utils/split-in-chunks';

import {Color} from './color';
import {splitInLayers} from './split-in-layers';
import {mergeLayers} from './merge-layers';

export const part1 = () => {
  const [pixels] = readInput(__dirname);

  const width = 25;
  const height = 6;

  const layers = splitInChunks(pixels.split('') as Color[], width * height);

  const [first] = layers
    .map(layer => ({
      black: layer.filter(c => c === Color.Black).length,
      white: layer.filter(c => c === Color.White).length,
      transparent: layer.filter(c => c === Color.Transparent).length
    }))
    .sort((a, b) => a.black - b.black);

  return first.transparent * first.white;
};

const imageToString = (image: Color[][]) =>
  image
    .map(row =>
      row
        .map(c => {
          switch (c) {
            case Color.White:
              return '█';
            case Color.Black:
            case Color.Transparent:
              return ' ';
          }
        })
        .join('')
    )
    .join('\n');

export const renderImage = (imageData: string, width: number, height: number) =>
  mergeLayers(splitInLayers(imageData.split('') as Color[], width, height));

export const part2 = () => {
  const [line] = readInput(__dirname);
  const width = 25;
  const height = 6;

  return imageToString(renderImage(line, width, height));
};
