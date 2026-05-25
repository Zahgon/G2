import { EncodeComponent as EC } from '../runtime';
import { ColumnEncode } from '../spec';

export type ColumnOptions = Omit<ColumnEncode, 'type'>;

/**
 * Extract a column of data specified in encoding.
 */
export const Column: EC<ColumnOptions> = ({ value }) => {
    throw new Error("STUB");
};

Column.props = {};
