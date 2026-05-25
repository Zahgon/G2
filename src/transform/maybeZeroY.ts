import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { inferredColumn, constant } from './utils/helper';

export type MaybeZeroYOptions = Record<string, never>;

/**
 * Add zero constant encode for y channel.
 */
export const MaybeZeroY: TC<MaybeZeroYOptions> = () => {
    throw new Error("STUB");
};

MaybeZeroY.props = {};
