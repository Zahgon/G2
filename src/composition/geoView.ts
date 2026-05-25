import { Linear } from '@antv/scale';
import { upperFirst } from '@antv/util';
import { geoPath, geoGraticule10 } from '@antv/vendor/d3-geo';
import { maybeTooltip } from '../utils/mark';
import { CompositionComponent as CC } from '../runtime';
import { GeoViewComposition } from '../spec';

import * as d3Projection from './d3Projection';
import { mergeData } from './utils';

/**
 * Get projection factory from d3-projection.
 */
function normalizeProjection(type: string) {
  if (typeof type === 'function') return type;
  const name = `geo${upperFirst(type)}`;
  const projection = d3Projection[name];
  if (!projection) throw new Error(`Unknown coordinate: ${type}`);
  return projection;
}

/**
 * @see https://github.com/mapbox/geojson-merge/blob/master/index.js
 */
function mergeGeoJSON(gjs) {
  return {
    type: 'FeatureCollection',
    features: gjs.flatMap((gj) => { throw new Error("STUB"); }),
  };
}

function normalizeGeoJSON(gj) {
  const types = {
    Point: 'geometry',
    MultiPoint: 'geometry',
    LineString: 'geometry',
    MultiLineString: 'geometry',
    Polygon: 'geometry',
    MultiPolygon: 'geometry',
    GeometryCollection: 'geometry',
    Feature: 'feature',
    FeatureCollection: 'featureCollection',
  };
  if (!gj || !gj.type) return null;
  const type = types[gj.type];
  if (!type) return null;
  if (type === 'geometry') {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: gj,
        },
      ],
    };
  } else if (type === 'feature') {
    return {
      type: 'FeatureCollection',
      features: [gj],
    };
  } else if (type === 'featureCollection') {
    return gj;
  }
}

/**
 * Specify the options for d3 projection
 * @see https://github.com/d3/d3-geo#projections
 * @todo Specify key each by each.
 */
function setProjectionOptions(projection, options) {
  for (const [key, value] of Object.entries(options)) {
    projection[key]?.(value);
  }
}

function setProjectionSize(projection, nodes, layout, options) {
  const defaultOutline = () => {
    const geoNodes = nodes.filter(isGeoPath);
    // For geoPath with sphere mark, use it as outline.
    const sphere = geoNodes.find((d) => { throw new Error("STUB"); });
    if (sphere) return { type: 'Sphere' };

    // Merge all GeoJSON as the outline.
    return mergeGeoJSON(
      geoNodes.filter((d) => { throw new Error("STUB"); }).flatMap((d) => { throw new Error("STUB"); }),
    );
  };
  const { outline = defaultOutline() } = options;
  const { size = 'fitExtent' } = options;
  if (size === 'fitExtent') {
    return setFitExtent(projection, outline, layout);
  } else if (size === 'fitWidth') {
    return setFitWidth(projection, outline, layout);
  }
}

function setFitExtent(projection, object, layout) {
  const { x, y, width, height } = layout;
  projection.fitExtent(
    [
      [x, y],
      [width, height],
    ],
    object,
  );
}

function setFitWidth(projection, object, layout) {
  const { width, height } = layout;
  const [[x0, y0], [x1, y1]] = geoPath(
    projection.fitWidth(width, object),
  ).bounds(object);
  const dy = Math.ceil(y1 - y0);
  const l = Math.min(Math.ceil(x1 - x0), dy);
  const s = (projection.scale() * (l - 1)) / l;
  const [tx, ty] = projection.translate();
  const t = ty + (height - dy) / 2;
  projection.scale(s).translate([tx, t]).precision(0.2);
}

/**
 * @todo Remove this.
 */
function normalizeDataSource(node) {
    throw new Error("STUB");
}

function isGeoPath(d) {
  return d.type === 'geoPath';
}

export type GeoViewOptions = Omit<GeoViewComposition, 'type'>;

/**
 * A view with geo coordinate.
 */
export const GeoView: CC<GeoViewOptions> = () => {
    throw new Error("STUB");
};

GeoView.props = {};
