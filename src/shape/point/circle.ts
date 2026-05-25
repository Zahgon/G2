import { ShapeComponent as SC } from '../../runtime';
import { select } from '../../utils/selection';
import { applyStyle, getOrigin, toOpacityKey } from '../utils';
import { getRadius } from './color';

export type PointOptions = Record<string, any>;

type ColorOptions = {
  colorAttribute: 'fill' | 'stroke';
  mode?: 'fixed' | 'auto' | 'normal';
  [key: string]: any;
};

/**
 * Render point in different coordinate.
 */
export const BaseCircle: SC<ColorOptions> = (options, context) => {
  // Render border only when colorAttribute is stroke.
  const { colorAttribute, mode = 'auto', ...style } = options;

  const { coordinate, document } = context;
  return (points, value, defaults) => {
      throw new Error("STUB");
  };
};

/**
 * ●
 */
export const Circle: SC<PointOptions> = (options, context) => {
    throw new Error("STUB");
};

Circle.props = {
  defaultMarker: 'circle',
  defaultEnterAnimation: 'fadeIn',
  defaultExitAnimation: 'fadeOut',
};
