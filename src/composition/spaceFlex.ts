import { CompositionComponent as CC } from '../runtime';
import { SpaceFlexComposition } from '../spec';
import { mergeData } from './utils';

export type SpaceFlexOptions = Omit<SpaceFlexComposition, 'type'>;

/**
 * @todo Propagate more options to children.
 */
export const SpaceFlex: CC<SpaceFlexOptions> = () => {
    throw new Error("STUB");
};

SpaceFlex.props = {};
