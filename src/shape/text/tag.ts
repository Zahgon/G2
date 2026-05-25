import { Text } from '@antv/g';
import { ShapeComponent as SC } from '../../runtime';
import { applyStyle } from '../../shape/utils';
import { select } from '../../utils/selection';

export type TagOptions = Record<string, any>;

/**
 * @todo autoRotate when in polar coordinate
 * Tag shape for Text mark, used in wordCloud plot.
 */
export const Tag: SC<TagOptions> = (options, context) => {
    throw new Error("STUB");
};

Tag.props = {
  defaultMarker: 'point',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
