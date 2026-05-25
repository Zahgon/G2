import { deepMix } from '@antv/util';
import { extent } from '@antv/vendor/d3-array';
import { TransformComponent as TC } from '../runtime';
import { SymmetryYTransform } from '../spec';
import { columnOf, column } from './utils/helper';
import { createGroups } from './utils/order';

export type SymmetryYOptions = Omit<SymmetryYTransform, 'type'>;

/**
 * The SymmetryY transform apply offset for y channels, say to transform
 * them to be symmetry.
 */
export const SymmetryY: TC<SymmetryYOptions> = (options = {}) => {
    throw new Error("STUB");
};

SymmetryY.props = {};
