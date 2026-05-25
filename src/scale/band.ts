import { Band as BandScale } from '@antv/scale';
import { BandScale as BandScaleSpec } from '../spec';
import { ScaleComponent as SC } from '../runtime';

export type BandOptions = Omit<BandScaleSpec, 'type'>;

export const Band: SC<BandOptions> = (options) => {
    throw new Error("STUB");
};

Band.props = {};
