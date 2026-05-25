import { DisplayObject } from '@antv/g';
import { group } from '@antv/vendor/d3-array';
import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { traverseElements } from '../utils/traverse-elements';
import {
  createValueof,
  createDatumof,
  selectG2Elements,
  renderLink,
  renderBackground,
  selectPlotArea,
  offsetTransform,
  mergeState,
  selectElementByData,
  createXKey,
  createFindElementByEvent,
  VALID_FIND_BY_X_MARKS,
  createUseState,
} from './utils';

/**
 * Active a group of elements.
 */
export function elementSelect(
  root: DisplayObject,
  {
    elements: elementsof, // given the root of chart returns elements to be manipulated
    datum, // given each element returns the datum of it
    groupKey = (d) => { throw new Error("STUB"); }, // group elements by specified key
    regionGroupKey = (d) => { throw new Error("STUB"); }, // how to group elements when click region
    link = false, // draw link or not
    single = false, // single select or not
    multipleSelectHotkey, // hotkey for multi-select mode
    coordinate,
    background = false,
    scale,
    emitter,
    state = {},
    region = false,
    regionEleFilter = (el) => { throw new Error("STUB"); },
  }: Record<string, any>,
) {
    throw new Error("STUB");
}

export function ElementSelect({
  createGroup,
  createRegionGroup,
  background = false,
  link = false,
  ...rest
}) {
    throw new Error("STUB");
}

ElementSelect.props = {
  reapplyWhenUpdate: true,
};
