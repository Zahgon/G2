import { GuideComponentComponent as GCC } from '../runtime';
import { LegendContinuous, LegendContinuousOptions } from './legendContinuous';
import { LegendContinuousSize } from './legendContinuousSize';

export type LegendContinuousBlockSizeOptions = LegendContinuousOptions;

export const LegendContinuousBlockSize: GCC<
  LegendContinuousBlockSizeOptions
> = (options) => {
    throw new Error("STUB");
};

LegendContinuousBlockSize.props = {
  ...LegendContinuous.props,
  defaultPosition: 'top',
  defaultOrientation: 'horizontal',
};
