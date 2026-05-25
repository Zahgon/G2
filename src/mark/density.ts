import { Band } from '@antv/scale';
import { MarkComponent as MC, Vector2 } from '../runtime';
import { DensityMark } from '../spec';
import { DensityShape } from '../shape';
import { MaybeZeroY1, MaybeZeroX } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip1d,
} from './utils';

const shape = {
  density: DensityShape,
};

export type DensityOptions = Omit<DensityMark, 'type'>;

export const Density: MC<DensityOptions> = () => {
    throw new Error("STUB");
};

Density.props = {
  defaultShape: 'density',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', scale: 'band', required: true },
    { name: 'y', required: true },
    { name: 'size', required: true },
    { name: 'series', scale: 'band' },
    { name: 'size', required: true, scale: 'identity' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeZeroY1 },
    { type: MaybeZeroX },
  ],
  postInference: [...basePostInference(), ...tooltip1d()],
  interaction: { shareTooltip: true },
};
