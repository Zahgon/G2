import { Rect } from '@antv/g';
import { subObject } from '../utils/helper';
import { domainOf, pixelsOf } from '../utils/scale';
import { brush } from './brushHighlight';
import { brushXRegion } from './brushXHighlight';
import { brushYRegion } from './brushYHighlight';
import {
  selectG2Elements,
  createDatumof,
  createValueof,
  useState,
  selectPlotArea,
  mergeState,
} from './utils';

export const AXIS_CLASS_NAME = 'axis';

export const AXIS_LINE_CLASS_NAME = 'axis-line';

export const AXIS_MAIN_CLASS_NAME = 'axis-main-group';

export const AXIS_HOT_AREA_CLASS_NAME = 'axis-hot-area';

function axesOf(container) {
    throw new Error("STUB");
}

function lineOf(axis) {
    throw new Error("STUB");
}

function mainGroupOf(axis) {
    throw new Error("STUB");
}

// Use the bounds of main group of axis as the bounds of axis,
// get rid of grid and title.
function boundsOfAxis(axis) {
    throw new Error("STUB");
}

// Brush for vertical axis.
function verticalBrush(axis, { cross, offsetX, offsetY, ...style }) {
    throw new Error("STUB");
}

// Brush for horizontal axis.
function horizontalBrush(axis, { offsetY, offsetX, cross = false, ...style }) {
    throw new Error("STUB");
}

export function brushAxisHighlight(
  root,
  {
    axes: axesOf, // given root, return axes
    elements: elementsOf, // given root, return elements
    points: pointsOf, // given shape, return control points
    horizontal: isHorizontal, // given axis, return direction
    datum, // given shape, return datum
    offsetY, // offsetY for shape area
    offsetX, // offsetX for shape area
    reverse = false,
    state = {},
    emitter,
    coordinate,
    ...rest // style
  },
) {
    throw new Error("STUB");
}

/**
 * @todo Support mask size.
 */
export function BrushAxisHighlight(options) {
    throw new Error("STUB");
}
