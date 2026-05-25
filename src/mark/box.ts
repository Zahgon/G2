import { Band } from '@antv/scale';
import { Vector2, MarkComponent as MC } from '../runtime';
import { BoxMark } from '../spec';
import { BoxShape, BoxViolin } from '../shape';
import { MaybeZeroX } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip1d,
} from './utils';

const shape = {
  box: BoxShape,
  violin: BoxViolin,
};

export type BoxOptions = Omit<BoxMark, 'type'>;

/**
 * Convert value for each channel to box shapes.
 *
 * p0           p2          p1
 *    ──────────┬──────────
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │ p3
 * p4 ┌─────────┴──────────┐ p5
 *    │                    │
 *    │                    │
 * p8 ├────────────────────┤ p9
 *    │                    │
 *    │        p10         │
 * p7 └─────────┬──────────┘ p6
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *   ───────────┴───────────
 * p12         p11           p13
 */
export const Box: MC<BoxOptions> = () => {
    throw new Error("STUB");
};

Box.props = {
  defaultShape: 'box',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', scale: 'band', required: true },
    { name: 'y', required: true },
    { name: 'series', scale: 'band' },
  ],
  preInference: [...basePreInference(), { type: MaybeZeroX }],
  postInference: [...basePostInference(), ...tooltip1d()],
  interaction: {
    shareTooltip: true,
  },
};
