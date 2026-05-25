import { DisplayObject } from '@antv/g';
import { LabelTransformComponent as LLC } from '../runtime';
import { OverlapHideLabelTransform } from '../spec';
import { isOverlap, parseAABB } from '../utils/bounds';
import { hide, show } from '../utils/style';

export type OverlapHideOptions = Omit<OverlapHideLabelTransform, 'type'>;

/**
 * Hide the label when overlap.
 */
export const OverlapHide: LLC<OverlapHideOptions> = (options) => {
    throw new Error("STUB");
};
