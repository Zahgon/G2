import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type TriangleDownOptions = Record<string, any>;

/**
 * ▼
 */
export const TriangleDown: SC<TriangleDownOptions> = (options, context) => {
    throw new Error("STUB");
};

TriangleDown.props = {
  defaultMarker: 'triangleDown',
  ...Color.props,
};
