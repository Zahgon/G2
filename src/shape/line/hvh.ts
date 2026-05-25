import { curveStep } from '@antv/vendor/d3-shape';
import { ShapeComponent as SC } from '../../runtime';
import { Curve } from './curve';

export type HVHOptions = Record<string, any>;

export const HVH: SC<HVHOptions> = (options, context) => {
    throw new Error("STUB");
};

HVH.props = {
  ...Curve.props,
  defaultMarker: 'hvh',
};
