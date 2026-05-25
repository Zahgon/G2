import { DisplayObject, parseColor } from '@antv/g';
import { Continuous } from '@antv/component';
import { Constant, Quantile, Quantize, Threshold } from '@antv/scale';
import { format } from '@antv/vendor/d3-format';
import type {
  FlexLayout,
  G2Theme,
  GuideComponentComponent as GCC,
  GuideComponentOrientation as GCO,
  GuideComponentPosition as GCP,
  Scale,
} from '../runtime';
import { lastOf } from '../utils/array';
import {
  G2Layout,
  adaptor,
  inferComponentLayout,
  inferComponentShape,
  isHorizontal,
  scaleOf,
  titleContent,
} from './utils';
import { G2_CLASS_PREFIX } from './constant';

export type LegendContinuousOptions = {
  layout?: FlexLayout;
  position?: GCP;
  title?: string | string[];
  [key: string]: any;
};

type Shape = {
  orientation: string;
  width: number;
  height: number;
  length: number;
  size: number;
};

type Config = {
  orientation: string;
  width: number;
  height: number;
  color: string[];
  data: any[];
  labelFilter?: (datum: any, index: number) => boolean;
  domain?: [number, number];
};

function updateShapeDimensions(
  shape: Shape,
  finalSize: number,
  orientation: Exclude<GCO, number>,
): Shape {
  shape.size = finalSize;
  if (isHorizontal(orientation)) {
    shape.height = finalSize;
  } else {
    shape.width = finalSize;
  }
  return shape;
}

function inferContinuousShape(
  value: Record<string, any>,
  options: LegendContinuousOptions,
  component: GCC,
): Shape {
  const { size } = options;
  const shape = inferComponentShape(value, options, component);
  return updateShapeDimensions(shape, size, shape.orientation);
}

function getFormatter(max: number) {
  return (value: number) => { throw new Error("STUB"); };
}

function getQuantizeOrQuantileConfig(
  shape: Shape,
  colorScale: Threshold,
  min: number,
  max: number,
  range: string[],
): Config {
  const thresholds = (colorScale as any).thresholds as number[];
  const formatter = getFormatter(max);
  return {
    ...shape,
    color: range,
    data: [min, ...thresholds, max].map(formatter),
  };
}

function getThresholdConfig(
  shape: Shape,
  colorScale: Threshold,
  range: string[],
): Config {
  const thresholds = (colorScale as any).thresholds as number[];
  const data = [-Infinity, ...thresholds, Infinity].map((value, index) => { throw new Error("STUB"); });
  return {
    ...shape,
    data,
    color: range,
    labelFilter: (datum, index) => {
        throw new Error("STUB");
    },
  };
}

function rangeOf(scale: Scale) {
  const { domain } = scale.getOptions();
  const [min, max] = [domain[0], lastOf(domain)];
  return [min, max];
}

/**
 * if color scale is not defined, create a constant color scale based on default color
 * @param scale
 * @param theme
 */
function createColorScale(scale: Scale, defaultColor: string): Scale {
  const options = scale.getOptions();
  const newScale = scale.clone();
  newScale.update({ ...options, range: [parseColor(defaultColor).toString()] });
  return newScale;
}

function getLinearConfig(
  shape: Shape,
  colorScale: Scale,
  sizeScale: Scale,
  opacityScale: Scale,
  scales: Record<string, any>,
  theme: G2Theme,
): Config {
  const { length } = shape;
  const definedScale = sizeScale || opacityScale;

  // Only use defaultColor when there is no color scale
  // in this view.
  const defaultColor = scales.color
    ? theme.legendContinuous.ribbonFill || 'black'
    : theme.color;

  const scale = colorScale || createColorScale(definedScale, defaultColor);
  const [min, max] = rangeOf(scale);
  const [domainMin, domainMax] = rangeOf(
    [colorScale, sizeScale, opacityScale]
      .filter((d) => { throw new Error("STUB"); })
      .find((d) => { throw new Error("STUB"); }),
  );
  return {
    ...shape,
    domain: [domainMin, domainMax],
    data: scale.getTicks().map((value) => { throw new Error("STUB"); }),
    color: new Array(Math.floor(length)).fill(0).map((d, i) => {
        throw new Error("STUB");
    }),
  };
}

function inferContinuousConfig(
  scales: Scale[],
  scale: Record<string, Scale>,
  value: Record<string, any>,
  options: LegendContinuousOptions,
  component: GCC,
  theme: G2Theme,
): Config {
  const colorScale = scaleOf(scales, 'color');
  const shape = inferContinuousShape(value, options, component);

  if (colorScale instanceof Threshold) {
    const { range } = colorScale.getOptions();
    const [min, max] = rangeOf(colorScale);
    // for quantize, quantile scale
    if (colorScale instanceof Quantize || colorScale instanceof Quantile) {
      return getQuantizeOrQuantileConfig(shape, colorScale, min, max, range);
    }
    // for threshold
    return getThresholdConfig(shape, colorScale, range);
  }

  // for linear, pow, sqrt, log, time, utc scale
  const sizeScale = scaleOf(scales, 'size');
  const opacityScale = scaleOf(scales, 'opacity');
  return getLinearConfig(
    shape,
    colorScale,
    sizeScale,
    opacityScale,
    scale,
    theme,
  );
}

/**
 * Guide Component for continuous color scale.
 * @todo Custom style.
 */
export const LegendContinuous: GCC<LegendContinuousOptions> = (options) => {
  const {
    labelFormatter,
    layout,
    order,
    orientation,
    position,
    size,
    title,
    style,
    crossPadding,
    padding,
    ...rest
  } = options;

  return ({ scales, value, theme, scale }) => {
      throw new Error("STUB");
  };
};

LegendContinuous.props = {
  defaultPosition: 'top',
  defaultOrientation: 'vertical',
  defaultOrder: 1,
  defaultSize: 60,
  defaultLength: 200,
  defaultLegendSize: 60,
  defaultPadding: [20, 10], // [horizontal, vertical]
  defaultCrossPadding: [12, 12], // [horizontal, vertical]
};
