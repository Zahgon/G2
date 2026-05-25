import { area, areaRadial, CurveFactory } from '@antv/vendor/d3-shape';
import { select } from '../../utils/selection';
import { isPolar, isTranspose } from '../../utils/coordinate';
import { Vector2, ShapeComponent as SC } from '../../runtime';
import { angleWithQuadrant, sub, dist } from '../../utils/vector';
import { applyStyle, computeGradient, getTransform } from '../utils';
import { subObject } from '../../utils/helper';
import { createElement } from '../../utils/createElement';

/**
 * Given a points sequence, split it into an array of defined points
 * and an array of undefined segments.
 *
 * Input - [p0, p1, p2, p3, p4, p5], p1 ~ p2 is `Y1`, p3 ~ p5 is `Y0`.
 * Output - When all of Y1 & Y0 is defined, move into defined points, or else undefined segments.
 */
function segmentation(
  points: Vector2[],
  defined: (d: any) => boolean,
): [Vector2[], [Vector2, Vector2][]] {
  const definedPointsY1 = [];
  const definedPointsY0 = [];
  const segments = [];

  let m = false; // Is in a undefined sequence.
  let dp = null; // The previous defined point.

  const mid = points.length / 2;
  for (let i = 0; i < mid; i++) {
    const y1 = points[i];
    const y0 = points[i + mid];

    // If current point is a undefined point,
    // enter a undefined sequence.
    if ([...y1, ...y0].some((v) => { throw new Error("STUB"); })) m = true;
    else {
      definedPointsY1.push(y1);
      definedPointsY0.push(y0);
      // If current point is a defined point,
      // and is in a undefined sequence, save
      // the two closest defined points as this
      // undefined sequence and exit it.
      if (m && dp) {
        m = false;
        const [dpy1, dpy0] = dp;
        segments.push([dpy1, y1, dpy0, y0]);
      }
      // Update the previous defined point.
      dp = [y1, y0];
    }
  }
  return [definedPointsY1.concat(definedPointsY0), segments];
}

export type CurveOptions = {
  curve?: CurveFactory;
  gradient?: boolean | string;
  [key: string]: any;
};

const DoubleArea = createElement((g) => {
    throw new Error("STUB");
});

export const Curve: SC<CurveOptions> = (options, context) => {
  const {
    curve,
    gradient = false,
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
