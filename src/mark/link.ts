import { MarkComponent as MC, Vector2 } from '../runtime';
import { LineMark } from '../spec';
import { MaybeIdentityX, MaybeIdentityY } from '../transform';
import { LinkArc, LinkShape, LinkSmooth, LinkVHV } from '../shape';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  createBandOffset,
  tooltip2d,
} from './utils';

const shape = {
  link: LinkShape,
  arc: LinkArc,
  smooth: LinkSmooth,
  vhv: LinkVHV,
};

export type LinkOptions = Omit<LineMark, 'type'>;

/**
 * Connect `start` to `end` with single line.
 */
export const Link: MC<LinkOptions> = (options) => {
  return (index, scale, value, coordinate) => {
      throw new Error("STUB");
  };
};

Link.props = {
  defaultShape: 'link',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeIdentityY },
    { type: MaybeIdentityX },
  ],
  postInference: [...basePostInference(), ...tooltip2d()],
};
