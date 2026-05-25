import { ShapeComponent as SC } from '../../runtime';
import { BaseCircle, Circle } from './circle';

export type HollowCircleOptions = Record<string, any>;

/**
 * ○
 */
export const HollowCircle: SC<HollowCircleOptions> = (options, context) => {
    throw new Error("STUB");
};

HollowCircle.props = {
  defaultMarker: 'hollowPoint',
  ...Circle.props,
};
