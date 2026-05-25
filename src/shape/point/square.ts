import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type SquareOptions = Record<string, any>;

/**
 * ■
 */
export const Square: SC<SquareOptions> = (options, context) => {
    throw new Error("STUB");
};

Square.props = {
  defaultMarker: 'square',
  ...Color.props,
};
