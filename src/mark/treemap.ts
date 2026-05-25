import { deepMix, get, last } from '@antv/util';
import { subObject } from '../utils/helper';
import { CompositionComponent as CC } from '../runtime';
import { TreemapMark } from '../spec';
import { maybeTooltip } from '../utils/mark';
import { treeDataTransform } from '../utils/treeDataTransform';

export type TreemapOptions = Omit<TreemapMark, 'type'>;

// Defaults
const GET_DEFAULT_LAYOUT_OPTIONS = (width, height) => ({
  tile: 'treemapSquarify',
  ratio: 0.5 * (1 + Math.sqrt(5)),
  size: [width, height],
  round: false,
  ignoreParentValue: true,
  padding: 0,
  paddingInner: 0,
  paddingOuter: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  sort: (a, b) => { throw new Error("STUB"); },
  layer: 0,
});

const GET_DEFAULT_OPTIONS = (width, height) => ({
  type: 'rect',
  axis: false,
  encode: {
    x: 'x',
    y: 'y',
    key: 'id',
    color: (d) => { throw new Error("STUB"); },
  },
  scale: {
    x: { domain: [0, width], range: [0, 1] },
    y: { domain: [0, height], range: [0, 1] },
  },
  style: {
    stroke: '#fff',
  },
  state: {
    active: { opacity: 0.6 },
    inactive: { opacity: 1 },
  },
});

const DEFAULT_LABEL_OPTIONS = {
  fontSize: 10,
  text: (d) => { throw new Error("STUB"); },
  position: 'inside',
  fill: '#000',
  textOverflow: 'clip',
  wordWrap: true,
  maxLines: 1,
  wordWrapWidth: (d) => { throw new Error("STUB"); },
  isTreemapLabel: true,
};

const DEFAULT_TOOLTIP_OPTIONS = {
  title: (d) => { throw new Error("STUB"); },
  items: [{ field: 'value' }],
};

const DEFAULT_TOOLTIP_OPTIONS_DRILL = {
  title: (d) => { throw new Error("STUB"); },
  items: [{ field: 'value' }],
};

export const Treemap: CC<TreemapOptions> = (options, context) => {
    throw new Error("STUB");
};

Treemap.props = {};
