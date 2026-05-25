import { Coordinate, Vector2 } from '@antv/coord';
import { ShapeComponent as SC } from '../../runtime';
import { isFisheye } from '../../utils/coordinate';
import { Symbols } from '../../utils/marker';
import { select } from '../../utils/selection';
import { camelCase } from '../../utils/string';
import { applyStyle, getOrigin, toOpacityKey } from '../utils';

export type ColorOptions = {
  colorAttribute: 'fill' | 'stroke';
  symbol: string;
  mode?: 'fixed' | 'auto' | 'normal';
  [key: string]: any;
};

export function getRadius(
  mode: ColorOptions['mode'],
  points: Vector2[],
  value: Record<string, any>,
  coordinate: Coordinate,
) {
  if (points.length === 1) return undefined;
  const { size } = value;
  if (mode === 'fixed') return size;
  if (mode === 'normal' || isFisheye(coordinate)) {
    const [[x0, y0], [x2, y2]] = points;
    const a = Math.abs((x2 - x0) / 2);
    const b = Math.abs((y2 - y0) / 2);
    return Math.max(0, (a + b) / 2);
  }
  return size;
}

/**
 * Render point in different coordinate.
 */
export const Color: SC<ColorOptions> = (options, context) => {
  // Render border only when colorAttribute is stroke.
  const { colorAttribute, symbol, mode = 'auto', ...style } = options;
  const path = Symbols.get(camelCase(symbol)) || Symbols.get('point');
  const { coordinate, document } = context;
  return (points, value, defaults) => {
      throw new Error("STUB");
  };
};

Color.props = {
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
