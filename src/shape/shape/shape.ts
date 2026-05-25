import { ShapeComponent as SC } from '../../runtime';

//@todo
export type ShapeOptions = Record<string, any>;

/**
 * Draw a custom shape.
 */
export const Shape: SC<ShapeOptions> = (options, context) => {
    throw new Error("STUB");
};

Shape.props = {
  defaultMarker: 'point',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
