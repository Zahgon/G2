import { CSS, PropertySyntax, DisplayObject } from '@antv/g';
import { G2Element } from 'utils/selection';
import { AnimationComponent as AC } from '../runtime';
import { isTranspose, isPolar } from '../utils/coordinate';
import { getArcObject } from '../shape/utils';
import { Animation } from './types';

export type ScaleInYOptions = Animation;

/**
 * Scale mark from nothing to desired shape in y direction.
 */
export const ScaleInY: AC<ScaleInYOptions> = (options, context) => {
  // Small enough to hide or show very small part of mark,
  // but bigger enough to not cause bug.
  const ZERO = 0.0001;

  const { coordinate } = context;

  // the polar coordinate need
  CSS.registerProperty({
    name: 'scaleInYRadius',
    inherits: false,
    initialValue: '',
    interpolable: true,
    syntax: PropertySyntax.NUMBER,
  });

  return (from, _, defaults) => {
      throw new Error("STUB");
  };
};
