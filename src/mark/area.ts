import { group } from '@antv/vendor/d3-array';
import { MarkComponent as MC } from '../runtime';
import { AreaMark } from '../spec';
import { AreaShape, AreaHV, AreaHVH, AreaSmooth, AreaVH } from '../shape';
import { MaybeSeries, MaybeZeroY1, MaybeZeroPadding } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip1d,
} from './utils';

const shape = {
  area: AreaShape,
  smooth: AreaSmooth,
  hvh: AreaHVH,
  vh: AreaVH,
  hv: AreaHV,
};

export type AreaOptions = Omit<AreaMark, 'type'>;

/*
 * Convert value for each channel to area shapes.
 *
 *     ▲
 *     │
 *     │                                         y2
 *     │
 *     │                     y1     xxxxxxxxxxxxx
 *     │                         xxxx            x
 *     │                      xxx                x
 *     │                    xxx                  x
 *     │        y0       xxx                     x
 *     │           xxxxxxx                       x
 *     │          x                              x
 *     │         xx                              x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 * ────┼─────────x───────────────────────────────x──────────────►
 *     │        y3             y4                y5
 */

export const Area: MC<AreaOptions> = () => {
    throw new Error("STUB");
};

Area.props = {
  defaultShape: 'area',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
    { name: 'size' },
    { name: 'series', scale: 'band' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeSeries },
    { type: MaybeZeroY1 },
    { type: MaybeZeroPadding },
  ],
  postInference: [...basePostInference(), ...tooltip1d()],
  interaction: {
    shareTooltip: true,
    seriesTooltip: true,
    crosshairs: true,
  },
};
