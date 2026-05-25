import { arc } from '@antv/vendor/d3-shape';
import { CSS, PropertySyntax } from '@antv/g';
import { G2Element } from '../utils/selection';
import { AnimationComponent as AC } from '../runtime';
import { getArcObject } from '../shape/utils';
import { isPolar } from '../utils/coordinate';
import { Animation } from './types';
import { ScaleInX } from './scaleInX';

export type WaveInOptions = Animation;

/**
 * Transform mark from transparent to solid.
 */
export const WaveIn: AC<WaveInOptions> = (options, context) => {
    throw new Error("STUB");
};

WaveIn.props = {};
