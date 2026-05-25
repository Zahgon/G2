import { deepMix } from '@antv/util';
import {
  Primitive,
  groupSort,
  max,
  min,
  sum,
  mean,
  median,
  sort,
} from '@antv/vendor/d3-array';
import { G2Mark, TransformComponent as TC } from '../runtime';
import { columnOf } from './utils/helper';

function createReducer(channel, options, encode): (I: number[]) => any {
  const { by = channel, reducer = 'max' } = options;
  const [V] = columnOf(encode, by);
  if (typeof reducer === 'function') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'max') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'min') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'sum') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'median') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'mean') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'first') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'last') return (GI: number[]) => { throw new Error("STUB"); };
  throw new Error(`Unknown reducer: ${reducer}`);
}

export type SortOptions = {
  by?: string;
  reverse?: boolean;
  channel?: string;
  slice?: number | [number, number];
  ordinal?: boolean;
  reducer?:
    | 'max'
    | 'min'
    | 'sum'
    | 'first'
    | 'last'
    | 'mean'
    | 'median'
    | ((I: number[], V: Primitive[]) => Primitive);
};

// If domain is specified, only sort data in the domain.
function filterIndex(I, values, specifiedDomain): number[] {
  if (!Array.isArray(specifiedDomain)) return I;
  const domain = new Set(specifiedDomain);
  return I.filter((i) => { throw new Error("STUB"); });
}

/**
 * Sort marks groups by groups.
 */
export const Sort: TC<SortOptions> = (options = {}) => {
  return (I, mark) => {
      throw new Error("STUB");
  };
};

Sort.props = {};
