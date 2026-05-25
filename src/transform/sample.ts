// @ts-ignore medianIndex exist in d3-array@3.2.0, but @types/d3-array Expired.
import { maxIndex, minIndex, medianIndex } from '@antv/vendor/d3-array';
import { TransformComponent as TC, Primitive } from '../runtime';
import { SampleTransform, SampleFunction } from '../spec';
import { createGroups } from './utils/order';
import { columnOf } from './utils/helper';
import { lttb } from './utils/lttb';

export type SampleOptions = Omit<SampleTransform, 'type'>;

function normalizeSample(
  strategy: SampleTransform['strategy'],
): SampleFunction {
  if (typeof strategy === 'function') return strategy;
  if (strategy === 'lttb') return lttb;

  const strategies = {
    first: (f: number[]) => { throw new Error("STUB"); },
    last: (f: number[]) => { throw new Error("STUB"); },
    min: (f: number[], X: number[], Y: number[]) => { throw new Error("STUB"); },
    max: (f: number[], X: number[], Y: number[]) => { throw new Error("STUB"); },
    median: (f: number[], X: number[], Y: number[]) => { throw new Error("STUB"); },
  };
  const sampleFunction = strategies[strategy] || strategies.median;
  return (I: number[], X: number[], Y: number[], thresholds: number) => {
      throw new Error("STUB");
  };
}

/**
 * Split the array into frame with each frameSize.
 */
function getFrames(I: Primitive[], frameSize: number): number[][] {
  const size = I.length;
  const frames = [];
  let i = 0;
  while (i < size) {
    frames.push(I.slice(i, (i += frameSize)));
  }
  return frames;
}

/**
 * The sample transform groups marks with specified groupBy fields, and
 * sample data for each group when data.length >= threshold(default = 2000).
 */
export const Sample: TC<SampleOptions> = (options = {}) => {
    throw new Error("STUB");
};

Sample.props = {};
