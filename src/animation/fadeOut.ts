import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';

export type FadeOutOptions = Animation;

/**
 * Transform mark from solid to transparent.
 */
export const FadeOut: AC<FadeOutOptions> = (options) => {
    throw new Error("STUB");
};

FadeOut.props = {};
