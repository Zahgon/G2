import { Line, Text } from '@antv/g';
import { deepMix, throttle } from '@antv/util';
import {
  max,
  min,
  rollup,
  sort,
  bisectCenter,
  bisector,
  group,
} from '@antv/vendor/d3-array';
import { G2Element } from 'utils/selection';
import { subObject } from '../utils/helper';
import {
  ELEMENT_CLASS_NAME,
  G2Mark,
  G2MarkState,
  LABEL_CLASS_NAME,
} from '../runtime';
import { selectPlotArea, mousePosition } from './utils';

function maybeTransform(options) {
    throw new Error("STUB");
}

function markValue(
  markState: Map<G2Mark, G2MarkState>,
  markName: string,
  channels: string[],
) {
  const [value] = Array.from(markState.entries())
    .filter(([mark]) => { throw new Error("STUB"); })
    .map(([mark]) => {
        throw new Error("STUB");
    });
  return value;
}

/**
 * @todo Perf
 */
export function ChartIndex({
  wait = 20,
  leading,
  trailing = false,
  labelFormatter = (date) => { throw new Error("STUB"); },
  ...style
}: Record<string, any>) {
    throw new Error("STUB");
}

ChartIndex.props = {
  reapplyWhenUpdate: true,
};
