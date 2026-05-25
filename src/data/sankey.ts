import { DataComponent as DC } from '../runtime';
import { sankey, left, right, center, justify } from './utils/d3-sankey';

const DEFAULT_OPTIONS: Partial<SankeyOptions> = {
  nodeAlign: 'justify',
  nodeWidth: 0.008,
  nodePadding: 0.03,
  nodes: (graph) => { throw new Error("STUB"); },
  links: (graph) => { throw new Error("STUB"); },
  nodeSort: undefined,
  linkSort: undefined,
  iterations: 6,
};

const ALIGN_METHOD = {
  left,
  right,
  center,
  justify,
};

function getNodeAlignFunction(nodeAlign: SankeyOptions['nodeAlign']) {
  const type = typeof nodeAlign;
  if (type === 'string') return ALIGN_METHOD[nodeAlign as string] || justify;
  if (type === 'function') return nodeAlign;
  return justify;
}

export type SankeyOptions = Omit<Record<string, any>, 'type'>;

/**
 * Compute the node and edge position, return a graph representing the Sankey layout. All will be normalized to [[0, 0], [1, 1]]
 * Required graph data (nodes, edges)
 */
export const Sankey: DC<SankeyOptions> = (options) => {
    throw new Error("STUB");
};

Sankey.props = {};
