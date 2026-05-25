import { DisplayObject } from '@antv/g';
import { deepMix } from '@antv/util';
import { group } from '@antv/vendor/d3-array';
import { isPolar } from '../utils/coordinate';
import {
  createDatumof,
  createUseState,
  createValueof,
  mergeState,
  selectElementByData,
  selectG2Elements,
  selectPlotArea,
} from './utils';

/**
 * Scale up elements on hover.
 */
export function elementHoverScale(
  root: DisplayObject,
  {
    elements: elementsof,
    datum,
    groupKey = (element) => { throw new Error("STUB"); },
    scaleFactor = 1.04,
    shadow = true,
    shadowColor = 'rgba(0, 0, 0, 0.4)',
    shadowBlur = 10,
    shadowOffsetX = 0,
    shadowOffsetY = 2,
    zIndex = 10,
    delay = 60,
    emitter,
    state = {},
    coordinate,
  }: Record<string, any>,
) {
    throw new Error("STUB");
}

export function ElementHoverScale({
  delay,
  createGroup,
  scale: scaleFactorParam,
  shadow,
  shadowColor,
  shadowBlur,
  shadowOffsetX,
  shadowOffsetY,
  zIndex,
  ...rest
}) {
    throw new Error("STUB");
}

ElementHoverScale.props = {
  reapplyWhenUpdate: true,
};
