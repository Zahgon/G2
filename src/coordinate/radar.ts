import { CoordinateComponent as CC } from '../runtime';
import { RadarCoordinate } from '../spec';
import { Polar } from './polar';
import { Parallel } from './parallel';

export type RadarOptions = RadarCoordinate;

/**
 *  Radar = Parallel + Polar.
 */
export const Radar: CC<RadarOptions> = (options) => {
    throw new Error("STUB");
};

Radar.props = {};
