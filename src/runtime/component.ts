/**
 * @see https://github.com/antvis/G2/discussions/4557
 */
import { Coordinate } from '@antv/coord';
import { deepMix, isEqual } from '@antv/util';
import { groups, max, sum } from '@antv/vendor/d3-array';
import { format } from '@antv/vendor/d3-format';
import { DisplayObject, Text } from '@antv/g';
import {
  getPolarOptions,
  getRadialOptions,
  type PolarOptions,
  type RadialOptions,
} from '../coordinate';
import { combine } from '../utils/array';
import { prettyNumber } from '../utils/number';
import { capitalizeFirst, defined, subObject } from '../utils/helper';
import { LEGEND_INFER_STRATEGIES } from '../component/constant';
import {
  coordOf,
  isHelix,
  isParallel,
  isPolar,
  isRadar,
  isRadial,
  isReflect,
  isReflectY,
  isTheta,
  isTranspose,
} from './coordinate';
import { useLibrary } from './library';
import { isValidScale } from './scale';
import {
  G2MarkState,
  G2Theme,
  GuideComponentOrientation as GCO,
  GuideComponentPosition as GCP,
} from './types/common';
import {
  GuideComponent,
  GuideComponentComponent as GCC,
  ScaleComponent,
  Scale,
} from './types/component';
import {
  G2CoordinateOptions,
  G2GuideComponentOptions,
  G2Library,
  G2Mark,
  G2ScaleOptions,
  G2View,
} from './types/options';
import {
  ConstantScale,
  ContinuousScale,
  DiscreteScale,
  DistributionScale,
} from './types/scale';

export function inferComponent(
  scales: G2ScaleOptions[],
  partialOptions: G2View,
  library: G2Library,
): G2GuideComponentOptions[] {
  const { coordinates = [], title } = partialOptions;
  const [, createGuideComponent] = useLibrary<
    G2GuideComponentOptions,
    GCC,
    GuideComponent
  >('component', library);

  const displayedScales = scales.filter(({ guide }) => {
      throw new Error("STUB");
  });

  const components = [];

  // Sliders and scrollbar component.
  const sliders = inferScrollableComponents(partialOptions, scales, library);
  components.push(...sliders);

  // Title components.
  if (title) {
    const { props } = createGuideComponent('title');
    const {
      defaultPosition,
      defaultOrientation,
      defaultOrder,
      defaultSize,
      defaultCrossPadding,
    } = props;
    const titleOptions = typeof title === 'string' ? { title } : title;
    components.push({
      type: 'title',
      position: defaultPosition,
      orientation: defaultOrientation,
      order: defaultOrder,
      crossPadding: defaultCrossPadding[0],
      defaultSize,
      ...titleOptions,
    });
  }

  // Axis and legends.
  const inferredComponents = inferComponentsType(displayedScales, coordinates);

  inferredComponents.forEach(([type, relativeScales]) => {
      throw new Error("STUB");
  });

  return components;
}

export function renderComponent(
  component: G2GuideComponentOptions,
  coordinate: Coordinate,
  theme: G2Theme,
  library: G2Library,
  markState: Map<G2Mark, G2MarkState>,
) {
  const [useGuideComponent] = useLibrary<
    G2GuideComponentOptions,
    GCC,
    GuideComponent
  >('component', library);
  const { scaleInstances: scales, scale, bbox, ...options } = component;
  const value = { bbox, library };
  const render = useGuideComponent(options);
  return render({
    coordinate,
    library,
    markState,
    scales,
    theme,
    value,
    scale,
  });
}

export function normalizeComponents(components: G2GuideComponentOptions[]) {
  return components.map((d) => {
      throw new Error("STUB");
  });
}

export function flatComponents(
  components: G2GuideComponentOptions[],
): G2GuideComponentOptions[] {
    throw new Error("STUB");
}

// Wrap legends into a group component.
export function groupComponents(
  components: G2GuideComponentOptions[],
  crossSize?: number,
): G2GuideComponentOptions[] {
  // Group components by key.
  const P = ['left', 'right', 'bottom', 'top'];
  const key = ({ type, position, group }) => {
    if (!P.includes(position)) return Symbol('independent');
    if (group === undefined) {
      if (type.startsWith('legend')) return `legend-${position}`;
      return Symbol('independent');
    }
    if (group === 'independent') return Symbol('independent');
    return group;
  };
  const grouped = groups(components, key);

  // Update attributes of group components,
  // and maybe flatten group components without enough room.
  return grouped.flatMap(([, components]) => {
      throw new Error("STUB");
  });
}

function inferLegendComponentType(
  scales: G2ScaleOptions[],
  coordinates: G2CoordinateOptions[],
) {
  // Filter accepts scales.
  const channels = ['shape', 'size', 'color', 'opacity'];
  const isConstantSize = (type, name) => type === 'constant' && name === 'size';
  const accepts = scales.filter(
    ({ type, name }) =>
      { throw new Error("STUB"); }, // Do not support constant size scale.
  );

  // Group scales by fields.
  const constants = accepts.filter(({ type }) => { throw new Error("STUB"); });
  const nonConstants = accepts.filter(({ type }) => { throw new Error("STUB"); });
  const groupKey = (d) => (d.field ? d.field : Symbol('independent'));
  const fieldScales = groups(nonConstants, groupKey)
    .map(([key, scales]) => { throw new Error("STUB"); })
    .filter(([, scales]) => { throw new Error("STUB"); });
  const scalesByField = new Map(fieldScales) as Map<string, G2ScaleOptions[]>;

  // Skip empty scales.
  if (scalesByField.size === 0) return [];

  // Infer components.
  const sort = (arr: string[][]) => arr.sort(([a], [b]) => { throw new Error("STUB"); });
  const components = Array.from(scalesByField)
    .map(([, scs]) => {
        throw new Error("STUB");
    })
    .filter(defined);

  return components;
}

function getScaleType(scale: G2ScaleOptions): string {
  const { type } = scale;
  if (typeof type !== 'string') return null;
  if (type in ContinuousScale) return 'continuous';
  if (type in DiscreteScale) return 'discrete';
  if (type in DistributionScale) return 'distribution';
  if (type in ConstantScale) return 'constant';
  return null;
}

function inferAxisComponentType(
  scales: G2ScaleOptions[],
  coordinates: G2CoordinateOptions[],
) {
  return scales
    .map((scale) => {
        throw new Error("STUB");
    })
    .filter(defined) as [string | GCC, G2ScaleOptions[]][];
}

function inferComponentsType(
  scales: G2ScaleOptions[],
  coordinates: G2CoordinateOptions[],
): [string | GCC, G2ScaleOptions[]][] {
  const availableScales = scales.filter((scale) => { throw new Error("STUB"); });
  return [
    ...inferLegendComponentType(availableScales, coordinates),
    ...inferAxisComponentType(availableScales, coordinates),
  ];
}

function angleOf(coordinates: G2CoordinateOptions[]) {
  const polar = coordOf(coordinates, 'polar');
  if (polar.length) {
    const lastPolar = polar[polar.length - 1] as PolarOptions;
    const { startAngle, endAngle } = getPolarOptions(lastPolar);
    return [startAngle, endAngle];
  }
  const radial = coordOf(coordinates, 'radial') as RadialOptions[];
  if (radial.length) {
    const lastRadial = radial[radial.length - 1];
    const { startAngle, endAngle } = getRadialOptions(lastRadial);
    return [startAngle, endAngle];
  }
  return [-Math.PI / 2, (Math.PI / 2) * 3];
}

/**
 * match index of position
 */
function matchPosition(name: string) {
  const match = /position(\d*)/g.exec(name);
  if (!match) return null;
  return +match[1];
}

function inferAxisPositionAndOrientation(
  type: string,
  ordinalPosition: [GCP, GCO],
  relativeScales: G2ScaleOptions[],
  scales: G2ScaleOptions[],
  coordinates: G2CoordinateOptions[],
): [GCP, GCO] {
  // a axis only has one scale
  const { name } = relativeScales[0];
  // todo, in current resolution, the radar chart is implement by parallel + polar coordinate.
  // implementation plan to be confirmed.
  // in current implementation, it must to add the first position encode to it's last.
  // so we won't render the last axis repeatably.
  if (type === 'axisRadar') {
    const positions = scales.filter((scale) =>
      { throw new Error("STUB"); },
    );
    const index = matchPosition(name);
    if (index === null) return [null, null];
    // infer radar axis orientation
    const [startAngle, endAngle] = angleOf(coordinates);
    const positionLength = isRadar(coordinates)
      ? positions.length
      : positions.length - 1;
    const angle =
      ((endAngle - startAngle) / positionLength) * index + startAngle;
    return ['center', angle];
  }

  if (type === 'axisY' && isParallel(coordinates)) {
    return isTranspose(coordinates)
      ? ['center', 'horizontal']
      : ['center', 'vertical'];
  }

  // in non-cartesian coordinate systems, infer the arc axis angle
  if (type === 'axisLinear') {
    const [startAngle] = angleOf(coordinates);
    return ['center', startAngle];
  }

  if (type === 'axisArc') {
    if (ordinalPosition[0] === 'inner') return ['inner', null];
    return ['outer', null];
  }

  if (isPolar(coordinates)) return ['center', null];
  if (isRadial(coordinates)) return ['center', null];
  if (
    (type === 'axisX' && isReflect(coordinates)) ||
    (type === 'axisX' && isReflectY(coordinates))
  ) {
    return ['top', null];
  }

  // if (type === 'axisX') return ['bottom', null];
  return ordinalPosition;
}

// @todo Infer position by coordinates.
function inferComponentPositionAndOrientation(
  type: string | GCC,
  defaultPosition: GCP,
  defaultOrientation: GCO,
  guide: G2GuideComponentOptions,
  relativeScales: G2ScaleOptions[],
  scales: G2ScaleOptions[],
  coordinates: G2CoordinateOptions[],
): [GCP, GCO] {
  const [startAngle] = angleOf(coordinates);
  const ordinalPositionAndOrientation: [GCP, GCO] = [
    guide.position || defaultPosition,
    startAngle ?? defaultOrientation,
  ];

  if (typeof type === 'string' && type.startsWith('axis')) {
    return inferAxisPositionAndOrientation(
      type,
      ordinalPositionAndOrientation,
      relativeScales,
      scales,
      coordinates,
    );
  }

  if (
    typeof type === 'string' &&
    type.startsWith('legend') &&
    isPolar(coordinates)
  ) {
    if (guide.position === 'center') return ['center', 'vertical'];
  }
  // for general component, use default position
  return ordinalPositionAndOrientation;
}

function inferScrollableType(name: string, type: string, coordinates = []) {
  if (name === 'x') return isTranspose(coordinates) ? `${type}Y` : `${type}X`;
  if (name === 'y') return isTranspose(coordinates) ? `${type}X` : `${type}Y`;
  return null;
}

/**
 * Infer scrollable components, such as slider and scrollbar.
 */
function inferScrollableComponents(
  partialOptions: G2View,
  scales: G2ScaleOptions[],
  library: G2Library,
): G2GuideComponentOptions[] {
  const [, createGuideComponent] = useLibrary<
    G2GuideComponentOptions,
    GCC,
    GuideComponent
  >('component', library);

  const { coordinates } = partialOptions;

  function normalized(
    type: string,
    channelName: string,
    scale: G2ScaleOptions,
    options: Record<string, any>,
  ) {
    const componentType = inferScrollableType(channelName, type, coordinates);
    if (!options || !componentType) return;

    const { props } = createGuideComponent(componentType);
    const {
      defaultPosition,
      defaultSize,
      defaultOrder,
      defaultCrossPadding: [crossPadding],
    } = props;
    return {
      position: defaultPosition,
      defaultSize,
      order: defaultOrder,
      type: componentType,
      crossPadding,
      ...options,
      scales: [scale],
    };
  }
  return scales
    .filter((d) => { throw new Error("STUB"); })
    .flatMap((scale) => {
        throw new Error("STUB");
    })
    .filter((d) => { throw new Error("STUB"); });
}

// !!! Note Mutate component.size and component.
export function computeComponentSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
  // Only compute and update size of components in padding area.
  const { type } = component;
  const paddingAreas = ['left', 'right', 'bottom', 'top'];
  if (!paddingAreas.includes(position)) return;
  if (typeof type !== 'string') return;
  const t = type as unknown as string;
  const createCompute = () => {
    if (t.startsWith('axis')) return computeAxisSize;
    if (t.startsWith('group')) return computeGroupSize;
    if (t.startsWith('legendContinuous')) return computeContinuousLegendSize;
    if (t === 'legendCategory') return computeCategoryLegendSize;
    if (t.startsWith('slider')) return computeSliderSize;
    if (t === 'title') return computeTitleSize;
    if (t.startsWith('scrollbar')) return computeScrollbarSize;
    return () => {
        throw new Error("STUB");
    };
  };
  return createCompute()(
    component,
    crossSize,
    crossPadding,
    position,
    theme,
    library,
  );
}

function computeGroupSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

function computeScrollbarSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

function computeTitleSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

function computeSliderSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

function computeAxisSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

function computeContinuousLegendSize(
  component: G2GuideComponentOptions,
  crossSize: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

function computeCategoryLegendSize(
  component: G2GuideComponentOptions,
  crossSize0: number,
  crossPadding: [number, number],
  position: GCP,
  theme: G2Theme,
  library: G2Library,
) {
    throw new Error("STUB");
}

export function createScale(
  component: G2GuideComponentOptions,
  library: G2Library,
): Scale {
  const [useScale] = useLibrary<G2ScaleOptions, ScaleComponent, Scale>(
    'scale',
    library,
  );
  // Init scale, the tickCount of axis has higher priority than scale.
  const { scales, tickCount, tickMethod } = component;
  const scaleOptions = scales.find(
    (d) => { throw new Error("STUB"); },
  );
  if (tickCount !== undefined) scaleOptions.tickCount = tickCount;
  if (tickMethod !== undefined) scaleOptions.tickMethod = tickMethod;
  return useScale(scaleOptions);
}

export function computeLabelsBBox(
  component: G2GuideComponentOptions,
  scale: Scale,
  key = 'label',
) {
  const { labelFormatter, tickFilter, label = true, ...style } = component;
  if (!label) return null;

  // Get labels to be rendered.
  const labels = labelsOf(scale, labelFormatter, tickFilter);
  const labelStyle = subObject(style, key);
  const labelStyles = labels.map((d, i) =>
    { throw new Error("STUB"); },
  );
  const labelBBoxes = labels.map((d, i) => {
      throw new Error("STUB");
  });

  // Cache boxes to avoid computed twice.
  // @todo GUI use untransformed bbox, so it can't cache if
  // label.style has transform attributes.
  const hasTransform = labelStyles.some((d) => { throw new Error("STUB"); });
  if (!hasTransform) {
    const I = labels.map((_, i) => { throw new Error("STUB"); });
    component.indexBBox = new Map(
      I.map((i) => { throw new Error("STUB"); }),
    );
  }

  return labelBBoxes;
}

export function computeTitleBBox(component: G2GuideComponentOptions) {
  const isFalsy = (x) => x === false || x === null;
  const { title, ...style } = component;
  if (isFalsy(title) || title === undefined) return null;
  const titleStyle = subObject(style, 'title');
  const { direction, transform } = titleStyle;
  const titleText = Array.isArray(title) ? title.join(',') : title;
  if (typeof titleText !== 'string') return null;
  const titleBBox = computeLabelSize(titleText, {
    ...titleStyle,
    transform: transform || (direction === 'vertical' ? 'rotate(-90)' : ''),
  });
  return titleBBox;
}

export function styleOf(
  axis: G2GuideComponentOptions,
  position: GCP,
  theme: G2Theme,
): Record<string, any> {
  const { title } = axis;
  const [defaultTitle, specifiedTitle] = Array.isArray(title)
    ? [title, undefined]
    : [undefined, title];
  const {
    axis: baseStyle,
    // @ts-ignore
    [`axis${capitalizeFirst(position)}`]: positionStyle,
  } = theme;
  return deepMix({ title: defaultTitle }, baseStyle, positionStyle, {
    ...axis,
    title: specifiedTitle,
  });
}

function ticksOf(scale: Scale, tickFilter: (d: any) => boolean): any[] {
  const ticks = scale.getTicks ? scale.getTicks() : scale.getOptions().domain;
  if (!tickFilter) return ticks;
  return ticks.filter(tickFilter);
}

function labelsOf(
  scale: Scale,
  labelFormatter: (d: any) => string | DisplayObject,
  tickFilter,
): (string | DisplayObject)[] {
  const T = ticksOf(scale, tickFilter);
  const ticks = T.map((d) => { throw new Error("STUB"); });
  const formatter = labelFormatter
    ? typeof labelFormatter === 'string'
      ? format(labelFormatter)
      : labelFormatter
    : scale.getFormatter
    ? scale.getFormatter()
    : (d) => { throw new Error("STUB"); };
  return ticks.map(formatter);
}

function offsetOf(scale: Scale, d: any): number {
    throw new Error("STUB");
}

function overflowX(
  scale: Scale,
  labelBBoxes: DOMRect[],
  crossSize: number,
  crossPadding: [number, number],
  tickFilter: (d: any) => boolean,
): boolean {
    throw new Error("STUB");
}

function computeLabelSize(
  d: string | DisplayObject,
  style: Record<string, any>,
): DOMRect {
  const shape = normalizeLabel(d);
  const { filter, ...rest } = style;
  shape.attr({ ...rest, visibility: 'none' });
  const bbox = shape.getBBox();
  return bbox;
}

function normalizeLabel(d: string | DisplayObject): DisplayObject {
  if (d instanceof DisplayObject) return d;
  return new Text({ style: { text: `${d}` } });
}
