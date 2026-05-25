import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column, isObject } from './utils/helper';

export type MaybeTupleYOptions = Record<string, never>;

/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeTupleY: TC<MaybeTupleYOptions> = () => {
    throw new Error("STUB");
};

MaybeTupleY.props = {};
