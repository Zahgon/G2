import { isTranspose } from '../utils/coordinate';
import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';

export type ScaleOutYOptions = Animation;

/**
 * Scale mark from desired shape to nothing in y direction.
 */
export const ScaleOutY: AC<ScaleOutYOptions> = (options, context) => {
    throw new Error("STUB");
};
