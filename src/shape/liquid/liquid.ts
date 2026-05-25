import { isFunction } from '@antv/util';
import type { PathStyleProps } from '@antv/g';
import type { ShapeComponent as SC } from '../../runtime';
import { addWave } from './wave';
import { LiquidShapesPath } from './shapes';

const getLiquidShape = (shape = 'circle') =>
  LiquidShapesPath[shape] || LiquidShapesPath.circle;

export type LiquidOptions = Record<string, any>;

export const Liquid: SC<LiquidOptions> = (options, context) => {
    throw new Error("STUB");
};

Liquid.props = {};
