import { DisplayObject, Path, AABB } from '@antv/g';
import { path as d3Path } from '@antv/vendor/d3-path';
import { sort, bisector } from '@antv/vendor/d3-array';
import { Vector2 } from '@antv/coord';
import { filter } from '@antv/util';
import type { PathArray } from '@antv/util';
import { G2Element, select } from '../utils/selection';
import { mapObject } from '../utils/array';
import {
  G2ViewDescriptor,
  ELEMENT_CLASS_NAME,
  PLOT_CLASS_NAME,
} from '../runtime';
import { isOrdinalScale } from '../utils/scale';
import { rect } from '../shape/interval/color';
import { isPolar, isTranspose } from '../utils/coordinate';
import { getStyle } from '../utils/style';
import { reorder } from '../shape/utils';
import { angle, angleBetween, sub } from '../utils/vector';
import { traverseElements } from '../utils/traverse-elements';

/**
 * Given root of chart returns elements to be manipulated
 */
export function selectG2Elements(root: DisplayObject): DisplayObject[] {
    throw new Error("STUB");
}

export function selectFacetG2Elements(target, viewInstances): DisplayObject[] {
    throw new Error("STUB");
}

export function selectFacetViews(target, viewInstances) {
    throw new Error("STUB");
}

export function selectPlotArea(root: DisplayObject): DisplayObject {
  return select(root).select(`.${PLOT_CLASS_NAME}`).node();
}

export function bboxOf(element: DisplayObject) {
  // The geometry bounds of a group is empty, so return the render bounds.
  if (element.tagName === 'g') return element.getRenderBounds();

  // Compute the geometry bounds related to the parent.
  const bounds = element.getGeometryBounds();
  const aabb = new AABB();
  aabb.setFromTransformedAABB(bounds, element.getWorldTransform());
  return aabb;
}

export function mousePosition(target, event) {
  const { offsetX, offsetY } = event;
  const bbox = bboxOf(target);
  const {
    min: [x, y],
    max: [x1, y1],
  } = bbox;
  const isOutX = offsetX < x || offsetX > x1;
  const isOutY = offsetY < y || offsetY > y1;
  if (isOutX || isOutY) return null;
  return [offsetX - x, offsetY - y];
}

/**
 * @todo Pass bbox rather than calc it here.
 */
export function brushMousePosition(target, event) {
    throw new Error("STUB");
}

export function boundsOfBrushArea(target) {
    throw new Error("STUB");
}

export function createColorKey(view) {
    throw new Error("STUB");
}

export function createXKey(view) {
    throw new Error("STUB");
}

export function createDatumof(view: G2ViewDescriptor | G2ViewDescriptor[]) {
    throw new Error("STUB");
}

/**
 * A state manager for G2Element.
 * The keys for each state's style start with the state name.
 * { selectedFill, selectedStroke } is for selected state.
 * { unselectedFill, unselectedStroke } is for unselected state.
 */

/**
 * Define state priorities, higher number means higher priority.
 */
const STATE_PRIORITIES = {
  selected: 3,
  unselected: 3,
  active: 2,
  inactive: 2,
  default: 1,
};

/**
 * Define state groups, states in the same group are mutually exclusive.
 */
const STATE_GROUPS = {
  selection: ['selected', 'unselected'],
  highlight: ['active', 'inactive'],
};

const setElementAttribute = (element: DisplayObject, k: string, v: string) => {
    throw new Error("STUB");
};

export function createUseState(
  style: Record<string, any>,
  elements: Element[],
) {
    throw new Error("STUB");
}

export function useState(
  style: Record<string, any> | undefined,
  valueof = (d, element) => { throw new Error("STUB"); },
  setAttribute = setElementAttribute,
) {
    throw new Error("STUB");
}

function isEmptyObject(obj: any): boolean {
    throw new Error("STUB");
}

// A function to generate key for mark each view.
function keyed(viewKey, markKey) {
    throw new Error("STUB");
}

export function mergeState(options, states) {
    throw new Error("STUB");
}

// @todo Support elements from different view.
export function createValueof(elements, datum) {
    throw new Error("STUB");
}

export function renderLink({
  link = false,
  valueof = (d, element) => { throw new Error("STUB"); },
  coordinate,
  ...style
}) {
    throw new Error("STUB");
}

// Apply translate to mock slice out.
export function offsetTransform(element, offset, coordinate) {
    throw new Error("STUB");
}

export function renderBackground({
  document,
  background,
  scale,
  coordinate,
  valueof,
  ...rest
}) {
    throw new Error("STUB");
}

export function setCursor(root, cursor) {
  // @ts-ignore
  const canvas = root.getRootNode().defaultView;
  const dom = canvas.getContextService().getDomElement();
  if (dom?.style) {
    root.cursor = dom.style.cursor;
    dom.style.cursor = cursor;
  }
}

export function restoreCursor(root) {
    throw new Error("STUB");
}

export function selectElementByData(elements, data, datum) {
    throw new Error("STUB");
}

export function getPointsR(point: number[], nextPoint: number[]) {
  return Math.sqrt(
    Math.pow(point[0] - nextPoint[0], 2) + Math.pow(point[1] - nextPoint[1], 2),
  );
}

// Points create path.
export function getPointsPath(points: number[][], isClose = false) {
    throw new Error("STUB");
}

// Get element.
export function getElements(plot) {
    throw new Error("STUB");
}

// Get Theta coordinate round path.
export function getThetaPath(
  center: number[],
  points: number[][],
  isBig = 0,
): PathArray {
    throw new Error("STUB");
}

export function maybeRoot(node, rootOf) {
  if (rootOf(node)) return node;
  let root = node.parent;
  while (root && !rootOf(root)) root = root.parent;
  return root;
}

export const VALID_FIND_BY_X_MARKS = ['interval', 'point', 'density'];
/**
 * @description Create function that can find element by event.
 * @returns Element find function.
 */
export function createFindElementByEvent({
  elementsof,
  root,
  coordinate,
  scale,
  validFindByXMarks = VALID_FIND_BY_X_MARKS,
}) {
    throw new Error("STUB");
}

/**
 * Calculate adaptive sensitivity multiplier (inversely proportional to range).
 *
 * - Smaller range → higher sensitivity
 * - Larger range → lower sensitivity
 *
 * @param range Current range (0-1)
 * @returns Sensitivity multiplier (0.1x ~ 100x)
 */
export function calculateSensitivityMultiplier(range: number): number {
    throw new Error("STUB");
}

/**
 * Check if a value is considered "falsy" for configuration purposes.
 * Returns true for false, null, or undefined values.
 * Uses type predicate for better type safety.
 *
 * @param value The value to check
 * @returns true if the value is falsy (false, null, undefined)
 */
export function isFalsyValue(
  value: unknown,
): value is false | null | undefined {
    throw new Error("STUB");
}

/**
 * Extract channel data with preserved X-Y relationships from all marks in a view.
 * Supports multi-mark scenarios, bin transforms, and array-encoded Y values.
 *
 * @param view The view object containing markState
 * @returns Object containing flattened values for backward compatibility and structured mark data
 */
export function extractChannelValues(view: G2ViewDescriptor): {
  xChannelValues: unknown[];
  yChannelValues: unknown[];
  markDataPairs: Array<{
    markKey: string;
    channelData: { [key: string]: unknown[] };
  }>;
} {
    throw new Error("STUB");
}

/**
 * Check if there are multiple independent axis for a given channel.
 * Multi-axis can be defined by:
 * 1. Explicit `independent: true` in scale configuration
 * 2. Different `scale.key` values for the same channel name
 *
 * @param channel1 - Channel name (x or y)
 * @param marks - Array of marks to check
 * @returns true if multiple independent axis exist
 */
export function hasIndependentXYScale(
  channel1: string,
  marks: readonly unknown[],
): boolean {
    throw new Error("STUB");
}

/**
 * Calculate multi-axis channel domains for slider filtering.
 * When independent scales are detected, generates separate domains for each axis (x1, y1, x2, y2, etc.)
 *
 * @param view The view object containing markState
 * @param initDomain Initial domain configuration
 * @param scaleX X scale instance
 * @param scaleY Y scale instance
 * @param independentInfo Pre-computed independent scale information
 * @returns Extended channelDomain object with multi-axis support
 */
export function calculateMultiAxisChannelDomains(
  view: G2ViewDescriptor,
  initDomain: Record<string, unknown>,
  scaleX: { getOptions(): { domain: unknown } },
  scaleY: { getOptions(): { domain: unknown } },
  independentInfo?: IndependentScaleInfo,
): Record<string, unknown[]> {
    throw new Error("STUB");
}

/**
 * Independent scale information cache interface
 */
export interface IndependentScaleInfo {
  hasIndependentX: boolean;
  hasIndependentY: boolean;
  marksWithSharedX: string[];
  marksWithIndependentX: string[];
  marksWithSharedY: string[];
  marksWithIndependentY: string[];
  markToXScaleMap: Map<string, string>;
  markToYScaleMap: Map<string, string>;
}

/**
 * Calculate all independent scale information in one pass
 * This function performs a single traversal to compute all independent scale related information,
 * avoiding repeated calculations throughout the codebase.
 *
 * Multi-axis detection logic:
 * 1. Explicit independent: scale.y.independent = true
 * 2. Different scale keys: scale.y.key = 'left' vs scale.y.key = 'right'
 *
 * @param view The view object containing markState
 * @returns Complete independent scale information
 */
export function calculateAllIndependentScaleInfo(
  view: G2ViewDescriptor,
): IndependentScaleInfo {
    throw new Error("STUB");
}
