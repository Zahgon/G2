import { TransformComponent as TC } from '../runtime';
import { GroupYTransform } from '../spec';
import { Group } from './group';

export type GroupYOptions = Omit<GroupYTransform, 'type'>;

/**
 * The GroupY transform group data by x channel, and aggregate.
 */
export const GroupY: TC<GroupYOptions> = (options = {}) => {
    throw new Error("STUB");
};

GroupY.props = {};
