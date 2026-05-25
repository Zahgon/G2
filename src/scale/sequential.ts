import { Sequential as SequentialScale } from '@antv/scale';
import { ScaleComponent as SC } from '../runtime';
import { SequentialScale as SequentialScaleSpec } from '../spec';

export type SequentialOptions = Omit<SequentialScaleSpec, 'type'>;

export const Sequential: SC<SequentialOptions> = (options) => {
    throw new Error("STUB");
};

Sequential.props = {};
