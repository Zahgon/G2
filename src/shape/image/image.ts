import { ShapeComponent as SC } from '../../runtime';
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { p } from '../../mark/utils';

export type ImageOptions = Record<string, any>;

export const Image: SC<ImageOptions> = (options, context) => {
    throw new Error("STUB");
};

Image.props = {
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
