import { DataComponent as DC } from '../runtime';
import { SortByTransform } from '../spec';
import { normalizeFields } from './utils/fields';

export type SortByOptions = Omit<SortByTransform, 'type'>;

/**
 * Immutable data sort by specified fields.
 */
export const SortBy: DC<SortByOptions> = (options) => {
    throw new Error("STUB");
};

SortBy.props = {};
