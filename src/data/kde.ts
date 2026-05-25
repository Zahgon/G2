import pdf from 'pdfast';
import { group } from '@antv/vendor/d3-array';
import { DataComponent as DC } from '../runtime';
import { KDEDataTransform } from '../spec';

export type KDEOptions = Omit<KDEDataTransform, 'type'>;

export function defined(d: any): boolean {
  return d !== undefined && d !== null && !Number.isNaN(d);
}

/**
 * Kernel Density Estimation base on [pdfast](https://www.npmjs.com/package/pdfast),
 * generating probability density function (pdf) using triangular kernel,
 * optimized to run in O(N + K).
 */
export const KDE: DC<KDEOptions> = (options) => {
    throw new Error("STUB");
};

KDE.props = {};
