import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type PointOptions = Record<string, any>;

/**
 * ●
 */
export const Point: SC<PointOptions> = (options, context) => {
    throw new Error("STUB");
};

Point.props = {
  defaultMarker: 'point',
  ...Color.props,
};
