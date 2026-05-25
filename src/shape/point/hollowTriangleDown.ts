import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowTriangleDownOptions = Record<string, any>;

/**
 * ▽
 */
export const HollowTriangleDown: SC<HollowTriangleDownOptions> = (
  options,
  context,
) => {
    throw new Error("STUB");
};

HollowTriangleDown.props = {
  defaultMarker: 'hollowTriangleDown',
  ...Color.props,
};
