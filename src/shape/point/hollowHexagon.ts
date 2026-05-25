import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowHexagonOptions = Record<string, any>;

/**
 * ⬡
 */
export const HollowHexagon: SC<HollowHexagonOptions> = (options, context) => {
    throw new Error("STUB");
};

HollowHexagon.props = {
  defaultMarker: 'hollowHexagon',
  ...Color.props,
};
