import { MarkComponent as MC, Vector2 } from '../runtime';
import { PointMark } from '../spec';
import {
  PointBowtie,
  PointCross,
  PointDiamond,
  PointHexagon,
  PointHollowBowtie,
  PointHollowDiamond,
  PointHollowHexagon,
  PointHollow,
  PointHollowSquare,
  PointHollowTriangle,
  PointHollowTriangleDown,
  PointHyphen,
  PointLine,
  PointTriangleDown,
  PointPlus,
  PointSquare,
  PointShape,
  PointTick,
  PointTriangle,
  PointCircle,
  PointHollowCircle,
} from '../shape';
import { MaybeZeroX, MaybeZeroY, MaybeSize } from '../transform';
import {
  baseGeometryChannels,
  basePostInference,
  basePreInference,
  createBandOffset,
  tooltip2d,
} from './utils';

const shape = {
  hollow: PointHollow,
  hollowDiamond: PointHollowDiamond,
  hollowHexagon: PointHollowHexagon,
  hollowSquare: PointHollowSquare,
  hollowTriangleDown: PointHollowTriangleDown,
  hollowTriangle: PointHollowTriangle,
  hollowBowtie: PointHollowBowtie,
  hollowCircle: PointHollowCircle,
  point: PointShape,
  plus: PointPlus,
  diamond: PointDiamond,
  square: PointSquare,
  triangle: PointTriangle,
  hexagon: PointHexagon,
  cross: PointCross,
  bowtie: PointBowtie,
  hyphen: PointHyphen,
  line: PointLine,
  tick: PointTick,
  triangleDown: PointTriangleDown,
  circle: PointCircle,
};

export type PointOptions = Omit<PointMark, 'type'>;

/**
 * Convert value for each channel to point shapes.
 * Calc the bbox of each point based on x, y and r.
 * This is for allowing their radius can be affected by coordinate(e.g. fisheye).
 */
export const Point: MC<PointOptions> = (options) => {
    throw new Error("STUB");
};

Point.props = {
  defaultShape: 'hollow',
  defaultLabelShape: 'label',
  composite: false,
  shape,
  channels: [
    ...baseGeometryChannels({ shapes: Object.keys(shape) }),
    { name: 'x', required: true },
    { name: 'y', required: true },
    { name: 'series', scale: 'band' },
    { name: 'size', quantitative: 'sqrt' },
    { name: 'dx', scale: 'identity' },
    { name: 'dy', scale: 'identity' },
  ],
  preInference: [
    ...basePreInference(),
    { type: MaybeZeroX },
    { type: MaybeZeroY },
  ],
  postInference: [...basePostInference(), { type: MaybeSize }, ...tooltip2d()],
};
