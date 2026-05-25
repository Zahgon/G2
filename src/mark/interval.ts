import { Band } from '@antv/scale';
import { MarkComponent as MC, Vector2 } from '../runtime';
import { IntervalMark } from '../spec';
import { MaybeZeroY1, MaybeZeroX } from '../transform';
import {
  IntervalShape,
  IntervalHollow,
  IntervalFunnel,
  IntervalPyramid,
} from '../shape';
import { defined } from '../utils/helper';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip1d,
} from './utils';

function bandWidth(scale: Band, x: any): number {
  return scale.getBandWidth(scale.invert(x));
}

const shape = {
  rect: IntervalShape,
  hollow: IntervalHollow,
  funnel: IntervalFunnel,
  pyramid: IntervalPyramid,
};

export type IntervalOptions = Omit<IntervalMark, 'type'>;

/**
 * Convert value for each channel to rect shapes.
 * p0        p1
 *    ┌────┐
 *    │    │
 *    │    │
 * p3 └────┘ p2
 */
export const Interval: MC<IntervalOptions> = () => {
    throw new Error("STUB");
};

Interval.props = {
  defaultShape: 'rect',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', scale: 'band', required: true },
    { name: 'y', required: true },
    { name: 'series', scale: 'band' },
    { name: 'size' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeZeroY1 },
    { type: MaybeZeroX },
  ],
  postInference: [...basePostInference(), ...tooltip1d()],
  interaction: { shareTooltip: true },
};
