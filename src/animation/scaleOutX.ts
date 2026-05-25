import { isTranspose } from '../utils/coordinate';
import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';

export type ScaleOutXOptions = Animation;

/**
 * Scale mark from desired shape to nothing in x direction.
 */
export const ScaleOutX: AC<ScaleOutXOptions> = (options, context) => {
    throw new Error("STUB");
};
