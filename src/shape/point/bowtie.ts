import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type BowtieOptions = Record<string, any>;

/**
 * ▶◀
 */
export const Bowtie: SC<BowtieOptions> = (options, context) => {
    throw new Error("STUB");
};

Bowtie.props = {
  defaultMarker: 'bowtie',
  ...Color.props,
};
