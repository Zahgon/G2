import { TransformComponent as TC } from '../runtime';
import { SortYTransform } from '../spec';
import { Sort } from './sort';

export type SortYOptions = Omit<SortYTransform, 'type'>;

/**
 * Sort domain of x scale of mark groups by groups.
 */
export const SortY: TC<SortYOptions> = (options = {}) => {
    throw new Error("STUB");
};

SortY.props = {};
