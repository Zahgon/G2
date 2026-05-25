import {
  curveCatmullRomClosed,
  curveMonotoneX,
  curveMonotoneY,
} from '@antv/vendor/d3-shape';
import { isPolar, isTranspose } from '../../utils/coordinate';
import { ShapeComponent as SC } from '../../runtime';
import { Curve } from './curve';

export type SmoothOptions = Record<string, any>;

export const Smooth: SC<SmoothOptions> = (options, context) => {
    throw new Error("STUB");
};

Smooth.props = {
  ...Curve.props,
  defaultMarker: 'smooth',
};
