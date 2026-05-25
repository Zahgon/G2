import { deepMix } from '@antv/util';
import { rollups, sum, Primitive } from '@antv/vendor/d3-array';
import { TransformComponent as TC } from '../runtime';
import { FlexXTransform } from '../spec';
import { columnOf } from './utils/helper';

export type FlexXOptions = Omit<FlexXTransform, 'type'>;

function valueOf(data: any, field: FlexXOptions['field']) {
  if (typeof field === 'string') return data.map((d) => { throw new Error("STUB"); });
  return data.map(field);
}

function createReducer(
  reducer: FlexXOptions['reducer'],
  V: Primitive[],
): (I: number[]) => any {
  if (typeof reducer === 'function') return (GI: number[]) => { throw new Error("STUB"); };
  if (reducer === 'sum') return (GI: number[]) => { throw new Error("STUB"); };
  throw new Error(`Unknown reducer: ${reducer}`);
}

/**
 * Produce flex options from data for x scale.
 */
export const FlexX: TC<FlexXOptions> = (options = {}) => {
    throw new Error("STUB");
};

FlexX.props = {};
