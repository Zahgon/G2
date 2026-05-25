import { Coordinate } from '@antv/coord';
import type { DisplayObject } from '@antv/g';
import { Axis as AxisComponent } from '@antv/component';
import { Linear as LinearScale } from '@antv/scale';
import { deepMix, omit, upperFirst } from '@antv/util';
import { extent } from '@antv/vendor/d3-array';
import { format } from '@antv/vendor/d3-format';
import {
  BBox,
  G2Theme,
  GuideComponentComponent as GCC,
  GuideComponentOrientation as GCO,
  GuideComponentPosition as GCP,
  GuideComponentPlane,
  Scale,
  Vector3,
} from '../runtime';
import {
  angleOf,
  isFisheye,
  isParallel,
  isPolar,
  isRadial,
  isTheta,
  isTranspose,
  radiusOf,
} from '../utils/coordinate';
import { prettyNumber } from '../utils/number';
import { capitalizeFirst } from '../utils/helper';
import { adaptor, isVertical, titleContent } from './utils';
import { G2_CLASS_PREFIX } from './constant';

export type AxisOptions = {
  position?: GCP;
  plane?: GuideComponentPlane;
  zIndex?: number;
  title?: string | string[];
  direction?: 'left' | 'center' | 'right';
  labelFormatter?: (datum: any, index: number, array: any[]) => string;
  labelFilter?: (datum: any, index: number, array: any[]) => boolean;
  labelRender?: (
    datum: any,
    index: number,
    array: any[],
  ) => string | DisplayObject;
  tickFormatter?: (
    datum: any,
    index: number,
    array: any[],
    vector: [number, number],
  ) => DisplayObject;
  tickFilter?: (datum: any, index: number, array: any[]) => boolean;
  tickMethod?: (
    start: number | Date,
    end: number | Date,
    tickCount: number,
  ) => number[];
  tickCount?: number;
  tickLength?: number | ((datum: any, index: number, array: any[]) => number);
  grid: any;
  // options won't be overridden
  important: Record<string, any>;
  /**
   * Rotation origin.
   */
  origin?: Vector3;
  /**
   * EulerAngles of rotation.
   */
  eulerAngles?: Vector3;
  [key: string]: any;
};

export function rotateAxis(axis: DisplayObject, options: AxisOptions) {
  const { eulerAngles, origin } = options;
  if (origin) {
    axis.setOrigin(origin);
  }
  if (eulerAngles) {
    axis.rotate(eulerAngles[0], eulerAngles[1], eulerAngles[2]);
  }
}

function sizeOf(coordinate: Coordinate): [number, number, number] {
  // @ts-ignore
  const { innerWidth, innerHeight, depth } = coordinate.getOptions();
  return [innerWidth, innerHeight, depth];
}

function createFisheye(position, coordinate) {
  const { width, height } = coordinate.getOptions();
  return (tick) => {
      throw new Error("STUB");
  };
}

function ticksOf(
  scale: Scale,
  domain: any[],
  tickMethod: AxisOptions['tickMethod'],
) {
  if (scale.getTicks) return scale.getTicks();
  if (!tickMethod) return domain;
  const [min, max] = extent(domain, (d) => { throw new Error("STUB"); });
  const { tickCount } = scale.getOptions();
  return tickMethod(min, max, tickCount);
}

// Set inset for axis.
function createInset(position, coordinate) {
  if (isPolar(coordinate)) return (d) => { throw new Error("STUB"); };
  const options = coordinate.getOptions();
  const {
    innerWidth,
    innerHeight,
    insetTop,
    insetBottom,
    insetLeft,
    insetRight,
  } = options;
  const [start, end, size] =
    position === 'left' || position === 'right'
      ? [insetTop, insetBottom, innerHeight]
      : [insetLeft, insetRight, innerWidth];
  const x = new LinearScale({
    domain: [0, 1],
    range: [start / size, 1 - end / size],
  });
  return (i) => { throw new Error("STUB"); };
}

/**
 * Calc ticks based on scale and coordinate.
 */
function getData(
  scale: Scale,
  domain: any[],
  tickCount: number,
  defaultTickFormatter: AxisOptions['labelFormatter'],
  tickFilter: AxisOptions['tickFilter'],
  tickMethod: AxisOptions['tickMethod'],
  position: GCP,
  coordinate: Coordinate,
) {
  if (tickCount !== undefined || tickMethod !== undefined) {
    scale.update({
      ...(tickCount && { tickCount }),
      ...(tickMethod && { tickMethod }),
    });
  }

  const ticks = ticksOf(scale, domain, tickMethod);
  const filteredTicks = tickFilter ? ticks.filter(tickFilter) : ticks;
  const toString = (d) =>
    d instanceof Date
      ? String(d)
      : typeof d === 'object' && !!d
      ? d
      : String(d);
  const labelFormatter =
    defaultTickFormatter || scale.getFormatter?.() || toString;
  const applyInset = createInset(position, coordinate);
  const applyFisheye = createFisheye(position, coordinate);
  const isHorizontal = (position) =>
    ['top', 'bottom', 'center', 'outer'].includes(position);
  const isVertical = (position) => ['left', 'right'].includes(position);

  // @todo GUI should consider the overlap problem for the first
  // and label of arc axis.
  if (isPolar(coordinate) || isTranspose(coordinate)) {
    return filteredTicks.map((d, i, array) => {
        throw new Error("STUB");
    });
  }

  return filteredTicks.map((d, i, array) => {
      throw new Error("STUB");
  });
}

function inferGridLength(
  position: GCP,
  coordinate: Coordinate,
  plane: GuideComponentPlane = 'xy',
) {
  const [width, height, depth] = sizeOf(coordinate);

  if (plane === 'xy') {
    if (position.includes('bottom') || position.includes('top')) return height;
    return width;
  } else if (plane === 'xz') {
    if (position.includes('bottom') || position.includes('top')) return depth;
    return width;
  } else {
    if (position.includes('bottom') || position.includes('top')) return height;
    return depth;
  }
}

function inferLabelOverlap(transform = [], style: Record<string, any>) {
  if (transform.length > 0) return transform;
  const { labelAutoRotate, labelAutoHide, labelAutoEllipsis, labelAutoWrap } =
    style;

  const finalTransforms = [];

  const addToTransforms = (overlap, state) => {
    if (state) {
      finalTransforms.push({ ...overlap, ...state });
    }
  };

  addToTransforms(
    {
      type: 'rotate',
      optionalAngles: [0, 15, 30, 45, 60, 90],
    },
    labelAutoRotate,
  );
  addToTransforms({ type: 'ellipsis', minLength: 20 }, labelAutoEllipsis);
  addToTransforms({ type: 'hide' }, labelAutoHide);
  addToTransforms(
    { type: 'wrap', wordWrapWidth: 100, maxLines: 3, recoveryWhenFail: true },
    labelAutoWrap,
  );
  return finalTransforms;
}

function inferArcStyle(
  position: GCP,
  bbox: BBox,
  innerRadius: number,
  outerRadius: number,
  coordinate: Coordinate,
) {
  const { x, y, width, height } = bbox;
  const center: [number, number] = [x + width / 2, y + height / 2];
  const radius = Math.min(width, height) / 2;
  const [startAngle, endAngle] = angleOf(coordinate);

  const [w, h] = sizeOf(coordinate);
  const r = Math.min(w, h) / 2;

  const common = {
    center,
    radius,
    startAngle,
    endAngle,
    gridLength: (outerRadius - innerRadius) * r,
  };

  if (position === 'inner') {
    // @ts-ignore
    const { insetLeft, insetTop } = coordinate.getOptions();
    return {
      ...common,
      center: [center[0] - insetLeft, center[1] - insetTop],
      labelAlign: 'perpendicular',
      labelDirection: 'positive',
      tickDirection: 'positive',
      gridDirection: 'negative',
    };
  }

  // arc outer
  return {
    ...common,
    labelAlign: 'parallel',
    labelDirection: 'negative',
    tickDirection: 'negative',
    gridDirection: 'positive',
  };
}

function inferGrid(value: boolean, coordinate: Coordinate, scale: Scale) {
  if (isTheta(coordinate) || isParallel(coordinate)) return false;
  // Display axis grid for non-discrete values.
  return value === undefined ? !!scale.getTicks : value;
}

function infer3DAxisLinearOverrideStyle(coordinate: Coordinate) {
  // @ts-ignore
  const { depth } = coordinate.getOptions();
  return depth
    ? {
        tickIsBillboard: true,
        lineIsBillboard: true,
        labelIsBillboard: true,
        titleIsBillboard: true,
        gridIsBillboard: true,
      }
    : {};
}

function inferAxisLinearOverrideStyle(
  position: GCP,
  orientation: GCO,
  bbox: BBox,
  coordinate: Coordinate,
  xScale: Scale,
): {
  startPos?: [number, number];
  endPos?: [number, number];
  [k: string]: any;
} {
  const { x, y, width, height } = bbox;

  if (position === 'bottom') {
    return { startPos: [x, y], endPos: [x + width, y] };
  }
  if (position === 'left') {
    return { startPos: [x + width, y + height], endPos: [x + width, y] };
  }
  if (position === 'right') {
    return { startPos: [x, y + height], endPos: [x, y] };
  }
  if (position === 'top') {
    return { startPos: [x, y + height], endPos: [x + width, y + height] };
  }
  // linear axis, maybe in parallel, polar, radial or radar systems.
  if (position === 'center') {
    // axisY
    if (orientation === 'vertical') {
      return {
        startPos: [x, y],
        endPos: [x, y + height],
      };
    }
    // axisX
    else if (orientation === 'horizontal') {
      return {
        startPos: [x, y],
        endPos: [x + width, y],
      };
    }
    // axis with rotate
    else if (typeof orientation === 'number') {
      const [cx, cy] = coordinate.getCenter();
      const [innerRadius, outerRadius] = radiusOf(coordinate);
      const [startAngle, endAngle] = angleOf(coordinate);
      const r = Math.min(width, height) / 2;
      // @ts-ignore
      const { insetLeft, insetTop } = coordinate.getOptions();

      const innerR = innerRadius * r;
      const outerR = outerRadius * r;

      const [actualCx, actualCy] = [cx + x - insetLeft, cy + y - insetTop];
      const [cos, sin] = [Math.cos(orientation), Math.sin(orientation)];

      const startPos: [number, number] = [
        actualCx + outerR * cos,
        actualCy + outerR * sin,
      ];
      const endPos: [number, number] = [
        actualCx + innerR * cos,
        actualCy + innerR * sin,
      ];

      const getAxisXDomainLength = () => {
        const { domain } = xScale.getOptions();
        return domain.length;
      };
      const controllAngleCount =
        isPolar(coordinate) && xScale ? getAxisXDomainLength() : 3;

      return {
        startPos,
        endPos,
        gridClosed: Math.abs(endAngle - startAngle - 360) < 1e-6,
        gridCenter: [actualCx, actualCy],
        gridControlAngles: new Array(controllAngleCount)
          .fill(0)
          .map(
            (d, i, arr) => { throw new Error("STUB"); },
          ),
      };
    }
  }

  // position is inner or outer for arc axis won't be here

  return {};
}

const ArcAxisComponent: GCC<AxisOptions> = (options) => {
    throw new Error("STUB");
};

function inferThemeStyle(
  scale: Scale,
  coordinate: Coordinate,
  theme: G2Theme,
  direction,
  position: GCP,
  orientation: GCO,
) {
  const baseStyle = theme.axis;
  const positionStyle = ['top', 'right', 'bottom', 'left'].includes(position)
    ? theme[`axis${capitalizeFirst(position)}`]
    : theme.axisLinear;
  const channel = scale.getOptions().name;
  const channelStyle = theme[`axis${upperFirst(channel)}`] || {};
  return Object.assign({}, baseStyle, positionStyle, channelStyle);
}

function inferDefaultStyle(
  scale: Scale,
  coordinate: Coordinate,
  theme: G2Theme,
  direction,
  position: GCP,
  orientation: GCO,
) {
  const themeStyle = inferThemeStyle(
    scale,
    coordinate,
    theme,
    direction,
    position,
    orientation,
  );

  if (position === 'center') {
    return {
      ...themeStyle,
      labelDirection: direction === 'right' ? 'negative' : 'positive',
      ...(direction === 'center'
        ? { labelTransform: 'translate(50%,0)' }
        : null),
      tickDirection: direction === 'right' ? 'negative' : 'positive',
      labelSpacing: direction === 'center' ? 0 : 4,
      titleSpacing: isVertical(orientation) ? 10 : 0,
      tick: direction === 'center' ? false : undefined,
    };
  }
  return themeStyle;
}

const LinearAxisComponent: GCC<AxisOptions> = (options) => {
    throw new Error("STUB");
};

const axisFactor: (
  axis: typeof ArcAxisComponent | typeof LinearAxisComponent,
) => GCC<AxisOptions> = (axis) => {
  return (options) => {
      throw new Error("STUB");
  };
};

export const LinearAxis = axisFactor(LinearAxisComponent);

export const ArcAxis = axisFactor(ArcAxisComponent);

LinearAxis.props = {
  defaultPosition: 'center',
  defaultSize: 45,
  defaultOrder: 0,
  defaultCrossPadding: [12, 12],
  defaultPadding: [12, 12],
};

ArcAxis.props = {
  defaultPosition: 'outer',
  defaultOrientation: 'vertical',
  defaultSize: 45,
  defaultOrder: 0,
  defaultCrossPadding: [12, 12],
  defaultPadding: [12, 12],
};
