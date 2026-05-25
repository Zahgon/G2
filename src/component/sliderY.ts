import { GuideComponentComponent as GCC } from '../runtime';
import { Slider, SliderOptions } from './slider';

export type SliderYOptions = SliderOptions;

/**
 * SliderY component.
 */
export const SliderY: GCC<SliderYOptions> = (options) => {
    throw new Error("STUB");
};

SliderY.props = {
  ...Slider.props,
  defaultPosition: 'left',
};
