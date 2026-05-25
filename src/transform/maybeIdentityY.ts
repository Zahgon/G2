import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column, columnOf } from './utils/helper';

export type MaybeIdentityYOptions = Record<string, never>;

/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeIdentityY: TC<MaybeIdentityYOptions> = () => {
    throw new Error("STUB");
};

MaybeIdentityY.props = {};
