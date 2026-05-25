import { Coordinate } from '@antv/coord';
import { Vector2 } from '../../../runtime';
import { getRadius, isCircular } from '../../../utils/coordinate';
import { angleWithQuadrant } from '../../../utils/vector';
import { LabelPosition, pointOfArc } from './default';
import { inferOutsideCircularStyle } from './outside';

/**
 * Surround label transform is used to make labels surround circular.
 */
export function surround(
  position: LabelPosition,
  points: Vector2[],
  value: Record<string, any>,
  coordinate: Coordinate,
) {
    throw new Error("STUB");
}
