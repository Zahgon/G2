import { deepMix } from '@antv/util';
import { Primitive, TransformComponent as TC } from '../runtime';
import { column, isObject } from './utils/helper';

export type MaybeDefaultYOptions = Record<string, never>;

/**
 * Add a default encode for rangeY
 * when data is just an array
 */
export const MaybeDefaultY: TC<MaybeDefaultYOptions> = () => {
    throw new Error("STUB");
};

MaybeDefaultY.props = {};
