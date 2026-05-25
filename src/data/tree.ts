import { tree } from '@antv/vendor/d3-hierarchy';
import { DataComponent as DC } from '../runtime';
import { hierarchyFunction } from './cluster';

export type TreeOptions = Omit<Record<string, any>, 'type'>;

export const Tree: DC<TreeOptions> = (options) => {
    throw new Error("STUB");
};

Tree.props = {};
