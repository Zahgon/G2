import { TransformComponent as TC, TransformSpec } from '../runtime';
import { StackY } from './stackY';

export type MaybeStackYOptions = {
  series?: boolean;
};

// Avoid duplicate stackY.
// In most of case only one of stackY and dodgeX is needed.
// So pass statistic with stackY and dodgeX.
function exclude(transform: TransformSpec): boolean {
    throw new Error("STUB");
}

/**
 * Add zero constant encode for x channel.
 * This is useful for interval geometry.
 */
export const MaybeStackY: TC<MaybeStackYOptions> = (options) => {
    throw new Error("STUB");
};

MaybeStackY.props = {};
