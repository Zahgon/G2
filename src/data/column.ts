import { DataComponent as DC } from '../runtime';
import { ColumnConnector } from '../spec';

export type ColumnOptions = Omit<ColumnConnector, 'type'>;

/**
 * Convert column-major format data to row-major format.
 * Column-major: { col1: [val1, val2, ...], col2: [val1, val2, ...] }
 * Row-major: [{ col1: val1, col2: val1, ... }, { col1: val2, col2: val2, ... }]
 */
export const Column: DC<ColumnOptions> = (options) => {
    throw new Error("STUB");
};

Column.props = {};
