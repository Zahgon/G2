import { Text, Group, Circle, Path } from '@antv/g';
import { deepMix, isUndefined, find, get } from '@antv/util';
import type { CircleStyleProps, TextStyleProps, PathStyleProps } from '@antv/g';
import { subObject } from '../utils/helper';

import {
  selectPlotArea,
  getPointsR,
  getPointsPath,
  getElements,
  getThetaPath,
} from './utils';

export type ElementPointMoveOptions = {
  selection?: number[];
  precision?: number;
  [key: string]: any;
};

const DEFAULT_STYLE = {
  pointR: 6,
  pointStrokeWidth: 1,
  pointStroke: '#888',
  pointActiveStroke: '#f5f5f5',
  pathStroke: '#888',
  pathLineDash: [3, 4],
  labelFontSize: 12,
  labelFill: '#888',
  labelStroke: '#fff',
  labelLineWidth: 1,
  labelY: -6,
  labelX: 2,
};

// point shape name.
const MOVE_POINT_NAME = 'movePoint';

// Element mouseenter change style.
const elementMouseenter = (e) => {
    throw new Error("STUB");
};

// Element mouseleave change style.
const elementMouseleave = (e) => {
    throw new Error("STUB");
};

// Get the latest overall data based on the individual data changes.
const getNewData = (newChangeData, data, encode) => {
    throw new Error("STUB");
};

// Find mark interval origin element data.
const getIntervalDataRatioTransformFn = (element) => {
    throw new Error("STUB");
};

// Find origin path data.
const getPathDataRatioTransformFn = (element, index) => {
    throw new Error("STUB");
};

// Point shape select change style.
const selectedPointsStyle = (pointsShape, selection, defaultStyle) => {
    throw new Error("STUB");
};

// Create help show message shape.
const createHelpShape = (
  group,
  circle,
  pathStyle,
  labelStyle,
): [Path, Text] => {
    throw new Error("STUB");
};

// Get color scale type.
const getColorType = (scaleColor, color) => {
    throw new Error("STUB");
};

// Get the same direction new point.
const getSamePointPosition = (center, point, target) => {
    throw new Error("STUB");
};

/**
 * ElementPointMove interaction.
 */
export function ElementPointMove(
  elementPointMoveOptions: ElementPointMoveOptions = {},
) {
    throw new Error("STUB");
}
