import { MarkComponent as MC, Vector2 } from '../runtime';
import { HeatmapMark } from '../spec';
import { HeatmapShape } from '../shape';
import { MaybeZeroX, MaybeZeroY } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip2d,
} from './utils';

const shape = {
  heatmap: HeatmapShape,
};

export type HeatmapOptions = Omit<HeatmapMark, 'type'>;

/**
 * Draw heatmap with gradient.
 */
export const Heatmap: MC<HeatmapOptions> = (options) => {
    throw new Error("STUB");
};

Heatmap.props = {
  defaultShape: 'heatmap',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
    { name: 'color', scale: 'identity', required: true },
    { name: 'size' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeZeroX },
    { type: MaybeZeroY },
  ],
  postInference: [...basePostInference(), ...tooltip2d()],
};
