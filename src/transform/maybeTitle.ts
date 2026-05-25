import { deepMix } from '@antv/util';
import { isUnset } from '../utils/helper';
import { TransformComponent as TC } from '../runtime';
import { dynamicFormatDateTime } from '../utils/dateFormat';
import { columnOf } from './utils/helper';

export type MaybeTitleOptions = {
  channel?: string;
};

/**
 * Infer title channel from x-position channel.
 */
export const MaybeTitle: TC<MaybeTitleOptions> = (options = {}) => {
    throw new Error("STUB");
};

MaybeTitle.props = {};
