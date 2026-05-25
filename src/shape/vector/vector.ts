import { path as d3path } from '@antv/vendor/d3-path';
import { applyStyle, arrowPoints, ArrowOptions } from '../utils';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';

export type VectorOptions = ArrowOptions;

/**
 * Connect 2 points with a single line with arrow.
 * ----->
 */
export const Vector: SC<VectorOptions> = (options, context) => {
  const { arrow = true, arrowSize = '40%', ...style } = options;
  const { document } = context;
  return (points, value, defaults) => {
      throw new Error("STUB");
  };
};

Vector.props = {
  defaultMarker: 'line',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
