import { deepMix, pick } from '@antv/util';
import { CompositeMarkComponent } from '../runtime';
import { BaseMark, ChannelTypes, PartitionNode } from '../spec';
export type PartitionMark = BaseMark<'rect', 'value' | ChannelTypes>;

export interface PartitionDataNode {
  data: PartitionNode;
  depth: number;
  parent: PartitionDataNode | null;
  children: PartitionDataNode[];
  x0: number;
  x1: number;
  value: number;
}

export interface LayoutOptions {
  valueField?: string;
  sort?: (a: PartitionNode, b: PartitionNode) => number;
  fillParent?: boolean; // Whether child nodes fill parent width.
  nameField?: string;
}

/**
 * Partition layout algorithm.
 * Child nodes start layout from the parent's starting position to show parent-child relationships.
 *
 * @param data Hierarchical data
 * @param options Configuration options
 */
export function partitionLayout(
  data: PartitionNode[],
  options: LayoutOptions = {},
) {
  const {
    valueField = 'value',
    sort,
    fillParent = true,
    nameField = 'name',
  } = options;

  if (!data || data.length === 0) return [];

  // Build hierarchical structure
  const buildPartition = (
    node: PartitionNode,
    parent: PartitionDataNode | null = null,
    depth = 0,
  ): PartitionDataNode => {
    const partitionNode: PartitionDataNode = {
      data: node,
      depth,
      parent,
      children: [],
      x0: 0,
      x1: 0,
      value: node[valueField] || 0,
    };

    if (node.children && node.children.length > 0) {
      partitionNode.children = node.children.map((child: PartitionNode) =>
        { throw new Error("STUB"); },
      );
    }

    return partitionNode;
  };

  // Process each root node
  const result: Array<Record<string, any>> = [];
  let currentRootStartX = 0; // Track the starting position for the next root node

  data.forEach((rootData: PartitionNode) => {
      throw new Error("STUB");
  });

  return result;
}

export type PartitionData = PartitionNode[];

export type PartitionOptions = Omit<PartitionMark, 'type'> & {
  fillParent?: boolean; // Whether child nodes fill parent width.
};

export const PARTITION_TYPE = 'partition';
export const PARTITION_TYPE_FIELD = 'markType';
export const PARTITION_PATH_FIELD = 'path';
export const PARTITION_ANCESTOR_FIELD = 'ancestor-node';
export const CHILD_NODE_COUNT = 'childNodeCount';

export function transformData(
  options: Pick<PartitionOptions, 'data' | 'encode'> & {
    fillParent?: boolean;
    sort?: (a: PartitionNode, b: PartitionNode) => number;
  },
) {
  const { data, encode, fillParent, sort } = options;
  const { color, value, name } = encode as any;

  const nodes = partitionLayout(data, {
    valueField: value,
    fillParent,
    nameField: name,
    sort,
  });

  return nodes.map((node: Record<string, any>) => {
      throw new Error("STUB");
  });
}

const DEFAULT_OPTIONS = {
  id: PARTITION_TYPE,
  encode: {
    x: 'x',
    y: 'y',
    key: PARTITION_PATH_FIELD,
    color: PARTITION_ANCESTOR_FIELD,
    value: 'value',
    name: 'name',
  },
  labels: [
    {
      style: {
        pointerEvents: 'none',
      },
      text: 'value',
      position: 'inside',
      transform: [
        {
          type: 'overflowHide',
        },
      ],
    },
  ],
  axis: {
    x: { title: 'Time/Order', label: true },
    y: false,
  },
  style: {
    [PARTITION_TYPE_FIELD]: PARTITION_TYPE,
    [CHILD_NODE_COUNT]: 'childNodeCount', // Add child node count attribute for drill-down interaction.
  },
  state: {
    active: { zIndex: 2 },
    inactive: { zIndex: 1 },
  },
  legend: false,
  coordinate: {
    type: 'cartesian',
    grid: false, // Remove grid lines.
  },
  interaction: {
    drillDown: true,
  },
};

export const Partition: CompositeMarkComponent<PartitionOptions> = (
  options,
) => {
    throw new Error("STUB");
};

Partition.props = {};
