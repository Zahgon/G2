import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column, isObject } from './utils/helper';

export type MaybeTupleXOptions = Record<string, never>;

/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeTupleX: TC<MaybeTupleXOptions> = () => {
    throw new Error("STUB");
};

MaybeTupleX.props = {};
