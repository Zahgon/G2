import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { constant, visualColumn } from './utils/helper';

export type MaybeGradientOptions = Record<string, never>;

/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeGradient: TC<MaybeGradientOptions> = () => {
    throw new Error("STUB");
};

MaybeGradient.props = {};
