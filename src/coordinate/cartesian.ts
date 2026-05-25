import { CoordinateComponent as CC } from '../runtime';
import { CartesianCoordinate } from '../spec';

export type CartesianOptions = Omit<CartesianCoordinate, 'polar'>;

/**
 * Default coordinate transformation for all charts.
 */
export const Cartesian: CC<CartesianOptions> = () => { throw new Error("STUB"); };

Cartesian.props = {};
