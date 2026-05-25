import { CoordinateComponent as CC } from '../runtime';
import { ThetaCoordinate } from '../spec';
import { Polar } from './polar';
import { Transpose } from './transpose';

export type ThetaOptions = ThetaCoordinate;

export const getThetaOptions = (options: ThetaOptions = {}) => {
  const defaultOptions = {
    startAngle: -Math.PI / 2,
    endAngle: (Math.PI * 3) / 2,
    innerRadius: 0,
    outerRadius: 1,
  };
  return { ...defaultOptions, ...options };
};

/**
 * Theta = Transpose + Polar.
 */
export const Theta: CC<ThetaOptions> = (options) => {
    throw new Error("STUB");
};

Theta.props = {};
