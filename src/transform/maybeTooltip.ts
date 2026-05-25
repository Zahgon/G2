import { deepMix } from '@antv/util';
import { isUnset } from '../utils/helper';
import { TransformComponent as TC } from '../runtime';

export type MaybeTooltipOptions = {
  channel: string | string[];
};

/**
 * Infer tooltip channel from specified channel.
 */
export const MaybeTooltip: TC<MaybeTooltipOptions> = (options) => {
    throw new Error("STUB");
};

MaybeTooltip.props = {};
