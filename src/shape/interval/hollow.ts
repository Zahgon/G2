import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowOptions = Record<string, any>;

/**
 * Render rect in different coordinate and using color channel for stroke attribute.
 */
export const Hollow: SC<HollowOptions> = (options, context) => {
    throw new Error("STUB");
};

Hollow.props = {
  ...Color.props,
  defaultMarker: 'hollowSquare',
};
