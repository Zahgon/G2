import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { StackYTransform } from '../spec';
import {
  column,
  columnOf,
  inferredColumn,
  maybeColumnOf,
} from './utils/helper';
import { normalizeComparator, createGroups, applyOrder } from './utils/order';

export type StackYOptions = Omit<StackYTransform, 'type'>;

/**
 * The stack transform group marks into series by color channel,
 * and then produce new y channel for each series by specified order,
 * say to form vertical "stacks" by specified channels.
 */
export const StackY: TC<StackYOptions> = (options = {}) => {
  const {
    groupBy = 'x',
    orderBy = null,
    reverse = false,
    y: fromY = 'y',
    y1: fromY1 = 'y1',
    series = true,
  } = options;
  return (I, mark) => {
      throw new Error("STUB");
  };
};

StackY.props = {};
