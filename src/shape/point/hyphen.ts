import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HyphenOptions = Record<string, any>;

/**
 * -
 */
export const Hyphen: SC<HyphenOptions> = (options, context) => {
    throw new Error("STUB");
};

Hyphen.props = {
  defaultMarker: 'hyphen',
  ...Color.props,
};
