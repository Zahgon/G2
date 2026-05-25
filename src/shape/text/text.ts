import { ShapeComponent as SC } from '../../runtime';
import { applyStyle } from '../../shape/utils';
import { select } from '../../utils/selection';
import { Advance } from './advance';

export type TextOptions = Record<string, any>;

/**
 * @todo autoRotate when in polar coordinate
 */
export const Text: SC<TextOptions> = (options, context) => {
    throw new Error("STUB");
};

Text.props = {
  defaultMarker: 'point',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
