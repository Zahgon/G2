import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { selectionOf } from '../utils/scale';
import { brush as createBrush } from './brushHighlight';
import { selectPlotArea, hasIndependentXYScale } from './utils';

// Mock dblclick events.
function dblclick(interval = 300) {
    throw new Error("STUB");
}

export function brushFilter(
  root,
  {
    filter,
    reset,
    brushRegion,
    extent: optionalExtent,
    reverse,
    emitter,
    scale,
    coordinate,
    selection,
    series = false,
    ...rest
  },
) {
    throw new Error("STUB");
}

export function BrushFilter({ hideX = true, hideY = true, ...rest }) {
    throw new Error("STUB");
}
