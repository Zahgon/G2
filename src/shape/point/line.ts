import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type LineOptions = Record<string, any>;

/**
 * |
 */
export const Line: SC<LineOptions> = (options, context) => {
    throw new Error("STUB");
};

Line.props = {
  defaultMarker: 'line',
  ...Color.props,
};
