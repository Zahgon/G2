import { Mark, MarkComponent as MC, Vector2 } from '../runtime';
import { ShapeMark } from '../spec';
import { ShapeShape } from '../shape';
import {
  MaybeTuple,
  MaybeVisualPosition,
  MaybeFunctionAttribute,
} from '../transform';
import { basePreInference, createBandOffset, visualMark } from './utils';

const shape = {
  shape: ShapeShape,
};

export type ShapeOptions = Omit<ShapeMark, 'type'>;

/**
 * @todo Unify with text, image and point.
 */
export const Shape: MC<ShapeOptions> = (options) => {
    throw new Error("STUB");
};

Shape.props = {
  defaultShape: 'shape',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    { name: 'x', required: true },
    { name: 'y', required: true },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeTuple },
    { type: MaybeVisualPosition },
    { type: MaybeFunctionAttribute },
  ],
};
