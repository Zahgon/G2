import { Ordinal as OrdinalScale } from '@antv/scale';
import { ScaleComponent as SC } from '../runtime';
import { OrdinalScale as OrdinalScaleSpec } from '../spec';

export type OrdinalOptions = Omit<OrdinalScaleSpec, 'type'>;

export const Ordinal: SC<OrdinalOptions> = (options) => {
    throw new Error("STUB");
};

Ordinal.props = {};
