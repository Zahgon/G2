import { Slider as SliderComponent } from '@antv/component';
import { format } from '@antv/vendor/d3-format';
import { DisplayObject } from '@antv/g';
import { isArray } from '@antv/util';
import { isTranspose } from '../utils/coordinate';
import {
  GuideComponentComponent as GCC,
  GuideComponentContext,
} from '../runtime';
import { invert } from '../utils/scale';

export type SliderOptions = {
  orientation: 'horizontal' | 'vertical';
  showHandle?: boolean;
  showLabel?: boolean;
  showLabelOnInteraction?: boolean;
  autoFitLabel?: boolean;
  [key: string]: any;
};

function inferPosition(bbox, position, trackSize) {
  const { x, y, width, height } = bbox;
  if (position === 'left') return [x + width - trackSize, y];
  if (position === 'right') return [x, y];
  if (position === 'bottom') return [x, y];
  if (position === 'top') return [x, y + height - trackSize];
}

/**
 * Slider component.
 */
export const Slider: GCC<SliderOptions> = (options) => {
  // do not pass size.
  const {
    orientation,
    labelFormatter,
    size,
    style = {},
    position,
    ...rest
  } = options;

  return (context) => {
      throw new Error("STUB");
  };
};

function markValue(markState, channels: string[]) {
  const [value] = Array.from(markState.entries())
    .filter(
      ([mark]) =>
        { throw new Error("STUB"); },
    )
    .filter(([mark]) => { throw new Error("STUB"); })
    .map(([mark]) => {
        throw new Error("STUB");
    });

  if (!value?.series) return value?.y;
  const result = value.series.reduce((acc, curr, index) => {
      throw new Error("STUB");
  }, {});
  return Object.values(result);
}

function inferSparklineData(options, context: GuideComponentContext) {
  const { markState } = context;
  if (isArray(options.sparklineData)) return options.sparklineData;
  return markValue(markState, ['y', 'series']);
}

Slider.props = {
  defaultPosition: 'bottom',
  defaultSize: 24,
  defaultOrder: 1,
  defaultCrossPadding: [12, 12],
  defaultPadding: [12, 12],
};
