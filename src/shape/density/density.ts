import { path as d3path } from '@antv/vendor/d3-path';
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';

export type DensityOptions = {
  colorAttribute: 'fill' | 'stroke';
};

/**
 * Draw density shape.
 */
export const Density: SC<DensityOptions> = (options, context) => {
    throw new Error("STUB");
};

Density.props = {
  defaultMarker: 'square',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
