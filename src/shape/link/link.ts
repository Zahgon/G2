import { ArrowOptions } from '../utils';
import { ShapeComponent as SC } from '../../runtime';
import { Vector } from '../../shape/vector/vector';

export type LinkOptions = ArrowOptions;

/**
 * Connect 2 points with a single line with arrow.
 * ----->
 */
export const Link: SC<LinkOptions> = (options, context) => {
  const { arrow = false } = options;
  return (...params) => {
      throw new Error("STUB");
  };
};

Link.props = {
  defaultMarker: 'line',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
