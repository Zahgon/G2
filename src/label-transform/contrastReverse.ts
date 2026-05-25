import { DisplayObject } from '@antv/g';
import { ContrastReverseLabelTransform } from '../spec';
import { LabelTransformComponent as LLC } from '../runtime';
import { contrast, mostContrast } from './utils';

export type ContrastReverseOptions = Omit<
  ContrastReverseLabelTransform,
  'type'
>;

/**
 * Reverse the label color when the contrast is lower then `threshold`.
 * The default value of `threshold` is 4.5.
 * More about contract, see https://webaim.org/resources/contrastchecker/
 */
export const ContrastReverse: LLC<ContrastReverseOptions> = (options) => {
    throw new Error("STUB");
};
