import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowBowtieOptions = Record<string, any>;

/**
 * ▷◁
 */
export const HollowBowtie: SC<HollowBowtieOptions> = (options, context) => {
    throw new Error("STUB");
};

HollowBowtie.props = {
  defaultMarker: 'hollowBowtie',
  ...Color.props,
};
