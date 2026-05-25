import { Vector2 } from '@antv/coord';
import {
  DisplayObject,
  Text as GText,
  Rect,
  TextStyleProps,
  RectStyleProps,
  PathStyleProps,
} from '@antv/g';
import { isNumber } from '@antv/util';
import { Marker } from '@antv/component';
import { line } from '@antv/vendor/d3-shape';
import { WithPrefix } from '../../runtime';
import { createElement } from '../../utils/createElement';
import { applyStyle } from '../utils';
import { subObject } from '../../utils/helper';
import { select } from '../../utils/selection';
import { dist } from '../../utils/vector';

type BackgroundStyleProps = WithPrefix<
  RectStyleProps & { padding?: number[]; radius?: number },
  'background'
>;

type ConnectorStyleProps = WithPrefix<
  PathStyleProps & { points?: Vector2[] },
  'connector'
>;

type MarkerStyleProps<P extends string> = WithPrefix<Record<string, any>, P>;

type TextShapeStyleProps = Omit<TextStyleProps, 'text'> &
  ConnectorStyleProps &
  BackgroundStyleProps &
  MarkerStyleProps<'startMarker'> &
  MarkerStyleProps<'endMarker'> & {
    id: string;
    className?: string;
    x0?: number; // x0 represents the x position of relative point, default is equal to x
    y0?: number;
    coordCenter?: Vector2; // center of coordinate
    background?: boolean;
    connector?: boolean;
    startMarker?: boolean;
    endMarker?: boolean;
    labelTransform?: string;
    labelTransformOrigin?: string;
    rotate?: number;
    innerHTML?: string | HTMLElement;
    text?: string;
  };

function getConnectorPoint(shape: GText | Rect): [number, number] {
  const {
    min: [x0, y0],
    max: [x1, y1],
  } = shape.getLocalBounds();
  let x = 0;
  let y = 0;
  if (x0 > 0) x = x0;
  if (x1 < 0) x = x1;
  if (y0 > 0) y = y0;
  if (y1 < 0) y = y1;
  return [x, y];
}

function inferBackgroundBounds(textShape: DisplayObject, padding = []) {
  const [top = 0, right = 0, bottom = top, left = right] = padding;
  const container = textShape.parentNode as DisplayObject;

  const angle = container.getEulerAngles();
  container.setEulerAngles(0);
  const { min, halfExtents } = textShape.getLocalBounds();
  const [x, y] = min;
  const [hw, hh] = halfExtents;
  container.setEulerAngles(angle);

  return {
    x: x - left,
    y: y - top,
    width: hw * 2 + left + right,
    height: hh * 2 + top + bottom,
  };
}

const cos = (p0: Vector2, p1: Vector2, p2: Vector2) => {
  const a = dist(p0, p1);
  const b = dist(p1, p2);
  const c = dist(p2, p0);
  return (a ** 2 + b ** 2 - c ** 2) / (2 * a * b);
};

// A path from element to label.
// Adapted drawLabelLine from https://github.com/antvis/G2/blob/master/src/geometry/label/layout/pie/spider.ts
function inferConnectorPath(
  shape: DisplayObject,
  end: Vector2,
  control: Vector2[],
  coordCenter: Vector2,
  left = true,
  top = true,
) {
  const path = (points) => line()(points);

  if (!end[0] && !end[1]) return path([getConnectorPoint(shape), end]);
  if (!control.length) return path([[0, 0], end]);

  const [inflection, start] = control;
  const p1 = [...start];
  const p2 = [...inflection];

  // Label has been adjusted, so add offset to the label.
  if (start[0] !== inflection[0]) {
    const offset = left ? -4 : 4;
    p1[1] = start[1];

    // For the label in the first quadrant.
    if (top && !left) {
      p1[0] = Math.max(inflection[0], start[0] - offset);
      if (start[1] < inflection[1]) {
        p2[1] = p1[1];
      } else {
        p2[1] = inflection[1];
        p2[0] = Math.max(p2[0], p1[0] - offset);
      }
    }

    // For the label in the second quadrant.
    if (!top && !left) {
      p1[0] = Math.max(inflection[0], start[0] - offset);
      if (start[1] > inflection[1]) {
        p2[1] = p1[1];
      } else {
        p2[1] = inflection[1];
        p2[0] = Math.max(p2[0], p1[0] - offset);
      }
    }

    // For the label in the third quadrant.
    if (!top && left) {
      p1[0] = Math.min(inflection[0], start[0] - offset);
      if (start[1] > inflection[1]) {
        p2[1] = p1[1];
      } else {
        p2[1] = inflection[1];
        p2[0] = Math.min(p2[0], p1[0] - offset);
      }
    }

    // For the label in the fourth quadrant.
    if (top && left) {
      p1[0] = Math.min(inflection[0], start[0] - offset);
      if (start[1] < inflection[1]) {
        p2[1] = p1[1];
      } else {
        p2[1] = inflection[1];
        p2[0] = Math.min(p2[0], p1[0] - offset);
      }
    }
  }

  return path([start, p1, p2, inflection, end]);
}

export const Advance = createElement((g) => {
    throw new Error("STUB");
});
