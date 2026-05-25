import { Coordinate } from '@antv/coord';
import { path as d3path } from '@antv/vendor/d3-path';
import { isPolar } from '../../utils/coordinate';
import { applyStyle, appendPolygon, appendArc } from '../utils';
import { select } from '../../utils/selection';
import { dist } from '../../utils/vector';
import { ShapeComponent as SC, Vector2 } from '../../runtime';

export type PolygonOptions = Record<string, any>;

function getPolygonPath(points: Vector2[], coordinate: Coordinate) {
  const path = d3path();
  // In polar, draw arc.
  if (isPolar(coordinate)) {
    const center = coordinate.getCenter();
    const closedPoints = [...points, points[0]];
    // Calculate dist array for cache.
    const dists = closedPoints.map((p) => { throw new Error("STUB"); });

    closedPoints.forEach((curr, idx) => {
        throw new Error("STUB");
    });
    path.closePath();

    return path;
  }

  // In rect, draw polygon.
  return appendPolygon(path, points);
}

export const Polygon: SC<PolygonOptions> = (options, context) => {
    throw new Error("STUB");
};

Polygon.props = {
  defaultMarker: 'square',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
