import { Band } from '@antv/scale';
import { deepMix } from '@antv/util';
import { Primitive, TransformComponent as TC } from '../runtime';
import { JitterTransform } from '../spec';
import { column, columnOf } from './utils/helper';
import { domainOf } from './utils/order';

export type JitterOptions = Omit<JitterTransform, 'type'>;

export function rangeOf(
  value: Primitive[],
  scaleOptions: Record<string, any>,
  padding: number,
): [number, number] {
  if (value === null) return [-0.5, 0.5];
  const domain = domainOf(value, scaleOptions);
  const scale = new Band({ domain, range: [0, 1], padding });
  const step = scale.getBandWidth();
  return [-step / 2, step / 2];
}

export function interpolate(t: number, a: number, b: number): number {
  return a * (1 - t) + b * t;
}

/**
 * The jitter transform produce dx and dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
export const Jitter: TC<JitterOptions> = (options = {}) => {
    throw new Error("STUB");
};

Jitter.props = {};
