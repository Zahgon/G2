import { deepMix } from '@antv/util';
import { CompositeMarkComponent as CC } from '../runtime';
import { SankeyMark } from '../spec';
import { Sankey as SankeyTransform } from '../data/sankey';
import { omitPrefixObject, subObject } from '../utils/helper';
import { subTooltip, maybeAnimation } from '../utils/mark';
import { field, initializeData } from './utils';

const DEFAULT_LAYOUT_OPTIONS = {
  nodeId: (d) => { throw new Error("STUB"); },
  nodeWidth: 0.02,
  nodePadding: 0.02,
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
    stroke: '#000',
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
    fillOpacity: 0.5,
    stroke: undefined,
  },
};

const DEFAULT_LABEL_OPTIONS = {
  textAlign: (d) => { throw new Error("STUB"); },
  position: (d) => { throw new Error("STUB"); },
  fontSize: 10,
};

export type SankeyOptions = Omit<SankeyMark, 'type'>;

/**
 * @todo Add interaction
 * @todo Add source-link color mode
 */
export const Sankey: CC<SankeyOptions> = (options) => {
    throw new Error("STUB");
};

Sankey.props = {};
