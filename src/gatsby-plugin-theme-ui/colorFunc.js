import { darken as themeUIDarken } from '@theme-ui/color';

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 0. color
// 1. darken(color, layer)
// 2+ darken(newColor, layer)

export default function darken(color, layers) {
  const reducedLayers = layers.reduce((init, layer) => init + layer, 0);
  return themeUIDarken(color, reducedLayers);
}
