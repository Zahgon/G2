import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';

export type ColorOptions = {
  colorAttribute: 'fill' | 'stroke';
  [key: string]: any;
};

/**
 * Draw a filled or hollow path.
 */
export const Color: SC<ColorOptions> = (options, context) => {
  const { arrow, colorAttribute, ...style } = options;
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
