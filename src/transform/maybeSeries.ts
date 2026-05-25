import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { column, columnOf } from './utils/helper';

export type MaybeSeriesOptions = Record<string, never>;

/**
 * Assume color channel is series channel.
 */
export const MaybeSeries: TC<MaybeSeriesOptions> = () => {
    throw new Error("STUB");
};

MaybeSeries.props = {};
