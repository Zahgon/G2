import { deepMix } from '@antv/util';
import { G2Mark, TransformComponent as TC } from '../runtime';
import { FilterTransform } from '../spec';
import { defined } from '../utils/helper';
import { columnOf } from './utils/helper';

export type FilterOptions = Omit<FilterTransform, 'type'>;

function normalizeValue(value) {
  if (typeof value === 'object') return [value.value, value.ordinal];
  else return [value, true];
}

function filterWhenNoElements(mark: G2Mark) {
  const { encode } = mark;

  // keep y-axis
  const noElementMark = {
    ...mark,
    encode: {
      ...mark.encode,
      y: {
        ...mark.encode.y,
        value: [],
      },
    },
  };

  const targetField = encode?.color?.field;
  if (!encode || !targetField) {
    return noElementMark;
  }

  // 获取color的筛选源
  let filterObject;

  for (const [key, v] of Object.entries(encode)) {
    if ((key === 'x' || key === 'y') && v.field === targetField) {
      filterObject = {
        ...filterObject,
        [key]: {
          ...v,
          value: [],
        },
      };
    }
  }

  if (!filterObject) {
    return noElementMark;
  }

  return {
    ...mark,
    encode: {
      ...mark.encode,
      ...filterObject,
    },
  };
}

/**
 * The Filter transform filter channels.
 */
export const Filter: TC<FilterOptions> = (options = {}) => {
    throw new Error("STUB");
};

Filter.props = {};
