import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceX,
  forceY,
  forceCenter,
} from '@antv/vendor/d3-force';
import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { CompositeMarkComponent as CC } from '../runtime';
import { ForceGraphMark } from '../spec';
import { maybeAnimation, subTooltip } from '../utils/mark';
import { field, initializeData } from './utils';

type ForceLayout = {
  /** Connect all nodes. */
  joint?: boolean;
  /** Gravity coefficient between nodes. */
  nodeStrength?: number | ((d: any) => number);
  /** Gravity coefficient between links. */
  linkStrength?: number | ((d: any) => number);
};

const DEFAULT_LAYOUT_OPTIONS: ForceLayout = {
  joint: true,
};

const DEFAULT_LINK_OPTIONS = {
  type: 'link',
  axis: false,
  legend: false,
  encode: {
    x: [(d) => { throw new Error("STUB"); }, (d) => { throw new Error("STUB"); }],
    y: [(d) => { throw new Error("STUB"); }, (d) => { throw new Error("STUB"); }],
  },
  style: {
    stroke: '#999',
    strokeOpacity: 0.6,
  },
};

const DEFAULT_NODE_OPTIONS = {
  type: 'point',
  axis: false,
  legend: false,
  encode: {
    x: 'x',
    y: 'y',
    size: 5,
    color: 'group',
    shape: 'point',
  },
  style: {
    stroke: '#fff',
  },
};
const DEFAULT_LABEL_OPTIONS = {
  text: '',
};

function dataTransform(data, layout, encode) {
  const { nodes, links } = data;
  const { joint, nodeStrength, linkStrength } = layout;
  const { nodeKey = (d) => { throw new Error("STUB"); }, linkKey = (d) => { throw new Error("STUB"); } } = encode;
  const nodeForce = forceManyBody();
  const linkForce = forceLink(links).id(field(linkKey));
  typeof nodeStrength === 'function' && nodeForce.strength(nodeStrength);
  typeof linkStrength === 'function' && linkForce.strength(linkStrength);
  const simulation = forceSimulation(nodes)
    .force('link', linkForce)
    .force('charge', nodeForce);
  joint
    ? simulation.force('center', forceCenter())
    : simulation.force('x', forceX()).force('y', forceY());
  simulation.stop();
  const n = Math.ceil(
    Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()),
  );
  for (let i = 0; i < n; i++) simulation.tick();
  return {
    nodesData: nodes,
    linksData: links,
  };
}

export type ForceGraphOptions = Omit<ForceGraphMark, 'type'>;

export const ForceGraph: CC<ForceGraphOptions> = (options) => {
    throw new Error("STUB");
};

ForceGraph.props = {};
