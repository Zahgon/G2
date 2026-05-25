import { GuideComponentComponent as GCC } from '../runtime';
import { AxisOptions, LinearAxis, rotateAxis } from './axis';

export type AxisYOptions = AxisOptions;

/**
 * LinearAxis component bind to y scale.
 */
export const AxisY: GCC<AxisYOptions> = (options) => {
    throw new Error("STUB");
};

AxisY.props = {
  ...LinearAxis.props,
  defaultPosition: 'left',
};
