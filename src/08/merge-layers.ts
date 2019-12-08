import {Color} from './color';

export const mergeLayers = (layers: Color[][][]) =>
  layers.reduce((image, layer) =>
    layer.map((row, y) =>
      row.map((cell, x) =>
        image[y][x] === Color.Transparent ? cell : image[y][x]
      )
    )
  );
