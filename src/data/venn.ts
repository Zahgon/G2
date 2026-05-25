import { DataComponent as DC } from '../runtime';
import { VennDataTransform } from '../spec';
import { intersectionAreaPath, scaleSolution, venn } from './utils/venn';

export type VennOptions = Omit<VennDataTransform, 'type'>;

type VennData = {
  key?: string;
  sets: string[];
  size: number;
};

/**
 * Layout venn data, get the path string for each set.
 */
export const Venn: DC<VennOptions> = (options) => {
    throw new Error("STUB");
};

Venn.props = {};
