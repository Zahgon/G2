import { DataComponent as DC } from '../runtime';
import { identity } from '../utils/helper';
import { MapTransform } from '../spec';

export type MapOptions = Omit<MapTransform, 'type'>;

/**
 * Map transform by function.
 */
export const Map: DC<MapOptions> = (options) => {
    throw new Error("STUB");
};

Map.props = {};
