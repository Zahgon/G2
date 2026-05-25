import { deepMix } from '@antv/util';
import { MarkComponent as MC, Vector2 } from '../runtime';
import { LineYMark } from '../spec';
import { LineXY } from '../shape';
import { MaybeTupleY } from '../transform';
import {
  baseAnnotationChannels,
  basePreInference,
  basePostInference,
  createBandOffset,
} from './utils';

const shape = {
  line: LineXY,
};

export type LineYOptions = Omit<LineYMark, 'type'>;

export const LineY: MC<LineYOptions> = (options) => {
    throw new Error("STUB");
};

LineY.props = {
  defaultShape: 'line',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
    { name: 'y', required: true },
  ],
  preInference: [...basePreInference(), { type: MaybeTupleY }],
  postInference: [...basePostInference()],
};
