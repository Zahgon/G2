import { Circle, DisplayObject, IElement, Line } from '@antv/g';
import { sort, group, mean, bisector, minIndex } from '@antv/vendor/d3-array';
import { deepMix, lowerFirst, set, throttle, last, isNumber } from '@antv/util';
import { Tooltip as TooltipComponent } from '@antv/component';
import {
  defined,
  groupNameOf,
  subObject,
  dataOf,
  isHeatmap,
} from '../utils/helper';
import { isTranspose, isPolar } from '../utils/coordinate';
import { angle, sub, dist } from '../utils/vector';
import { invert } from '../utils/scale';
import { BBox } from '../runtime';
import { CALLBACK_ITEM_SYMBOL } from '../runtime/transform';
import {
  G2_CLASS_PREFIX,
  g2Selector,
  ANNOTATION_MARKS,
} from '../component/constant';
import {
  selectG2Elements,
  createXKey,
  selectPlotArea,
  mousePosition,
  selectFacetG2Elements,
  createDatumof,
  selectElementByData,
  bboxOf,
  maybeRoot,
} from './utils';

const LOCKED_SYMBOL = 'tooltipLocked';

function getContainer(
  group: IElement,
  mount?: string | HTMLElement,
): HTMLElement {
  if (mount) {
    return typeof mount === 'string' ? document.querySelector(mount) : mount;
  }
  const view = group.ownerDocument?.defaultView;
  if (!view) return;
  const canvas: any = view.getContextService().getDomElement();
  return canvas.parentElement as unknown as HTMLElement;
}

function getBounding(root: DisplayObject): BBox {
    throw new Error("STUB");
}

function getContainerOffset(
  container1: HTMLElement,
  container2: HTMLElement,
): { x: number; y: number } {
    throw new Error("STUB");
}

function createTooltip(
  container: HTMLElement,
  x0,
  y0,
  position,
  enterable,
  bounding,
  containerOffset,
  css = {},
  offset: [number, number] = [10, 10],
) {
    throw new Error("STUB");
}

function showTooltip({
  root,
  data,
  x,
  y,
  render,
  event,
  single,
  position = 'right-bottom',
  enterable = false,
  css,
  mount,
  bounding,
  offset,
}) {
    throw new Error("STUB");
}

function hideTooltip({
  root,
  single,
  emitter,
  nativeEvent = true,
  event = null,
}) {
  if (nativeEvent) {
    emitter.emit('tooltip:hide', { nativeEvent });
  }
  const container = getContainer(root);
  const parent = single ? container : root;
  const { tooltipElement } = parent;
  if (tooltipElement) {
    // Must be clientX, clientY.
    tooltipElement.hide(event?.clientX, event?.clientY);
  }
  hideRuleY(root);
  hideRuleX(root);
  hideMarker(root);
}

function destroyTooltip({ root, single }) {
  const container = getContainer(root);
  const parent = single ? container : root;
  if (!parent) return;
  const { tooltipElement } = parent;
  if (tooltipElement) {
    tooltipElement.destroy();
    parent.tooltipElement = undefined;
  }
  hideRuleY(root);
  hideRuleX(root);
  hideMarker(root);
}

function showUndefined(item) {
    throw new Error("STUB");
}

function heatmapItem(element) {
    throw new Error("STUB");
}

function singleItem(element) {
    throw new Error("STUB");
}

function itemColorOf(element) {
    throw new Error("STUB");
}

function unique(items, key = (d) => { throw new Error("STUB"); }) {
  const valueName = new Map(items.map((d) => { throw new Error("STUB"); }));
  return Array.from(valueName.values());
}

function groupItems(
  elements,
  scale,
  groupName,
  data = elements.map((d) => { throw new Error("STUB"); }),
  theme: Record<string, any> = {},
) {
    throw new Error("STUB");
}

function updateRuleX(
  root,
  points,
  mouse,
  {
    plotWidth,
    plotHeight,
    mainWidth,
    mainHeight,
    startX,
    startY,
    transposed,
    polar,
    insetLeft,
    insetTop,
    ...rest
  },
) {
    throw new Error("STUB");
}

function updateRuleY(
  root,
  points,
  {
    plotWidth,
    plotHeight,
    mainWidth,
    mainHeight,
    startX,
    startY,
    transposed,
    polar,
    insetLeft,
    insetTop,
    ...rest
  },
) {
    throw new Error("STUB");
}

function hideRuleY(root) {
  if (root.ruleY) {
    root.ruleY.remove();
    root.ruleY = undefined;
  }
}

function hideRuleX(root) {
  if (root.ruleX) {
    root.ruleX.remove();
    root.ruleX = undefined;
  }
}

function updateMarker(root, { data, style, theme }) {
    throw new Error("STUB");
}

function hideMarker(root) {
  if (root.markers) {
    root.markers.forEach((d) => { throw new Error("STUB"); });
    root.markers = [];
  }
}

function interactionKeyof(markState, key) {
    throw new Error("STUB");
}

export function maybeValue(specified, defaults) {
  return specified === undefined ? defaults : specified;
}

function isEmptyTooltipData(data) {
    throw new Error("STUB");
}

function hasSeries(markState): boolean {
    throw new Error("STUB");
}

function normalizedPosition(coordinate, position) {
  const {
    innerWidth,
    innerHeight,
    marginLeft,
    paddingLeft,
    insetLeft,
    marginTop,
    paddingTop,
    insetTop,
  } = coordinate.getOptions();
  return {
    x: (position.x - marginLeft - paddingLeft - insetLeft) / innerWidth,
    y: (position.y - marginTop - paddingTop - insetTop) / innerHeight,
  };
}

/**
 * Determine whether the band widths occupied by different categories are the same.
 */
function equalBandWidth(scale) {
  const { x } = scale;
  if (!x || !x.valueBandWidth) return true;
  const { valueBandWidth } = x;
  if (isNumber(valueBandWidth)) return true;
  return new Set(valueBandWidth.values()).size === 1;
}

/**
 * Get the index of the element closest to the abstractX
 */
function findNearestElementIndex(scale, abstractX): number {
  const { adjustedRange, valueBandWidth, valueStep } = scale;
  const values: number[] = Array.from(valueBandWidth.values());
  const steps: number[] = Array.from(valueStep.values());
  const ranges = adjustedRange.map((v, i) => {
      throw new Error("STUB");
  });
  const index = ranges.findIndex(
    ([start, end]) => { throw new Error("STUB"); },
  );
  if (index !== -1) return index;
  return abstractX > 0.5 ? adjustedRange.length - 1 : 0;
}

/**
 * Finds a single element based on the mouse event in a non-series context (e.g., single item tooltip).
 * @param root - The root display object of the chart.
 * @param event - The mouse event object (e.g., pointermove, pointerdown).
 * @param elements - Array of chart elements to search within.
 * @param coordinate - The coordinate system of the chart (e.g., Cartesian, polar).
 * @param scale - The scale configurations (e.g., x, series scales).
 * @param shared - Whether the tooltip is shared among multiple elements (e.g., grouped bars).
 * @returns The matched display object or `undefined` if no element is found.
 * @description
 * - Handles bar charts by sorting elements and using bisector search for efficient lookup.
 * - For non-bar charts, directly finds the target element from the event's target.
 * - Adjusts for bar spacing in grouped charts when `shared` is false.
 */
export function findSingleElement({
  root,
  event,
  elements = [],
  coordinate,
  scale,
  shared,
}): DisplayObject | undefined {
  const inInterval = (d) => { throw new Error("STUB"); };
  const inAnnotation = (d) => ANNOTATION_MARKS.includes(d.markType);
  const markEls = elements.filter((d) => { throw new Error("STUB"); });
  const isBar =
    markEls.length > 0 && markEls.every(inInterval) && !isPolar(coordinate);
  const scaleX = scale.x;
  const isEqualWidth = equalBandWidth(scale);
  const scaleSeries = scale.series;
  const bandWidth = scaleX?.getBandWidth?.() ?? 0;
  const xof =
    scaleSeries && scaleSeries.valueBandWidth
      ? (d) => {
          throw new Error("STUB");
      }
      : (d) => { throw new Error("STUB"); };

  // Sort for bisector search.
  if (isBar) markEls.sort((a, b) => { throw new Error("STUB"); });
  const findElementByTarget = (event) => {
    const { target = last(elements) } = event;
    return maybeRoot(target, (node) => {
        throw new Error("STUB");
    });
  };

  const element = isBar
    ? (event) => {
        throw new Error("STUB");
    }
    : findElementByTarget;

  return element(event);
}

/**
 * Finds series-related elements and data based on the mouse event for series tooltips.
 * @param root - The root display object of the chart.
 * @param event - The mouse event object (e.g., pointermove, pointerdown).
 * @param elements - Array of chart elements to search within.
 * @param coordinate - The coordinate system of the chart (e.g., Cartesian, polar).
 * @param scale - The scale configurations (e.g., x, series scales).
 * @param startX - The starting X position of the plot area.
 * @param startY - The starting Y position of the plot area.
 * @returns An object containing:
 * - `selectedElements`: Matched display objects (series and item elements).
 * - `selectedData`: Corresponding data records of the selected elements.
 * - `filteredSeriesData`: Filtered series data closest to the mouse focus.
 * - `abstractX`: A function to convert mouse coordinates to abstract X values.
 * @description
 * - Splits elements into series and item elements for targeted searching.
 * - Handles bar charts and band scales using bisector search and coordinate inversion.
 * - Sorts elements to ensure correct visual ordering (top-to-bottom or right-to-left in transposed mode).
 * - Filters and groups data to provide accurate tooltip information for series.
 */
export function findSeriesElement({
  root,
  event,
  elements,
  coordinate,
  scale,
  startX,
  startY,
}): {
  selectedElements: DisplayObject[];
  selectedData: Record<string, any>[];
  filteredSeriesData: any[];
  abstractX: (number) => number;
} {
  const transposed = isTranspose(coordinate);

  // Split elements into series elements and item elements.
  const seriesElements = [];
  const itemElements = [];
  for (const element of elements) {
    if (ANNOTATION_MARKS.includes(element.markType)) continue;
    const { __data__: data } = element;
    const { seriesX, title, items } = data;
    if (seriesX) seriesElements.push(element);
    else if (title || items) itemElements.push(element);
  }
  const inInterval = (d) => { throw new Error("STUB"); };
  const isBar =
    itemElements.length &&
    itemElements.every(inInterval) &&
    !isPolar(coordinate);
  const xof = (d) => d.__data__.x;

  // For band scale x, find the closest series element to focus,
  // useful for interval + line mark.
  const isBandScale = !!scale.x.getBandWidth;
  const closest = isBandScale && itemElements.length > 0;

  // Sorted elements from top to bottom visually,
  // or from right to left in transpose coordinate.
  seriesElements.sort((a, b) => {
      throw new Error("STUB");
  });

  const extent = (d) => {
    const index = transposed ? 1 : 0;
    const { min, max } = d.getLocalBounds();
    return sort([min[index], max[index]]);
  };

  // Sort itemElements for bisector search.
  if (isBar) itemElements.sort((a, b) => { throw new Error("STUB"); });
  else {
    itemElements.sort((a, b) => {
        throw new Error("STUB");
    });
  }

  // Get sortedIndex and X for each series elements
  const elementSortedX = new Map(
    seriesElements.map((element) => {
        throw new Error("STUB");
    }),
  );

  const { x: scaleX } = scale;

  // Apply offset for band scale x.
  const offsetX = scaleX?.getBandWidth ? scaleX.getBandWidth() / 2 : 0;

  const abstractX = (focus) => {
    const [normalizedX] = coordinate.invert(focus);
    return normalizedX - offsetX;
  };

  const indexByFocus = (event, focus, I, X) => {
    // _x is from emit event, to find the right element.
    const { _x } = event;
    const finalX = _x !== undefined ? scaleX.map(_x) : abstractX(focus);
    const DX = X.filter(defined);
    const [minX, maxX] = sort([DX[0], DX[DX.length - 1]]);
    // If only has one element(minX == maxX), show tooltip when hover whole chart
    const isOnlyOneElement = minX === maxX;

    // If closest is true, always find at least one element.
    // Otherwise, skip element out of plot area.
    if (!closest && (finalX < minX || finalX > maxX) && !isOnlyOneElement)
      return null;
    const search = bisector((i) => { throw new Error("STUB"); }).center;
    const i = search(I, finalX);
    return I[i];
  };

  const elementsByFocus = isBar
    ? (focus, elements) => {
        throw new Error("STUB");
    }
    : (focus, elements) => {
        throw new Error("STUB");
    };

  const seriesData = (element, index) => {
    const { __data__: data } = element;
    return Object.fromEntries(
      Object.entries(data)
        .filter(([key]) => { throw new Error("STUB"); })
        .map(([key, V]) => {
            throw new Error("STUB");
        }),
    );
  };
  const mouse = mousePosition(root, event);
  if (!mouse) return;
  const focus = [mouse[0] - startX, mouse[1] - startY];
  if (!focus) return;
  // Get selected item element.
  const selectedItems = elementsByFocus(focus, itemElements);

  // Get selected data item from both series element and item element.
  const selectedSeriesElements = [];
  const selectedSeriesData = [];
  for (const element of seriesElements) {
    const [sortedIndex, X] = elementSortedX.get(element);
    const index = indexByFocus(event, focus, sortedIndex, X);
    if (index !== null) {
      selectedSeriesElements.push(element);
      const d = seriesData(element, index);
      const { x, y } = d;
      const p = coordinate.map([(x || 0) + offsetX, y || 0]);
      selectedSeriesData.push([{ ...d, element }, p] as const);
    }
  }

  // Filter selectedSeriesData with different x,
  // make sure there is only one x closest to focusX.
  const SX = Array.from(new Set(selectedSeriesData.map((d) => { throw new Error("STUB"); })));
  const closestX = SX[minIndex(SX, (x) => { throw new Error("STUB"); })];
  const filteredSeriesData = selectedSeriesData.filter(
    (d) => { throw new Error("STUB"); },
  );

  const selectedData = [
    ...filteredSeriesData.map((d) => { throw new Error("STUB"); }),
    ...selectedItems.map((d) => { throw new Error("STUB"); }),
  ];

  // Get the displayed tooltip data.
  const selectedElements = [...selectedSeriesElements, ...selectedItems];

  return { selectedElements, selectedData, filteredSeriesData, abstractX };
}

/**
 * Show tooltip for series item.
 */
export function seriesTooltip(
  root: DisplayObject,
  {
    elements: elementsof,
    sort: sortFunction,
    filter: filterFunction,
    scale,
    coordinate,
    crosshairs,
    crosshairsX,
    crosshairsY,
    render,
    groupName,
    emitter,
    wait = 50,
    leading = true,
    trailing = false,
    startX = 0,
    startY = 0,
    body = true,
    single = true,
    position,
    enterable,
    mount,
    bounding,
    theme,
    offset,
    disableNative = false,
    marker = true,
    preserve = false,
    style: _style = {},
    css = {},
    clickLock = false,
    disableAutoHide = false,
    ...rest
  }: Record<string, any>,
) {
    throw new Error("STUB");
}

/**
 * Show tooltip for non-series item.
 */
export function tooltip(
  root: DisplayObject,
  {
    elements: elementsof,
    coordinate,
    scale,
    render,
    groupName,
    sort: sortFunction,
    filter: filterFunction,
    emitter,
    wait = 50,
    leading = true,
    trailing = false,
    groupKey = (d) => { throw new Error("STUB"); }, // group elements by specified key
    single = true,
    position,
    enterable,
    datum,
    view,
    mount,
    bounding,
    theme,
    offset,
    shared = false,
    body = true,
    disableNative = false,
    preserve = false,
    css = {},
    clickLock = false,
    disableAutoHide = false,
  }: Record<string, any>,
) {
    throw new Error("STUB");
}

export function Tooltip(options) {
    throw new Error("STUB");
}

Tooltip.props = {
  reapplyWhenUpdate: true,
};
