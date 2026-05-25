import { curveStepAfter } from '@antv/vendor/d3-shape';
import { ShapeComponent as SC } from '../../runtime';
import { Curve } from './curve';

export type HVOptions = Record<string, any>;

export const HV: SC<HVOptions> = (options, context) => {
    throw new Error("STUB");
};

HV.props = {
  ...Curve.props,
  defaultMarker: 'hv',
};
