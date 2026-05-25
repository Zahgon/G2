import { Band } from '@antv/scale';
import { MarkComponent as MC, Vector2 } from '../runtime';
import { CellMark } from '../spec';
import { CellShape, CellHollow } from '../shape';
import { MaybeZeroX, MaybeZeroY, MaybeZeroPadding } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  tooltip2d,
} from './utils';

const shape = {
  cell: CellShape,
  hollow: CellHollow,
};

export type CellOptions = Omit<CellMark, 'type'>;

/**
 * Convert value for each channel to Cell shapes.
 * Calc the bbox of each Cell based on x, y and r.
 * This is for allowing their radius can be affected by coordinate(e.g. fisheye).
 */
export const Cell: MC<CellOptions> = () => {
    throw new Error("STUB");
};

Cell.props = {
  defaultShape: 'cell',
  defaultLabelShape: 'label',
  shape,
  composite: false,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true, scale: 'band' },
    { name: 'y', required: true, scale: 'band' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeZeroX },
    { type: MaybeZeroY },
    { type: MaybeZeroPadding },
  ],
  postInference: [...basePostInference(), ...tooltip2d()],
};
