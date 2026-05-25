import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { inferredColumn, constant } from './utils/helper';

export type MaybeZeroXOptions = Record<string, never>;

/**
 * Add zero constant encode for x channel.
 * This is useful for interval geometry.
 */
export const MaybeZeroX: TC<MaybeZeroXOptions> = () => {
    throw new Error("STUB");
};

MaybeZeroX.props = {};
