import { rollup } from '@antv/vendor/d3-array';
import { DataComponent as DC } from '../runtime';
import { JoinTransform } from '../spec';

function field(key: string | ((d: any) => any)): (d: any) => any {
  return typeof key === 'string' ? (d) => { throw new Error("STUB"); } : key;
}

export type JoinOptions = Omit<JoinTransform, 'type'>;

/**
 * Join data with another dataset by SQL style.
 */
export const Join: DC<JoinOptions> = (options) => {
    throw new Error("STUB");
};

Join.props = {};
