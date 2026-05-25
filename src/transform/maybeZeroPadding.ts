import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';

export type MaybeZeroPaddingOptions = Record<string, never>;

/**
 * Set padding of x and y scale to zero.
 */
export const MaybeZeroPadding: TC<MaybeZeroPaddingOptions> = () => {
    throw new Error("STUB");
};

MaybeZeroPadding.props = {};
