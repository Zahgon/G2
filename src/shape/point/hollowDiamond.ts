import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowDiamondOptions = Record<string, any>;

/**
 * ◇
 */
export const HollowDiamond: SC<HollowDiamondOptions> = (options, context) => {
    throw new Error("STUB");
};

HollowDiamond.props = {
  defaultMarker: 'hollowDiamond',
  ...Color.props,
};
