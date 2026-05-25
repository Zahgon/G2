import { curveLinearClosed, curveLinear } from '@antv/vendor/d3-shape';
import { isPolar } from '../../utils/coordinate';
import { ShapeComponent as SC } from '../../runtime';
import { Curve } from './curve';

export type AreaOptions = Record<string, any>;

export const Area: SC<AreaOptions> = (options, context) => {
    throw new Error("STUB");
};

Area.props = {
  ...Curve.props,
  defaultMarker: 'square',
};
