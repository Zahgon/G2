import {
  line,
  lineRadial,
  CurveFactory,
  CurveFactoryLineOnly,
} from '@antv/vendor/d3-shape';
import { Vector2 } from '@antv/coord';
import { isPolar, isTranspose } from '../../utils/coordinate';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';
import { applyStyle, computeGradient, getTransform } from '../utils';
import { createElement } from '../../utils/createElement';
import { subObject } from '../../utils/helper';
import { angleWithQuadrant, dist, sub } from '../../utils/vector';

const DoublePath = createElement((g) => {
    throw new Error("STUB");
});

/**
 * Given a points sequence, split it into an array of defined points
 * and an array of undefined segments.
 *
 * Input - [[1, 2], [3, 4], [null, null], [null, null], [5, 6], [null, null], [7, 8]]
 * Output
 *  - [[1, 2], [3, 4], [5, 6], [7, 8]]
 *  - [
 *      [[3, 4], [5, 6]],
 *      [[5, 6], [7, 8]]
 *    ]
 */
function segmentation(
  points: Vector2[],
  defined: (d: any) => boolean,
): [Vector2[], [Vector2, Vector2][]] {
  const definedPoints = [];
  const segments = [];
  let m = false; // Is in a undefined sequence.
  let dp = null; // The previous defined point.
  for (const p of points) {
    // If current point is a undefined point,
    // enter a undefined sequence.
    if (!defined(p[0]) || !defined(p[1])) m = true;
    else {
      definedPoints.push(p);
      // If current point is a defined point,
      // and is in a undefined sequence, save
      // the two closest defined points as this
      // undefined sequence and exit it.
      if (m) {
        m = false;
        segments.push([dp, p]);
      }
      // Update the previous defined point.
      dp = p;
    }
  }
  return [definedPoints, segments];
}

export type CurveOptions = {
  curve?: CurveFactory | CurveFactoryLineOnly;
  gradient?: boolean;
  [key: string]: any;
};

export const Curve: SC<CurveOptions> = (options, context) => {
  const {
    curve,
    gradient = false,
    // The color for each segment.
    gradientColor = 'between',
    defined = (d) => { throw new Error("STUB"); },
    connect: connectNulls = false,
    ...style
  } = options;
  const { coordinate, document } = context;
  return (P, value, defaults) => {
      throw new Error("STUB");
  };
};

Curve.props = {
  defaultMarker: 'smooth',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
