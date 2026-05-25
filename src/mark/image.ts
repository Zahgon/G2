import { Mark, MarkComponent as MC, Vector2 } from '../runtime';
import { ImageMark } from '../spec';
import { MaybeTuple, MaybeVisualPosition } from '../transform';
import { ImageShape } from '../shape';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  createBandOffset,
  tooltip2d,
  visualMark,
} from './utils';

const shape = {
  image: ImageShape,
};

export type ImageOptions = Omit<ImageMark, 'type'>;

export const Image: MC<ImageOptions> = (options) => {
    throw new Error("STUB");
};

Image.props = {
  defaultShape: 'image',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
    { name: 'src', scale: 'identity' },
    { name: 'size' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeTuple },
    { type: MaybeVisualPosition },
  ],
  postInference: [...basePostInference(), ...tooltip2d()],
};
