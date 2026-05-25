import { cluster, hierarchy } from '@antv/vendor/d3-hierarchy';
import { DataComponent as DC } from '../runtime';

export type ClusterOptions = Omit<Record<string, any>, 'type'>;

export const hierarchyFunction = (layoutFunction) => (options) => {
    throw new Error("STUB");
};

export const Cluster: DC<ClusterOptions> = (options) => {
    throw new Error("STUB");
};

Cluster.props = {};
