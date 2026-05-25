import { CompositionComponent as CC } from '../runtime';
import { SpaceLayerComposition } from '../spec';
import { mergeData } from './utils';

export type SpaceLayerOptions = Omit<SpaceLayerComposition, 'type'>;

/**
 * @todo Propagate more options to children.
 */
export const SpaceLayer: CC<SpaceLayerOptions> = () => {
    throw new Error("STUB");
};

SpaceLayer.props = {};
