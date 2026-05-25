import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { DodgeXTransform } from '../spec';
import { column, columnOf, maybeColumnOf } from './utils/helper';
import {
  createGroups,
  normalizeComparator,
  applyOrder,
  domainOf,
} from './utils/order';

export type DodgeXOptions = Omit<DodgeXTransform, 'type'>;

/**
 * The dodge group marks into series by color or series channel,
 * and then produce new series channel for each series by specified order,
 * say to form horizontal "columns" by specified channels.
 */
export const DodgeX: TC<DodgeXOptions> = (options = {}) => {
    throw new Error("STUB");
};

DodgeX.props = {};
