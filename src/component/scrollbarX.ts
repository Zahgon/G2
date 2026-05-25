import { GuideComponentComponent as GCC } from '../runtime';
import { Scrollbar, ScrollbarOptions } from './scrollbar';

export type ScrollbarXOptions = ScrollbarOptions;

/**
 * ScrollbarX component.
 */
export const ScrollbarX: GCC<ScrollbarXOptions> = (options) => {
    throw new Error("STUB");
};

ScrollbarX.props = {
  ...Scrollbar.props,
  defaultPosition: 'bottom',
};
