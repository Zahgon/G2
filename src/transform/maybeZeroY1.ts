import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { inferredColumn, constant } from './utils/helper';

export type MaybeZeroY1Options = Record<string, never>;

/**
 * Add zero constant encode for y1 channel.
 */
export const MaybeZeroY1: TC<MaybeZeroY1Options> = () => {
    throw new Error("STUB");
};

MaybeZeroY1.props = {};
