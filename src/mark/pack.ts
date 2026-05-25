import { deepMix, isArray } from '@antv/util';
import {
  stratify,
  hierarchy,
  pack as packLayout,
} from '@antv/vendor/d3-hierarchy';
import { CompositionComponent as CC } from '../runtime';
import { subObject } from '../utils/helper';
import { PackMark } from '../spec';
import { maybeTooltip } from '../utils/mark';
import { field } from './utils';

const GET_DEFAULT_LAYOUT_OPTIONS = (width, height) => ({
  size: [width, height],
  padding: 0,
  sort: (a, b) => { throw new Error("STUB"); },
});

const GET_DEFAULT_OPTIONS = (width, height, encode) => ({
  type: 'point',
  axis: false,
  legend: false,
  scale: {
    x: { domain: [0, width] },
    y: { domain: [0, height] },
    size: { type: 'identity' },
  },
  encode: {
    x: 'x',
    y: 'y',
    size: 'r',
    shape: 'point',
  },
  style: {
    fill: !encode.color ? (d) => { throw new Error("STUB"); } : undefined,
    stroke: !encode.color ? (d) => { throw new Error("STUB"); } : undefined,
  },
});

const DEFAULT_LABEL_OPTIONS = {
  text: '',
  position: 'inside',
  textOverflow: 'clip',
  wordWrap: true,
  maxLines: 1,
  wordWrapWidth: (d) => { throw new Error("STUB"); },
};
const DEFAULT_TOOLTIP_OPTIONS = {
  title: (d) => { throw new Error("STUB"); },
  items: [{ field: 'value' }],
};

type PackLayout = {
  size?: [number, number];
  padding?: number;
  sort?(a: any, b: any): number;
  // @todo
  path?: any;
};

const dataTransform = (data, layout: PackLayout, encode) => {
  const { value } = encode;
  const root = isArray(data)
    ? stratify().path(layout.path)(data)
    : hierarchy(data);
  value ? root.sum((d) => { throw new Error("STUB"); }).sort(layout.sort) : root.count();
  // @ts-ignore
  packLayout().size(layout.size).padding(layout.padding)(root);
  return root.descendants();
};

export type PackOptions = Omit<PackMark, 'type'>;

export const Pack: CC<PackOptions> = (markOptions, context) => {
    throw new Error("STUB");
};

Pack.props = {};
