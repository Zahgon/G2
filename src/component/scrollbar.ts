import { Scrollbar as ScrollbarComponent } from '@antv/component';
import { DisplayObject } from '@antv/g';
import { GuideComponentComponent as GCC } from '../runtime';
import { G2_CLASS_PREFIX } from './constant';

export type ScrollbarOptions = {
  orientation?: 'horizontal' | 'vertical';
  ratio?: number;
  [key: string]: any;
};

/**
 * Scrollbar component.
 */
export const Scrollbar: GCC<ScrollbarOptions> = (options) => {
  const { orientation, labelFormatter, style, ...rest } = options;

  return ({ scales: [scale], value, theme }) => {
      throw new Error("STUB");
  };
};

Scrollbar.props = {
  defaultPosition: 'bottom',
  defaultSize: 24,
  defaultOrder: 1,
  defaultCrossPadding: [12, 12],
  defaultPadding: [12, 12],
};
