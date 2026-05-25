import {
  bin as d3Bin,
  group,
  thresholdScott,
  extent,
} from '@antv/vendor/d3-array';
import { defined, subObject } from '../utils/helper';
import { TransformComponent as TC } from '../runtime';
import { BinTransform } from '../spec';
import { GroupN } from './groupN';
import { columnOf } from './utils/helper';

export type BinOptions = Omit<BinTransform, 'type'> & {
  groupChannels?: string[];
  binChannels?: string[];
};

const THRESHOLD = 'thresholds';

/**
 * @see https://github.com/observablehq/plot/blob/main/src/transforms/bin.js
 */
function thresholdAuto(values: number[]) {
  const [min, max] = extent(values);
  return Math.min(200, thresholdScott(values, min, max));
}

/**
 * The Bin aggregate data.
 * @todo More threshold method.
 * @todo Performance.
 */
export const Bin: TC<BinOptions> = (options = {}) => {
  const {
    groupChannels = ['color'],
    binChannels = ['x', 'y'],
    ...rest
  } = options;
  const channelIndexKey = {};

  // Group indexes and update channelIndexKey.
  const groupBy = (I, mark): number[][] => {
    const { encode } = mark;
    const binValues = binChannels.map((channel) => {
        throw new Error("STUB");
    });
    const thresholds = subObject(rest, THRESHOLD);
    const DI = I.filter((i) => { throw new Error("STUB"); });

    // Group indexes by both discrete and quantitative channels.
    const groupKeys = [
      // For discrete channels, use value as group key.
      ...groupChannels
        .map((d) => {
            throw new Error("STUB");
        })
        .filter(defined)
        .map((V) => { throw new Error("STUB"); }),

      // For quantitative channels, use extent of bin as group key.
      ...binChannels.map((d, i) => {
          throw new Error("STUB");
      }),
    ];

    // Group by indexes by channel keys.
    const key = (i: number) => groupKeys.map((key) => { throw new Error("STUB"); }).join('-');
    return Array.from(group(DI, key).values()) as number[][];
  };

  return GroupN({
    // Non-bin channel and reducer.
    ...Object.fromEntries(
      Object.entries(rest).filter(([k]) => { throw new Error("STUB"); }),
    ),
    // Bin channel and reducer.
    ...Object.fromEntries(
      binChannels.flatMap((channel) => {
          throw new Error("STUB");
      }),
    ),
    groupBy,
  });
};

Bin.props = {};
