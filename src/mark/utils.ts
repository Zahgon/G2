import { Band } from '@antv/scale';
import { Primitive } from '@antv/vendor/d3-array';
import { Vector2 } from '@antv/coord';
import { Scale } from '../runtime/types/component';
import { Channel } from '../runtime';
import { MaybeKey, MaybeTitle, MaybeTooltip } from '../transform';

export type ChannelOptions = {
  shapes?: (string | { (...args: any[]); props?: Record<string, any> })[];
};

export function baseChannels(options: ChannelOptions = {}): Channel[] {
  const { shapes } = options;
  return [
    { name: 'color' },
    { name: 'opacity' },
    { name: 'shape', range: shapes },
    { name: 'enterType' },
    { name: 'enterDelay', scaleKey: 'enter' },
    { name: 'enterDuration', scaleKey: 'enter' },
    { name: 'enterEasing' },
    { name: 'key', scale: 'identity' },
    { name: 'groupKey', scale: 'identity' },
    { name: 'label', scale: 'identity' },
  ];
}

export function baseGeometryChannels(options: ChannelOptions = {}): Channel[] {
  return [...baseChannels(options), { name: 'title', scale: 'identity' }];
}

export function tooltip3d() {
    throw new Error("STUB");
}

export function tooltip2d() {
  return [
    { type: MaybeTitle, channel: 'color' },
    { type: MaybeTooltip, channel: ['x', 'y'] },
  ];
}

export function tooltip1d() {
  return [
    { type: MaybeTitle, channel: 'x' },
    { type: MaybeTooltip, channel: ['y'] },
  ];
}

export function tooltipXd() {
  return [
    { type: MaybeTitle, channel: 'color' },
    { type: MaybeTooltip, channel: ['position'] },
  ];
}

export function baseAnnotationChannels(
  options: ChannelOptions = {},
): Channel[] {
  return baseChannels(options);
}

export function basePreInference() {
  return [{ type: MaybeKey }];
}

export function basePostInference() {
  return [];
}

export function bandWidth(scale: Band, x: any): number {
  return scale.getBandWidth(scale.invert(x));
}

export function createBandOffset(
  scale: Record<string, Scale>,
  value: Record<string, Primitive[]>,
  options: Record<string, any> = {},
): (d: [number, number], i?: number) => [number, number] {
  const { x: X, y: Y, series: S } = value;
  const { x, y, series } = scale;
  const {
    style: {
      bandOffset = series ? 0 : 0.5,
      bandOffsetX = bandOffset,
      bandOffsetY = bandOffset,
    } = {},
  } = options;
  const isBandX = !!x?.getBandWidth;
  const isBandY = !!y?.getBandWidth;
  const isSeries = !!series?.getBandWidth;
  if (!isBandX && !isBandY) return (d) => { throw new Error("STUB"); };
  return (d, i) => {
      throw new Error("STUB");
  };
}

export function p(d) {
  return parseFloat(d) / 100;
}

export function visualMark(index: number[], scale, value, coordinate) {
    throw new Error("STUB");
}

type Encode = 'string' | ((d: any) => any);

export function field(encode: Encode): (d: any) => any {
  return typeof encode === 'function' ? encode : (d) => { throw new Error("STUB"); };
}

export function valueof(data: Record<string, any>[], encode: Encode): any[] {
  return Array.from(data, field(encode));
}

/**
 * Normalizes data input for graph charts (sankey, chord, forceGraph) to ensure consistent format
 * Supports both array input (like other charts) and object input (original format)
 *
 * @param data - Input data, can be array or object with links/nodes properties
 * @returns Normalized data object with links and optional nodes properties
 */
function normalizeGraphData(data: any): { links: any[]; nodes?: any[] } {
  // Handle array input - convert to { links: data } format
  if (Array.isArray(data)) {
    return { links: data };
  }

  // Handle object input - return as is (original format)
  if (data && typeof data === 'object') {
    return {
      links: data.links || [],
      nodes: data.nodes,
    };
  }

  // Handle null/undefined and unexpected input types
  return { links: [] };
}

export function initializeData(
  data: { nodes?: any[]; links: any[] },
  encode: Record<string, Encode>,
): {
  links: { target: string; source: string; value: any }[];
  nodes: { key: string }[];
} {
  const normalizedData = normalizeGraphData(data);
  const {
    source = (d) => { throw new Error("STUB"); },
    target = (d) => { throw new Error("STUB"); },
    value = (d) => { throw new Error("STUB"); },
  } = encode;

  const { links, nodes } = normalizedData;

  // Early return for empty links
  if (!links.length) {
    return {
      links: [],
      nodes: nodes || [],
    };
  }

  const LS = valueof(links, source);
  const LT = valueof(links, target);
  const LV = valueof(links, value);

  return {
    links: links.map((_, i) => { throw new Error("STUB"); }),
    nodes: nodes || Array.from(new Set([...LS, ...LT]), (key) => { throw new Error("STUB"); }),
  };
}
