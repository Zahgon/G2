import { deepMix } from '@antv/util';
import { CompositeMarkComponent as CC, MarkOptions } from '../runtime';
import { ChordMark } from '../spec';
import { subObject } from '../utils/helper';
import { subTooltip, maybeAnimation } from '../utils/mark';
import { Arc } from '../data/arc';
import { ArcOptions } from '../data/utils/arc/types';
import { field, initializeData } from './utils';

const DEFAULT_LAYOUT_OPTIONS: ArcOptions = {
  y: 0,
  thickness: 0.05, // width of the node, (0, 1)
  marginRatio: 0.1, // margin ratio, [0, 1)
  id: (node) => { throw new Error("STUB"); },
  source: (edge) => { throw new Error("STUB"); },
  target: (edge) => { throw new Error("STUB"); },
  sourceWeight: (edge) => { throw new Error("STUB"); },
  targetWeight: (edge) => { throw new Error("STUB"); },
  sortBy: null, // optional, id | weight | frequency | {function}
};

const DEFAULT_NODE_OPTIONS = {
  type: 'polygon',
  axis: false,
  legend: false,
  encode: {
    shape: 'polygon',
    x: 'x',
    y: 'y',
  },
  scale: {
    x: { type: 'identity' },
    y: { type: 'identity' },
  },
  style: {
    opacity: 1,
    fillOpacity: 1,
    lineWidth: 1,
  },
};

const DEFAULT_LINK_OPTIONS = {
  type: 'polygon',
  axis: false,
  legend: false,
  encode: {
    shape: 'ribbon',
    x: 'x',
    y: 'y',
  },
  style: {
    opacity: 0.5,
    lineWidth: 1,
  },
};

const DEFAULT_LABEL_OPTIONS = {
  position: 'outside',
  fontSize: 10,
};

export type ChordOptions = Omit<ChordMark, 'type'>;

export const Chord: CC<ChordOptions> = (options, context) => {
    throw new Error("STUB");
};

Chord.props = {};
