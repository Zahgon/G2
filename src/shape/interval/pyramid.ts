import { Coordinate } from '@antv/coord';
import { isTranspose } from '../../utils/coordinate';
import { ShapeComponent as SC, Vector2 } from '../../runtime';
import { Funnel } from './funnel';

export type PyramidOptions = Record<string, any>;

/**
 * Adjust and return the new `points`.
 */
function getPyramidPoints(
  points: Vector2[],
  nextPoints: Vector2[],
  previousPoints: Vector2[],
  coordinate: Coordinate,
  reverse: boolean,
) {
    throw new Error("STUB");
}

/**
 * Render pyramid in different coordinate and using color channel for stroke and fill attribute.
 */
export const Pyramid: SC<PyramidOptions> = (options, context) => {
    throw new Error("STUB");
};

Pyramid.props = {
  defaultMarker: 'square',
};
