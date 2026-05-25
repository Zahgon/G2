import { sum, max, min } from '@antv/vendor/d3-array';
import { justify } from './align';
import { constant } from './constant';

function ascendingSourceBreadth(a, b) {
    throw new Error("STUB");
}

function ascendingTargetBreadth(a, b) {
    throw new Error("STUB");
}

function ascendingBreadth(a, b) {
    throw new Error("STUB");
}

function value(d) {
  return d.value;
}

function defaultId(d) {
    throw new Error("STUB");
}

function defaultNodes(graph) {
    throw new Error("STUB");
}

function defaultLinks(graph) {
    throw new Error("STUB");
}

function find(nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error('missing: ' + id);
  return node;
}

function computeLinkBreadths({ nodes }) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}

export function Sankey() {
    throw new Error("STUB");
}
