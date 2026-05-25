import { curveLinear, curveLinearClosed } from '@antv/vendor/d3-shape';
import { isPolar } from '../../utils/coordinate';
import { ShapeComponent as SC } from '../../runtime';
import { Curve } from './curve';

export type LineOptions = Record<string, any>;

export const Line: SC<LineOptions> = (options, context) => {
    throw new Error("STUB");
};

Line.props = {
  ...Curve.props,
  defaultMarker: 'line',
};
