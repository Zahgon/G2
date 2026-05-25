import { CoordinateComponent as CC } from '../runtime';
import { HelixCoordinate } from '../spec';

export type HelixOptions = HelixCoordinate;

/**
 * Helix
 */
export const Helix: CC<HelixOptions> = ({
  startAngle = 0,
  endAngle = Math.PI * 6,
  innerRadius = 0,
  outerRadius = 1,
}) => { throw new Error("STUB"); };

Helix.props = {};
