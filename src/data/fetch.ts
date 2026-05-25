import { autoType as d3AutoType, dsvFormat } from '@antv/vendor/d3-dsv';
import type { DataComponent as DC } from '../runtime';
import type { FetchConnector } from '../spec';
import { identity } from '../utils/helper';

export type FetchOptions = Omit<FetchConnector, 'type'>;

export const Fetch: DC<FetchOptions> = (options) => {
    throw new Error("STUB");
};

Fetch.props = {};
