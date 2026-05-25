import { Path } from '@antv/g';
import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';
import { ScaleInX } from './scaleInX';

export type GrowInXOptions = Animation;

/**
 * Scale mark from nothing to desired shape in x direction.
 */
export const GrowInX: AC<GrowInXOptions> = (options, context) => {
    throw new Error("STUB");
};

GrowInX.props = {};
