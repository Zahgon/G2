import { MarkComponent as MC, Vector2, Mark } from '../runtime';
import { TextMark } from '../spec';
import { TextShape, TextBadge, TextTag } from '../shape';
import { MaybeTuple, MaybeVisualPosition } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  createBandOffset,
  tooltip2d,
  visualMark,
} from './utils';

const shape = {
  text: TextShape,
  badge: TextBadge,
  tag: TextTag,
};

export type TextOptions = Omit<TextMark, 'type'>;

export const Text: MC<TextOptions> = (options) => {
    throw new Error("STUB");
};

Text.props = {
  defaultShape: 'text',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
    { name: 'text', scale: 'identity' },
    { name: 'fontSize', scale: 'identity' },
    { name: 'rotate', scale: 'identity' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeTuple },
    { type: MaybeVisualPosition },
  ],
  postInference: [...basePostInference(), ...tooltip2d()],
};
