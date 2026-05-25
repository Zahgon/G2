import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { DiffYTransform } from '../spec';
import { column, columnOf } from './utils/helper';
import { createGroups } from './utils/order';

export type DiffYOptions = Omit<DiffYTransform, 'type'>;

/**
 * The DiffY transform apply offset for y0 channels.
 * Keep y unchanged, set y1 = max(otherY), if y1 > y, remove the data.
 */
export const DiffY: TC<DiffYOptions> = (options = {}) => {
    throw new Error("STUB");
};

DiffY.props = {};
