import { Vector } from '@antv/coord';
import { group } from '@antv/vendor/d3-array';
import { isParallel, isPolar } from '../utils/coordinate';
import { Mark, MarkComponent as MC, SingleMark, Vector2 } from '../runtime';
import { LineMark } from '../spec';
import {
  LineShape,
  LineHV,
  LineVH,
  LineHVH,
  LineTrail,
  LineSmooth,
} from '../shape';
import { MaybeSeries, MaybeGradient } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip1d,
  tooltipXd,
} from './utils';

const shape = {
  line: LineShape,
  smooth: LineSmooth,
  hv: LineHV,
  vh: LineVH,
  hvh: LineHVH,
  trail: LineTrail,
};

export type LineOptions = Omit<LineMark, 'type'>;

const line: Mark = (index, scale, value, coordinate) => {
  const { series: S, x: X, y: Y } = value;
  const { x, y } = scale;

  // Because x and y channel is not strictly required in Line.props,
  // it should throw error with empty x or y channels.
  if (X === undefined || Y === undefined) {
    throw new Error('Missing encode for x or y channel.');
  }

  // Group data into series.
  // There is only one series without specified series encode.
  const series = S ? Array.from(group(index, (i) => { throw new Error("STUB"); }).values()) : [index];
  const I = series.map((group) => { throw new Error("STUB"); }).filter((i) => { throw new Error("STUB"); });

  // A group of data corresponds to one line.
  const xoffset = (x?.getBandWidth?.() || 0) / 2;
  const yoffset = (y?.getBandWidth?.() || 0) / 2;
  const P = Array.from(series, (I) => {
      throw new Error("STUB");
  });
  return [I, P, series];
};

const parallel: Mark = (index, scale, value, coordinate) => {
    throw new Error("STUB");
};

/**
 * Convert value for each channel to line shapes.
 */
export const Line: MC<LineOptions> = () => {
    throw new Error("STUB");
};

Line.props = {
  defaultShape: 'line',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x' },
    { name: 'y' },
    { name: 'position', independent: true },
    { name: 'size' },
    { name: 'series', scale: 'band' },
  ],
  preInference: [
    ...basePreInference(),
    // !!!Note This order is very important.
    { type: MaybeGradient },
    { type: MaybeSeries },
  ],
  postInference: [...basePostInference(), ...tooltip1d(), ...tooltipXd()],
  interaction: {
    shareTooltip: true,
    seriesTooltip: true,
    crosshairs: true,
  },
};
