import { Text, Group, Shape } from '@antv/g';
import { get, deepMix, pick, keys, find, size, last } from '@antv/util';
import type { DisplayObject } from '@antv/g';
import { subObject } from '../utils/helper';
import { PLOT_CLASS_NAME } from '../runtime';
import { select } from '../utils/selection';
import { Node, treeDataTransform } from '../utils/treeDataTransform';
import { legendClearSetState } from './legendFilter';
import { getElements } from './utils';

function selectPlotArea(root: DisplayObject): DisplayObject {
  return select(root).select(`.${PLOT_CLASS_NAME}`).node();
}

export type DrillDownOptions = {
  originData?: Node<any>[];
  layout?: any;
  [key: string]: any;
};

// Default breadCrumb config.
const DEFAULT_BREADCRUMB_STYLE = {
  breadCrumbFill: 'rgba(0, 0, 0, 0.85)',
  breadCrumbFontSize: 12,
  breadCrumbY: 12,
  activeFill: 'rgba(0, 0, 0, 0.5)',
};

/**
 * TreemapDrillDown interaction.
 */
export function TreemapDrillDown(drillDownOptions: DrillDownOptions = {}) {
    throw new Error("STUB");
}
