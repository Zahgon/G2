import { DisplayObject } from '@antv/g';
import { deepMix } from '@antv/util';
import { group } from '@antv/vendor/d3-array';
import { subObject } from '../utils/helper';
import {
  createDatumof,
  createFindElementByEvent,
  createUseState,
  createValueof,
  createXKey,
  mergeState,
  offsetTransform,
  renderBackground,
  renderLink,
  selectElementByData,
  selectG2Elements,
  selectPlotArea,
  VALID_FIND_BY_X_MARKS,
} from './utils';

/**
 * highlight a group of elements.
 */
export function elementHighlight(
  root: DisplayObject,
  {
    elements: elementsof, // given the root of chart returns elements to be manipulated
    datum, // given each element returns the datum of it
    groupKey: eleGroupKey = (d) => { throw new Error("STUB"); }, // group elements by specified key
    regionGroupKey = (d) => { throw new Error("STUB"); }, // how to group elements when hover region
    link = false, // draw link or not
    background = false, // draw background or not
    delay = 60, // delay to unhighlighted element
    scale,
    coordinate,
    emitter,
    state = {},
    region = false,
    regionEleFilter = (el) => { throw new Error("STUB"); }, // some elements can not be highlighted by region, like shapes in pie.
  }: Record<string, any>,
) {
    throw new Error("STUB");
}

export function ElementHighlight({
  delay,
  createGroup,
  createRegionGroup,
  background = false,
  link = false,
  ...rest
}) {
    throw new Error("STUB");
}

ElementHighlight.props = {
  reapplyWhenUpdate: true,
};
