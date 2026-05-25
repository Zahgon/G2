import { MarkComponent as MC, Vector2 } from '../runtime';
import { VectorMark } from '../spec';
import { VectorShape } from '../shape';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip2d,
} from './utils';

const shape = {
  vector: VectorShape,
};

export type VectorOptions = Omit<VectorMark, 'type'>;

/**
 * Convert value for each channel to start, end.
 * The angle starts from the X axis(right direction).
 */
export const Vector: MC<VectorOptions> = () => {
  return (index, scale, value, coordinate) => {
      throw new Error("STUB");
  };
};

Vector.props = {
  defaultShape: 'vector',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
    { name: 'rotate', required: true, scale: 'identity' },
    { name: 'size', required: true },
  ],
  preInference: [...basePreInference()],
  postInference: [...basePostInference(), ...tooltip2d()],
};
