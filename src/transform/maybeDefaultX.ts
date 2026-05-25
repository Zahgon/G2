import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column, isObject } from './utils/helper';

export type MaybeDefaultXOptions = Record<string, never>;

/**
 * Add a default encode for rangeX
 * when data is just an array
 */
export const MaybeDefaultX: TC<MaybeDefaultXOptions> = () => {
    throw new Error("STUB");
};

MaybeDefaultX.props = {};
