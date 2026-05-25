import { DataComponent as DC } from '../runtime';
import { RenameTransform } from '../spec';

export function isEmpty(obj: any) {
  return Object.keys(obj).length === 0;
}

export type RenameOptions = Omit<RenameTransform, 'type'>;

/**
 * Immutable data rename by specified fields.
 */
export const Rename: DC<RenameOptions> = (options) => {
    throw new Error("STUB");
};

Rename.props = {};
