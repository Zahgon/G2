import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type CrossOptions = Record<string, any>;

/**
 * ✕
 */
export const Cross: SC<CrossOptions> = (options, context) => {
    throw new Error("STUB");
};

Cross.props = {
  defaultMarker: 'cross',
  ...Color.props,
};
