import { path as d3path } from '@antv/vendor/d3-path';
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';

export type SmoothOptions = Record<string, any>;

/**
 * Connect 2 points with a smooth line, used in tree.
 */
export const Smooth: SC<SmoothOptions> = (options, context) => {
    throw new Error("STUB");
};

Smooth.props = {
  defaultMarker: 'smooth',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
