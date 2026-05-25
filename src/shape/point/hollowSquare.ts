import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowSquareOptions = Record<string, any>;

/**
 * □
 */
export const HollowSquare: SC<HollowSquareOptions> = (options, context) => {
    throw new Error("STUB");
};

HollowSquare.props = {
  defaultMarker: 'hollowSquare',
  ...Color.props,
};
