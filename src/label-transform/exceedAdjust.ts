import { AABB, DisplayObject } from '@antv/g';
import { LabelTransformComponent as LLC } from '../runtime';
import { ExceedAdjustLabel } from '../spec';
import { Bounds } from '../utils/bounds';
import { show } from '../utils/style';

const adjustPosition = (target: Bounds, edge: Bounds) => {
  const [[minEdgeX, minEdgeY], [maxEdgeX, maxEdgeY]] = edge;
  const [[minX, minY], [maxX, maxY]] = target;

  let changeX = 0,
    changeY = 0;

  // x-axis
  if (minX < minEdgeX) {
    changeX = minEdgeX - minX;
  } else if (maxX > maxEdgeX) {
    changeX = maxEdgeX - maxX;
  }

  // y-axis
  if (minY < minEdgeY) {
    changeY = minEdgeY - minY;
  } else if (maxY > maxEdgeY) {
    changeY = maxEdgeY - maxY;
  }

  return [changeX, changeY];
};

const union = (a: AABB, b: AABB) => {
  // Handle null bounds by returning the non-null one, or a default AABB
  if (!a || !a.min || !a.max) {
    if (!b || !b.min || !b.max) {
      return { min: [0, 0], max: [0, 0] };
    }
    return b;
  }
  if (!b || !b.min || !b.max) {
    return a;
  }

  return {
    min: [Math.min(a.min[0], b.min[0]), Math.min(a.min[1], b.min[1])],
    max: [Math.max(a.max[0], b.max[0]), Math.max(a.max[1], b.max[1])],
  };
};

export type ExceedAdjustOptions = Omit<ExceedAdjustLabel, 'type'> & {
  /** X-axis offset default is 0 */
  offsetX?: number;
  /** Y-axis offset default is 0 */
  offsetY?: number;
};

/**
 * adjust the label when exceed the specific area
 */
export const ExceedAdjust: LLC<ExceedAdjustOptions> = (options = {}) => {
    throw new Error("STUB");
};
