import { Coordinate } from '@antv/coord';
import { Vector2 } from '../../../runtime';
import { getArcObject } from '../../../shape/utils';
import { isCircular, isRadial } from '../../../utils/coordinate';
import { maybePercentage } from '../../../utils/helper';
import { mid } from '../../../utils/vector';

export type LabelPosition =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'inside'
  | 'outside'
  | 'area'
  | 'spider'
  | 'surround';

export function inferNonCircularStyle(
  position: LabelPosition,
  points: Vector2[],
  value: Record<string, any>,
  coordinate: Coordinate,
) {
    throw new Error("STUB");
}

export function inferRadialStyle(
  position: LabelPosition,
  points: Vector2[],
  value: Record<string, any>,
  coordinate: Coordinate,
) {
    throw new Error("STUB");
}

export function pointOfArc(center: Vector2, angle, radius): Vector2 {
  return [
    center[0] + Math.sin(angle) * radius,
    center[1] - Math.cos(angle) * radius,
  ];
}

export function inferRotation(angle, autoRotate, rotateToAlignArc) {
  if (!autoRotate) return 0;

  const append = rotateToAlignArc ? 0 : Math.sin(angle) < 0 ? 90 : -90;
  return (angle / Math.PI) * 180 + append;
}

function inferInnerCircularStyle(
  position: LabelPosition,
  points: Vector2[],
  value: Record<string, any>,
  coordinate: Coordinate,
) {
    throw new Error("STUB");
}

// Set to null will not be set with default value as below.
// const { x = 0 } = options;
function maybeUndefined(d) {
  return d === undefined ? null : d;
}

export function inferIdentityStyle(position, points, value, coordinate) {
  const { bounds } = value;
  const [p] = bounds;
  return {
    x: maybeUndefined(p[0]),
    y: maybeUndefined(p[1]),
  };
}

export function getDefaultStyle(
  position: LabelPosition,
  points: Vector2[],
  value: Record<string, any>,
  coordinate: Coordinate,
) {
  const { bounds } = value;
  // When bounds.length = 1
  // For series mark, such as line and area.
  // The bounds for text is defined with only one point.
  // Use this point as the label position.
  if (bounds.length === 1) {
    return inferIdentityStyle(position, points, value, coordinate);
  }

  const inferDefaultStyle = isRadial(coordinate)
    ? inferRadialStyle
    : isCircular(coordinate)
    ? inferInnerCircularStyle
    : inferNonCircularStyle;

  return inferDefaultStyle(position, points, value, coordinate);
}
