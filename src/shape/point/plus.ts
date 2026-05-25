import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type PlusOptions = Record<string, any>;

/**
 * +
 */
export const Plus: SC<PlusOptions> = (options, context) => {
    throw new Error("STUB");
};

Plus.props = {
  defaultMarker: 'plus',
  ...Color.props,
};
