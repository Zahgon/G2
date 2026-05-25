import type { DisplayObject } from '@antv/g';
import { get, deepMix, pick, keys } from '@antv/util';
import { DrillDownInteraction } from 'spec';
import { select } from '../utils/selection';
import { PLOT_CLASS_NAME } from '../runtime';
import {
  CHILD_NODE_COUNT,
  PARTITION_TYPE,
  PARTITION_TYPE_FIELD,
} from '../mark/partition';

// Get partition element.
const getElementsPartition = (plot: DisplayObject) => {
    throw new Error("STUB");
};

function selectPlotArea(root: DisplayObject): DisplayObject {
  return select(root).select(`.${PLOT_CLASS_NAME}`).node();
}

// Default breadCrumb config.
const DEFAULT_BREADCRUMB = {
  rootText: 'root',
  style: {
    fill: 'rgba(0, 0, 0, 0.6)',
    fontSize: 11,
  },
  y: 4,
  active: {
    fill: 'rgba(0, 0, 0, 0.4)',
  },
};

/**
 * DrillDown interaction for partition visualization.
 * Based on the proven sunburst drilldown implementation.
 */
export function DrillDown(drillDownOptions: DrillDownInteraction = {}) {
    throw new Error("STUB");
}
