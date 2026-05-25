import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowTriangleOptions = Record<string, any>;

/**
 * △
 */
export const HollowTriangle: SC<HollowTriangleOptions> = (options, context) => {
    throw new Error("STUB");
};

HollowTriangle.props = {
  defaultMarker: 'hollowTriangle',
  ...Color.props,
};
