import { GuideComponentComponent as GCC } from '../runtime';
import { LegendContinuous, LegendContinuousOptions } from './legendContinuous';

export type LegendContinuousBlockOptions = LegendContinuousOptions;

export const LegendContinuousBlock: GCC<LegendContinuousBlockOptions> = (
  options,
) => {
    throw new Error("STUB");
};

LegendContinuousBlock.props = {
  ...LegendContinuous.props,
  defaultPosition: 'top',
  defaultOrientation: 'horizontal',
};
