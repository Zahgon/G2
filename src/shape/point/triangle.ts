import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type TriangleOptions = Record<string, any>;

/**
 * ▲
 */
export const Triangle: SC<TriangleOptions> = (options, context) => {
    throw new Error("STUB");
};

Triangle.props = {
  defaultMarker: 'triangle',
  ...Color.props,
};
