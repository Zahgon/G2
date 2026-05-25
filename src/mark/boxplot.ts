import {
  min as d3Min,
  max as d3Max,
  quantile,
  group,
} from '@antv/vendor/d3-array';
import { CompositeMarkComponent as CC } from '../runtime';
import { BoxPlotMark } from '../spec';
import { subObject } from '../utils/helper';
import { maybeAnimation, subTooltip } from '../utils/mark';

export type BoxPlotOptions = Omit<BoxPlotMark, 'type'>;

function min(I: number[], V: number[]): number {
  return d3Min(I, (i) => { throw new Error("STUB"); });
}

function max(I: number[], V: number[]): number {
  return d3Max(I, (i) => { throw new Error("STUB"); });
}

function lower(I: number[], V: number[]): number {
    throw new Error("STUB");
}

function q1(I: number[], V: number[]): number {
    throw new Error("STUB");
}

function q2(I: number[], V: number[]): number {
    throw new Error("STUB");
}

function q3(I: number[], V: number[]): number {
    throw new Error("STUB");
}

function upper(I: number[], V: number[]): number {
    throw new Error("STUB");
}

/**
 * Group marks by x and reserve outlier indexes.
 */
function OutlierY() {
    throw new Error("STUB");
}

export const Boxplot: CC<BoxPlotOptions> = (options) => {
    throw new Error("STUB");
};

Boxplot.props = {};
