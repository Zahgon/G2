import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column } from './utils/helper';

export type MaybeKeyOptions = Record<string, never>;

/**
 * Infer key for every element.
 */
export const MaybeKey: TC<MaybeKeyOptions> = () => {
    throw new Error("STUB");
};

MaybeKey.props = {};
