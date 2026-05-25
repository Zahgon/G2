import { isTranspose } from '../utils/coordinate';
import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';

export type ScaleInXOptions = Animation;

/**
 * Scale mark from nothing to desired shape in x direction.
 */
export const ScaleInX: AC<ScaleInXOptions> = (options, context) => {
  // Small enough to hide or show very small part of mark,
  // but bigger enough to not cause bug.
  const ZERO = 0.0001;

  const { coordinate } = context;

  return (from, _, defaults) => {
      throw new Error("STUB");
  };
};
