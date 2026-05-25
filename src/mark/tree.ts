import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { CompositeMarkComponent as CC } from '../runtime';
import { TreeMark } from '../spec';
import {
  Tree as TreeTransform,
  TreeOptions as TreeTransformOptions,
} from '../data/tree';
import { maybeAnimation, subTooltip } from '../utils/mark';

const DEFAULT_LAYOUT_OPTIONS: TreeTransformOptions = {
  sortBy: (a, b) => { throw new Error("STUB"); },
};

const DEFAULT_NODE_OPTIONS = {
  axis: false,
  legend: false,
  type: 'point',
  encode: {
    x: 'x',
    y: 'y',
    size: 2,
    shape: 'point',
  },
};

const DEFAULT_LINK_OPTIONS = {
  type: 'link',
  encode: {
    x: 'x',
    y: 'y',
    shape: 'smooth',
  },
};

const DEFAULT_LABEL_OPTIONS = {
  text: '',
  fontSize: 10,
};

export type TreeOptions = Omit<TreeMark, 'type'>;

export const Tree: CC<TreeOptions> = (options) => {
    throw new Error("STUB");
};

Tree.props = {};
