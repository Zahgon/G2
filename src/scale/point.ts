import { Point as PointScale } from '@antv/scale';

import { PointScale as PointScaleSpec } from '../spec';
import { ScaleComponent as SC } from '../runtime';

export type PointOptions = Omit<PointScaleSpec, 'type'>;

export const Point: SC<PointOptions> = (options) => {
    throw new Error("STUB");
};

Point.props = {};
