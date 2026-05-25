import { DisplayObject, Rect, Path } from '@antv/g';
import { subObject, omitPrefixObject } from '../utils/helper';
import { selectionOf, pixelsOf } from '../utils/scale';
import { createElement } from '../utils/createElement';
import { G2Element, select, Selection } from '../utils/selection';
import {
  selectG2Elements,
  selectPlotArea,
  createDatumof,
  useState,
  createValueof,
  setCursor,
  brushMousePosition,
  selectFacetG2Elements,
  mergeState,
  selectFacetViews,
} from './utils';

function intersect(bbox1: any, bbox2: any) {
  const [minX1, minY1, maxX1, maxY1] = bbox1;
  const [minX2, minY2, maxX2, maxY2] = bbox2;
  return !(minX2 > maxX1 || maxX2 < minX1 || minY2 > maxY1 || maxY2 < minY1);
}

function normalizeBounds(x, y, x1, y1, extent) {
    throw new Error("STUB");
}

function bboxOf(root: DisplayObject) {
  const { width, height } = root.getBBox();
  return [0, 0, width, height];
}

function applyStyle(selection: Selection, style: Record<string, any>) {
  for (const [key, value] of Object.entries(style)) {
    selection.style(key, value);
  }
}

const ResizableMask = createElement((g) => {
    throw new Error("STUB");
});

export function brush(
  root: DisplayObject,
  {
    brushed = () => {
          throw new Error("STUB");
      },
    brushended = () => {
        throw new Error("STUB");
    },
    brushcreated = () => {
        throw new Error("STUB");
    },
    brushstarted = () => {
        throw new Error("STUB");
    },
    brushupdated = () => {
        throw new Error("STUB");
    },
    extent = bboxOf(root),
    brushRegion = (x, y, x1, y1, extent) => { throw new Error("STUB"); },
    reverse = false,
    fill = '#777',
    fillOpacity = '0.3',
    stroke = '#fff',
    selectedHandles = [
      'handle-n',
      'handle-e',
      'handle-s',
      'handle-w',
      'handle-nw',
      'handle-ne',
      'handle-se',
      'handle-sw',
    ],
    ...style
  }: Record<string, any>,
) {
    throw new Error("STUB");
}

function selectSiblingViews(target, viewInstances, brushKey) {
    throw new Error("STUB");
}

function selectSiblingContainers(target, viewInstances, brushKey) {
    throw new Error("STUB");
}

function selectSiblingOptions(target, viewInstances, brushKey) {
    throw new Error("STUB");
}

/**
 * @todo Brush over view for series view.
 * @todo Test perf.
 */
export function brushHighlight(
  root,
  {
    elements: elementof,
    selectedHandles,
    siblings: siblingsof = (root) => { throw new Error("STUB"); },
    datum,
    brushRegion,
    extent: optionalExtent,
    reverse,
    scale,
    coordinate,
    series = false,
    key = (d) => { throw new Error("STUB"); },
    bboxOf = (root) => {
        throw new Error("STUB");
    },
    state = {},
    emitter,
    ...rest
  },
) {
    throw new Error("STUB");
}

export function BrushHighlight({ facet, brushKey, ...rest }) {
    throw new Error("STUB");
}

// Ensure BrushHighlight gets reapplied when view updates (e.g., after slider filter)
BrushHighlight.props = {
  reapplyWhenUpdate: true,
};
