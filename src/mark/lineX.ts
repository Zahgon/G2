import { deepMix } from '@antv/util';
import { MarkComponent as MC, Vector2 } from '../runtime';
import { LineXMark } from '../spec';
import { LineXY } from '../shape';
import { MaybeTupleX } from '../transform';
import {
  basePostInference,
  baseAnnotationChannels,
  basePreInference,
  createBandOffset,
} from './utils';

const shape = {
  line: LineXY,
};

export type LineXOptions = Omit<LineXMark, 'type'>;

export const LineX: MC<LineXOptions> = (options) => {
    throw new Error("STUB");
};

LineX.props = {
  defaultShape: 'line',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
  ],
  preInference: [...basePreInference(), { type: MaybeTupleX }],
  postInference: [...basePostInference()],
};
