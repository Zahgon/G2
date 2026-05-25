import { GuideComponentComponent as GCC } from '../runtime';
import { AxisOptions, LinearAxis, rotateAxis } from './axis';

export type AxisXOptions = AxisOptions;

/**
 * LinearAxis component bind to x scale.
 */
export const AxisX: GCC<AxisXOptions> = (options) => {
    throw new Error("STUB");
};

AxisX.props = {
  ...LinearAxis.props,
  defaultPosition: 'bottom',
};

export function axisXConfig() {
    throw new Error("STUB");
}
