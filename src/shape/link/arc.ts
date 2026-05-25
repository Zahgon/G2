import { path as d3path } from '@antv/vendor/d3-path';
import { appendArc, applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { isPolar } from '../../utils/coordinate';
import { dist, mid } from '../../utils/vector';
import { ShapeComponent as SC } from '../../runtime';

export type ArcOptions = Record<string, any>;

/**
 * Connect points for 2 points:
 * - In rect, draw half circle.
 * - In polar, draw quadratic curve.
 */
export const Arc: SC<ArcOptions> = (options, context) => {
  const { ...style } = options;
  const { coordinate, document } = context;
  return (points, value, defaults) => {
      throw new Error("STUB");
  };
};

Arc.props = {
  defaultMarker: 'smooth',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
