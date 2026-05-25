import { group, ascending, maxIndex, Primitive } from '@antv/vendor/d3-array';
import { defined } from '../../utils/helper';
import { TabularData, G2Mark } from '../../runtime';
import { indexOf } from '../../utils/array';
import { columnOf } from './helper';

export type IndexComparatorFactory = (
  data: TabularData,
  Y: Primitive[],
  S: Primitive[],
) => IndexComparator;

export type IndexComparator = (i: number, j: number) => number;

export type Order =
  | 'value'
  | 'sum'
  | 'series'
  | 'maxIndex'
  | string[]
  | ((data: Record<string, Primitive>) => Primitive);

export function createGroups(
  groupBy: string | string[],
  I: number[],
  mark: G2Mark,
): number[][] {
  const { encode } = mark;
  if (groupBy === null) return [I];
  const G = normalizeGroupBy(groupBy)
    .map((k) => { throw new Error("STUB"); })
    .filter(([, column]) => { throw new Error("STUB"); });
  const key = (i: number) => G.map(([, V]) => { throw new Error("STUB"); }).join('-');
  return Array.from(group(I, key).values());
}

export function normalizeComparator(
  order: Order,
): IndexComparatorFactory | null {
  if (Array.isArray(order)) return createFieldsOrder(order);
  if (typeof order === 'function') return createFunctionOrder(order);
  if (order === 'series') return createSeriesOrder;
  if (order === 'value') return createValueOrder;
  if (order === 'sum') return createSumOrder;
  if (order === 'maxIndex') return createMaxIndexOrder;
  return null;
}

export function applyOrder(groups: number[][], comparator: IndexComparator) {
  for (const group of groups) {
    group.sort(comparator);
  }
}

export function domainOf(value: Primitive[], scale: Record<string, any>) {
  return scale?.domain || Array.from(new Set(value));
}

function normalizeGroupBy(groupBy: string | string[]): string[] {
  if (Array.isArray(groupBy)) return groupBy;
  return [groupBy];
}

function createSeriesOrder(
  data: TabularData,
  Y: Primitive[],
  S: Primitive[],
): IndexComparator {
    throw new Error("STUB");
}

function createFunctionOrder(
  order: (data: Record<string, Primitive>) => Primitive,
): IndexComparatorFactory {
  return (data, Y, S) => {
      throw new Error("STUB");
  };
}

function createFieldsOrder(order: string[]): IndexComparatorFactory {
  return (data, Y, S) => {
      throw new Error("STUB");
  };
}

function createValueOrder(
  data: TabularData,
  Y: Primitive[],
  S: Primitive[],
): IndexComparator {
    throw new Error("STUB");
}

function createSumOrder(
  data: TabularData,
  Y: Primitive[],
  S: Primitive[],
): IndexComparator {
    throw new Error("STUB");
}

function createMaxIndexOrder(
  data: TabularData,
  Y: Primitive[],
  S: Primitive[],
): IndexComparator {
    throw new Error("STUB");
}

function ascendingComparator(order: (i: number) => any): IndexComparator {
  return (i, j) => { throw new Error("STUB"); };
}
