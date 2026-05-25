import { deepMix, isNumber } from '@antv/util';
import { Vector2 } from '@antv/coord';
import { Group } from '@antv/g';
import { filterPrefixObject, isUnset, subObject } from '../utils/helper';
import { CompositeMarkComponent as CC, ShapeComponent as SC } from '../runtime';
import { ColorOptions } from '../shape/point/color';
import { GaugeMark } from '../spec';
import { getTransformOptions } from '../utils/coordinate';
import { Radial } from '../coordinate';
import { applyStyle, getOrigin } from '../shape/utils';
import { select } from '../utils/selection';
import { GaugeRound } from '../shape';

const indicatorShape: SC<ColorOptions> = (options, context) => {
    throw new Error("STUB");
};

const DEFAULT_OPTIONS = {
  coordinate: {
    type: 'radial',
    innerRadius: 0.9,
    outerRadius: 1,
    startAngle: (-11 / 10) * Math.PI,
    endAngle: (1 / 10) * Math.PI,
  },
  axis: {
    x: false,
  },
  legend: false,
  tooltip: false,
  encode: {
    x: 'x',
    y: 'y',
    color: 'color',
  },
  scale: {
    color: {
      range: ['#30BF78', '#D0D0D0'],
    },
  },
};

const DEFAULT_INDICATOR_OPTIONS = {
  style: {
    shape: indicatorShape,
    lineWidth: 4,
    pointerLineCap: 'round',
    pinR: 10,
    pinFill: '#fff',
    radius: 0.6,
  },
};

const DEFAULT_TEXT_OPTIONS = {
  type: 'text',
  style: {
    x: '50%',
    y: '60%',
    textAlign: 'center',
    textBaseline: 'middle',
    fontSize: 20,
    fontWeight: 800,
    fill: '#888',
  },
  tooltip: false,
};

export type GaugeData =
  | {
      target?: number;
      total?: number;
      percent?: number;
      name?: string;
      thresholds?: number[];
    }
  | number;

function getGaugeData(data: GaugeData) {
  if (isNumber(data)) {
    // Percent range [0, 1].
    const percent = Math.max(0, Math.min(data, 1));
    return {
      percent,
      target: percent,
      total: 1,
    };
  }
  return data;
}

function dataTransform(data: GaugeData, scale) {
  const {
    name = 'score',
    target,
    total,
    percent,
    thresholds = [],
  } = getGaugeData(data);
  const _target = percent || target;
  const _total = percent ? 1 : total;
  const newScale = {
    y: {
      domain: [0, _total],
    },
    ...scale,
  };
  if (!thresholds.length) {
    return {
      targetData: [{ x: name, y: _target, color: 'target' }],
      totalData: [
        { x: name, y: _target, color: 'target' },
        { x: name, y: _total - _target, color: 'total' },
      ],
      target: _target,
      total: _total,
      scale: newScale,
    };
  }
  return {
    targetData: [{ x: name, y: _target, color: 'target' }],
    totalData: thresholds.map((d, i) => { throw new Error("STUB"); }),
    target: _target,
    total: _total,
    scale: newScale,
  };
}

function getTextContent(textStyle, { target, total }) {
  const { content } = textStyle;
  return content ? content(target, total) : target.toString();
}

export type GaugeOptions = Omit<GaugeMark, 'type'>;

export const Gauge: CC<GaugeOptions> = (options) => {
    throw new Error("STUB");
};

Gauge.props = {};
