import { Mark, MarkComponent as MC, Vector2 } from '../runtime';
import { RangeMark } from '../spec';
import { RangeShape } from '../shape';
import {
  baseAnnotationChannels,
  basePostInference,
  basePreInference,
} from './utils';

function extend(channel: string, extended: boolean, value, scale) {
  if (extended) return () => { throw new Error("STUB"); };
  const { [channel]: C, [`${channel}1`]: C1 } = value;
  return (i) => {
      throw new Error("STUB");
  };
}

export function AbstractRange(
  options: { extendX?: boolean; extendY?: boolean } = {},
): Mark {
  const { extendX = false, extendY = false } = options;
  return (index, scale, value, coordinate) => {
      throw new Error("STUB");
  };
}

const shape = { range: RangeShape };

export type RangeOptions = Omit<RangeMark, 'type'>;

export const Range: MC<RangeOptions> = () => {
    throw new Error("STUB");
};

Range.props = {
  defaultShape: 'range',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
  ],
  preInference: [...basePreInference()],
  postInference: [...basePostInference()],
};
