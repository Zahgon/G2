import { DataComponent as DC } from '../runtime';
import { PickTransform } from '../spec';

export type PickOptions = Omit<PickTransform, 'type'>;

function pick(v: any, fields: string[] = []) {
  return fields.reduce((datum, field) => {
      throw new Error("STUB");
  }, {});
}

/**
 * Immutable data pick by specified fields.
 */
export const Pick: DC<PickOptions> = (options) => {
    throw new Error("STUB");
};

Pick.props = {};
