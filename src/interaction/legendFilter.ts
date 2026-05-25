import { DisplayObject } from '@antv/g';
import { deepMix, throttle } from '@antv/util';
import { Base } from '@antv/scale';
import { subObject } from '../utils/helper';
import { ANNOTATION_MARKS } from '../component/constant';
import { useState, setCursor, restoreCursor } from './utils';

export const CATEGORY_LEGEND_CLASS_NAME = 'legend-category';
export const CATEGORY_LEGEND_HTML_CLASS_NAME = 'legend-html-category';

export const CONTINUOUS_LEGEND_CLASS_NAME = 'legend-continuous';

export const LEGEND_ITEMS_CLASS_NAME = 'items-item';

export const LEGEND_MAKER_CLASS_NAME = 'legend-category-item-marker';

export const LEGEND_LABEL_CLASS_NAME = 'legend-category-item-label';

export const LEGEND_FOCUS_ICON_CLASS_NAME = 'legend-category-item-focus-group';

export function markerOf(item) {
    throw new Error("STUB");
}

export function labelOf(item) {
    throw new Error("STUB");
}

export function focusIconOf(item) {
    throw new Error("STUB");
}

export function itemsOf(root) {
  return root.getElementsByClassName(LEGEND_ITEMS_CLASS_NAME);
}

export function legendsOf(root) {
    throw new Error("STUB");
}
export function legendsHtmlOf(root) {
    throw new Error("STUB");
}

export function legendsContinuousOf(root) {
    throw new Error("STUB");
}

export function legendClearSetState(root, setState) {
    throw new Error("STUB");
}

export function dataOf(root) {
  // legend -> layout -> container
  let parent = root.parentNode;
  while (parent && !parent.__data__) {
    parent = parent.parentNode;
  }
  return parent.__data__;
}

export function attributesOf(root) {
    throw new Error("STUB");
}

function getScaleByMarkKey(
  scale: Record<string, Base<any>>,
  markKey: string,
  channelName: string,
) {
    throw new Error("STUB");
}

function legendFilterOrdinal(
  root: DisplayObject,
  {
    legends, // given the root of chart returns legends to be manipulated
    marker: markerOf, // given the legend returns the marker
    label: labelOf, // given the legend returns the label
    datum, // given the legend returns the value
    filter, // invoke when dispatch filter event,
    defaultSelect,
    emitter,
    channel,
    state = {} as Record<string, any>, // state options
  },
) {
    throw new Error("STUB");
}

function legendFilterOrdinalHtml(
  root: DisplayObject,
  { domain, filter, defaultSelect, emitter, channel },
) {
    throw new Error("STUB");
}

function legendFilterContinuous(_, { legend, filter, emitter, channel }) {
    throw new Error("STUB");
}

async function filterView(
  context, // View instance,
  {
    legend, // Legend instance.
    channel, // Filter Channel.
    value, // Filtered Values.
    ordinal, // Data type of the legend.
    channels, // Channels for this legend.
    allChannels, // Channels for all legends.
    facet = false, // For facet.
  },
) {
    throw new Error("STUB");
}

function filterFacets(facets, options) {
    throw new Error("STUB");
}

export function LegendFilter() {
    throw new Error("STUB");
}
