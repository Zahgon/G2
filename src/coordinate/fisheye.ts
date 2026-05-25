import { CoordinateComponent as CC } from '../runtime';
import { FisheyeCoordinate } from '../spec';

export type FisheyeOptions = FisheyeCoordinate;

/**
 * Fisheye
 */
export const Fisheye: CC<FisheyeOptions> = ({
  focusX = 0,
  focusY = 0,
  distortionX = 2,
  distortionY = 2,
  visual = false,
}) => { throw new Error("STUB"); };

Fisheye.props = { transform: true };
