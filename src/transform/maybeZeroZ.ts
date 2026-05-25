import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { inferredColumn, constant } from './utils/helper';

export type MaybeZeroZOptions = Record<string, never>;

/**
 * Add zero constant encode for z channel.
 */
export const MaybeZeroZ: TC<MaybeZeroZOptions> = () => {
    throw new Error("STUB");
};

MaybeZeroZ.props = {};
