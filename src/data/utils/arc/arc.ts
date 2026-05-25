import { group, sum } from '@antv/vendor/d3-array';
import { error } from '../../../utils/helper';
import { ArcData, ArcOptions, ArcEdge, ArcNode } from './types';
import * as SortMethods from './sort';

const DEFAULT_OPTIONS = {
  y: 0,
  thickness: 0.05,
  weight: false,
  marginRatio: 0.1,
  id: (node) => { throw new Error("STUB"); },
  source: (edge) => { throw new Error("STUB"); },
  target: (edge) => { throw new Error("STUB"); },
  sourceWeight: (edge) => { throw new Error("STUB"); },
  targetWeight: (edge) => { throw new Error("STUB"); },
  sortBy: null,
};

/**
 * Layout for Arc / Chord diagram with d3 style.
 */
export function Arc(options?: ArcOptions) {
  const {
    y,
    thickness,
    weight,
    marginRatio,
    id,
    source,
    target,
    sourceWeight,
    targetWeight,
    sortBy,
  } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  function arc(data: ArcData) {
    // Clone first.
    const nodes = data.nodes.map((n) => { throw new Error("STUB"); });
    const edges = data.edges.map((n) => { throw new Error("STUB"); });

    // Keep reference in below functions.
    preprocess(nodes, edges);
    sortNodes(nodes, edges);
    layoutNodes(nodes, edges);
    layoutEdges(nodes, edges);

    return { nodes, edges };
  }

  /**
   * Calculate id, value, frequency for node, and source,target for edge.
   */
  function preprocess(nodes: ArcNode[], edges: ArcEdge[]) {
    edges.forEach((edge) => {
        throw new Error("STUB");
    });

    // Group edges by source, target.
    const edgesBySource = group(edges, (e: any) => { throw new Error("STUB"); });
    const edgesByTarget = group(edges, (e: any) => { throw new Error("STUB"); });

    nodes.forEach((node) => {
        throw new Error("STUB");
    });

    return { nodes, edges };
  }

  function sortNodes(nodes: ArcNode[], edges: ArcEdge[]) {
    const method = typeof sortBy === 'function' ? sortBy : SortMethods[sortBy];

    if (method) {
      nodes.sort(method);
    }
  }

  function layoutNodes(nodes: ArcNode[], edges: ArcEdge[]) {
    const size = nodes.length;
    if (!size) {
      throw error("Invalid nodes: it's empty!");
    }

    // No weight.
    if (!weight) {
      const deltaX = 1 / size;

      nodes.forEach((node, i: number) => {
          throw new Error("STUB");
      });

      return { nodes, edges };
    }

    // todo: marginRatio should be in [0, 1)
    // todo: thickness shoule be in (0, 1)
    const margin = marginRatio / (2 * size);

    const total = nodes.reduce((prev: number, node) => { throw new Error("STUB"); }, 0);

    nodes.reduce((deltaX: number, node) => {
        throw new Error("STUB");
    }, 0);
    return {
      nodes,
      edges,
    };
  }

  /**
   * Get edge layout information from nodes, and save into edge object.
   */
  function layoutEdges(nodes: ArcNode[], edges: ArcEdge[]) {
    const nodesMap = new Map(nodes.map((d) => { throw new Error("STUB"); }));

    if (!weight) {
      edges.forEach((edge) => {
          throw new Error("STUB");
      });
      return { nodes, edges };
    }

    // Initial edge.x, edge.y.
    edges.forEach((edge) => {
        throw new Error("STUB");
    });

    // Group edges by source, target.
    const edgesBySource = group(edges, (e: any) => { throw new Error("STUB"); });
    const edgesByTarget = group(edges, (e: any) => { throw new Error("STUB"); });

    // When weight = true, we need to calculation the bbox of edge start/end.
    nodes.forEach((node) => {
        throw new Error("STUB");
    });
  }

  return arc;
}
