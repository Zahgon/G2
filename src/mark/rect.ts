import { MarkComponent as MC, Vector2 } from '../runtime';
import { RectMark } from '../spec';
import { RectShape, RectHollow } from '../shape';
import { MaybeZeroY1 } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip1d,
} from './utils';

const shape = {
  rect: RectShape,
  hollow: RectHollow,
};

export type RectOptions = Omit<RectMark, 'type'>;

export const Rect: MC<RectOptions> = () => {
    throw new Error("STUB");
};

Rect.props = {
  defaultShape: 'rect',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
  ],
  preInference: [...basePreInference(), { type: MaybeZeroY1 }],
  postInference: [...basePostInference(), ...tooltip1d()],
  interaction: {
    shareTooltip: true,
  },
};
