import { Vector2, MarkComponent as MC } from '../runtime';
import { PolygonMark } from '../spec';
import { PolygonShape, PolygonRibbon } from '../shape';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip2d,
} from './utils';

const shape = {
  polygon: PolygonShape,
  ribbon: PolygonRibbon,
};

export type PolygonOptions = Omit<PolygonMark, 'type'>;

/**
 * Convert value for each channel to polygon shapes.
 */
export const Polygon: MC<PolygonOptions> = () => {
    throw new Error("STUB");
};

Polygon.props = {
  defaultShape: 'polygon',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
  ],
  preInference: [...basePreInference()],
  postInference: [...basePostInference(), ...tooltip2d()],
};
