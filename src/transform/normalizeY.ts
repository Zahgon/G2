import { deepMix } from '@antv/util';
import { mean, deviation, median, sum, max, min } from '@antv/vendor/d3-array';
import { isUnset } from '../utils/helper';
import { TransformComponent as TC } from '../runtime';
import { NormalizeYTransform } from '../spec';
import { column, columnOf } from './utils/helper';
import { createGroups } from './utils/order';

export type NormalizeYOptions = Omit<NormalizeYTransform, 'type'>;

function normalizeBasis(basis: NormalizeYOptions['basis']) {
  if (typeof basis === 'function') return basis;
  const registry = {
    min: (I, Y) => { throw new Error("STUB"); },
    max: (I, Y) => { throw new Error("STUB"); },
    first: (I, Y) => { throw new Error("STUB"); },
    last: (I, Y) => { throw new Error("STUB"); },
    mean: (I, Y) => { throw new Error("STUB"); },
    median: (I, Y) => { throw new Error("STUB"); },
    sum: (I, Y) => { throw new Error("STUB"); },
    deviation: (I, Y) => { throw new Error("STUB"); },
  };
  return registry[basis] || max;
}

/**
 * Group marks into series by specified channels, and then transform
 * each series's value, say to transform them relative to some basis
 * to apply a moving average.
 */
export const NormalizeY: TC<NormalizeYOptions> = (options = {}) => {
    throw new Error("STUB");
};

NormalizeY.props = {};
