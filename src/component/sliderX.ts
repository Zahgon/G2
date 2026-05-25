import { GuideComponentComponent as GCC } from '../runtime';
import { Slider, SliderOptions } from './slider';

export type SliderXOptions = SliderOptions;

/**
 * SliderX component.
 */
export const SliderX: GCC<SliderXOptions> = (options) => {
    throw new Error("STUB");
};

SliderX.props = {
  ...Slider.props,
  defaultPosition: 'bottom',
};
