import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type DiamondOptions = Record<string, any>;

/**
 * ◆
 */
export const Diamond: SC<DiamondOptions> = (options, context) => {
    throw new Error("STUB");
};

Diamond.props = {
  defaultMarker: 'diamond',
  ...Color.props,
};
