import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { JitterXTransform } from '../spec';
import { column, columnOf } from './utils/helper';
import { rangeOf, interpolate } from './jitter';

export type JitterXOptions = Omit<JitterXTransform, 'type'>;

/**
 * The JitterX transform produce dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
export const JitterX: TC<JitterXOptions> = (options = {}) => {
    throw new Error("STUB");
};

JitterX.props = {};
