import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column } from './utils/helper';

export type MaybeVisualPositionOptions = Record<string, never>;

/**
 * Set visual position with style.x and style.y.
 * The priority of style.x, style.y is higher than data.
 */
export const MaybeVisualPosition: TC<MaybeVisualPositionOptions> = () => {
    throw new Error("STUB");
};

MaybeVisualPosition.props = {};
