import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';

export type FadeInOptions = Animation;

/**
 * Transform mark from transparent to solid.
 */
export const FadeIn: AC<FadeInOptions> = (options) => {
    throw new Error("STUB");
};

FadeIn.props = {};
