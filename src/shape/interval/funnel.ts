import { line, curveLinearClosed } from '@antv/vendor/d3-shape';
import { Coordinate } from '@antv/coord';
import { isTranspose } from '../../utils/coordinate';
import { ShapeComponent as SC, Vector2 } from '../../runtime';
import { select } from '../../utils/selection';
import { applyStyle, reorder } from '../utils';
import { createRoundedPath } from '../../utils/path';

export type FunnelOptions = {
  adjustPoints?: (
    points: Vector2[],
    nextPoints: Vector2[],
    previousPoints: Vector2[],
    coordinate: Coordinate,
    reverse: boolean,
  ) => Vector2[];
  [key: string]: any;
};

/**
 * Adjust and return the new `points`.
 */
function getFunnelPoints(
  points: Vector2[],
  nextPoints: Vector2[],
  previousPoints: Vector2[],
  coordinate: Coordinate,
  reverse: boolean,
) {
    throw new Error("STUB");
}

/**
 * Render funnel in different coordinate and using color channel for stroke and fill attribute.
 */
export const Funnel: SC<FunnelOptions> = (options, context) => {
  const {
    adjustPoints = getFunnelPoints,
    radius,
    radiusTopLeft = radius,
    radiusTopRight = radius,
    radiusBottomRight = radius,
    radiusBottomLeft = radius,
    innerRadius = 0,
    innerRadiusTopLeft = innerRadius,
    innerRadiusTopRight = innerRadius,
    innerRadiusBottomRight = innerRadius,
    innerRadiusBottomLeft = innerRadius,
    first = true,
    last = true,
    ...style
  } = options;
  const { coordinate, document } = context;
  return (points, value, defaults, point2d) => {
      throw new Error("STUB");
  };
};

Funnel.props = {
  defaultMarker: 'square',
};
