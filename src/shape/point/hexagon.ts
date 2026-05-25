import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HexagonOptions = Record<string, any>;

/**
 * ⭓
 */
export const Hexagon: SC<HexagonOptions> = (options, context) => {
    throw new Error("STUB");
};

Hexagon.props = {
  defaultMarker: 'hexagon',
  ...Color.props,
};
