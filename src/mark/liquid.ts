import { deepMix, isNumber } from '@antv/util';
import { subObject } from '../utils/helper';
import { prettyNumber } from '../utils/number';
import { CompositeMarkComponent as CC } from '../runtime';
import { LiquidMark } from '../spec';
import { LiquidShape } from '../shape';

const DEFAULT_OPTIONS = {
  axis: {
    x: false,
    y: false,
  },
  legend: false,
  tooltip: false,
  encode: {
    x: 'type',
    y: 'percent',
  },
  scale: {
    y: {
      domain: [0, 1],
    },
  },
  style: {
    shape: LiquidShape,
  },
  animate: {
    enter: {
      type: 'fadeIn',
    },
  },
};

const DEFAULT_TEXT_OPTIONS = {
  type: 'text',
  style: {
    x: '50%',
    y: '50%',
    textAlign: 'center',
    textBaseline: 'middle',
    fontSize: 20,
    fontWeight: 800,
    fill: '#888',
  },
  animate: {
    enter: {
      type: 'fadeIn',
    },
  },
};

export type LiquidData =
  | {
      percent?: number;
    }
  | number;

export type LiquidOptions = Omit<LiquidMark, 'type'>;

export const Liquid: CC<LiquidOptions> = (options) => {
    throw new Error("STUB");
};

Liquid.props = {};
