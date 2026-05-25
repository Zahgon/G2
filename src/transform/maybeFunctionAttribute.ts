import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';

export type MaybeFunctionAttributeOptions = Record<string, never>;

/**
 * Mark functional attribute constant.
 */
export const MaybeFunctionAttribute: TC<MaybeFunctionAttributeOptions> = () => {
    throw new Error("STUB");
};

MaybeFunctionAttribute.props = {};
