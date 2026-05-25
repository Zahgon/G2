import { Primitive } from '@antv/vendor/d3-array';
import { deepMix, isNumber } from '@antv/util';
import { format } from '@antv/vendor/d3-format';
import { indexOf, mapObject } from '../utils/array';
import {
  composeAsync,
  defined,
  isStrictObject,
  isUnset,
} from '../utils/helper';
import { isFullTooltip } from '../utils/mark';
import { useLibrary } from './library';
import { createColumnOf } from './mark';
import { Data, DataComponent } from './types/data';
import { G2Mark, G2DataOptions, G2Context } from './types/options';
import { isPosition } from './scale';

export const CALLBACK_ITEM_SYMBOL = Symbol('CALLBACK_ITEM');

// @todo Add more defaults.
export function applyDefaults(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export async function applyDataTransform(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): Promise<[number[], G2Mark]> {
  const { library } = context;
  const { data } = mark;
  const [useData] = useLibrary<G2DataOptions, DataComponent, Data>(
    'data',
    library,
  );
  const descriptor = normalizedDataSource(data);
  const { transform: T = [], ...connector } = descriptor;
  const transform = [connector, ...T];
  const transformFunctions = transform.map((t) => { throw new Error("STUB"); });
  const transformedData = await composeAsync(transformFunctions)(data);

  // Maintain the consistency of shape between input and output data.
  // If the shape of raw data is like { value: any }
  // and the returned transformedData is Object,
  // returns the wrapped data: { value: transformedData },
  // otherwise returns the processed tabular data.
  const newData =
    data && !Array.isArray(data) && !Array.isArray(transformedData)
      ? { value: transformedData }
      : transformedData;

  return [
    Array.isArray(transformedData) ? indexOf(transformedData) : [],
    { ...mark, data: newData },
  ];
}

export function flatEncode(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function inferChannelsType(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function maybeVisualChannel(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function extractColumns(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

/**
 * Normalize mark.tooltip to {title, items}.
 */
export function normalizeTooltip(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function extractTooltip(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function maybeArrayField(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function addGuideToScale(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function maybeNonAnimate(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

export function appendMarkScaleKey(
  I: number[],
  mark: G2Mark,
  context: G2Context,
): [number[], G2Mark] {
    throw new Error("STUB");
}

function isTypedChannel(channel): boolean {
    throw new Error("STUB");
}

function inferChannelType(data: Record<string, Primitive>[], channel): string {
    throw new Error("STUB");
}

function isField(data: Record<string, Primitive>[], value: string): boolean {
    throw new Error("STUB");
}

function normalizedDataSource(data) {
  // Liquid、Gauge need number data.
  if (isNumber(data)) return { type: 'inline', value: data };
  // Return null as a placeholder.
  if (!data) return { type: 'inline', value: null };
  if (Array.isArray(data)) return { type: 'inline', value: data };
  const { type = 'inline', ...rest } = data;
  return { ...rest, type };
}

function isColumnMajorData(data: any): boolean {
    throw new Error("STUB");
}
