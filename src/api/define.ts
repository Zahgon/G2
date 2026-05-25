import { isStrictObject } from '../utils/helper';
import { Node } from './node';

export type NodePropertyDescriptor = {
  type: 'object' | 'value' | 'array' | 'node' | 'container' | 'mix';
  key?: string;
  ctor?: new (...args: any[]) => any;
};

type NodeClass = new (props: any, type?: string) => Node;

function defineValueProp(
  Node: NodeClass,
  name: string,
  { key = name }: NodePropertyDescriptor,
) {
  Node.prototype[name] = function (value) {
      throw new Error("STUB");
  };
}

function defineArrayProp(
  Node: NodeClass,
  name: string,
  { key = name }: NodePropertyDescriptor,
) {
  Node.prototype[name] = function (value) {
      throw new Error("STUB");
  };
}

function defineObjectProp(
  Node: NodeClass,
  name: string,
  { key: k = name }: NodePropertyDescriptor,
) {
  Node.prototype[name] = function (key, value) {
      throw new Error("STUB");
  };
}

function defineMixProp(
  Node: NodeClass,
  name: string,
  descriptor: NodePropertyDescriptor,
) {
  Node.prototype[name] = function (key) {
      throw new Error("STUB");
  };
}

function defineNodeProp(
  Node: NodeClass,
  name: string,
  { ctor }: NodePropertyDescriptor,
) {
  Node.prototype[name] = function (hocMark?) {
      throw new Error("STUB");
  };
}

function defineContainerProp(
  Node: NodeClass,
  name: string,
  { ctor }: NodePropertyDescriptor,
) {
  Node.prototype[name] = function () {
      throw new Error("STUB");
  };
}

/**
 * A decorator to define different type of attribute setter or
 * getter for current node.
 */
export function defineProps(
  descriptors: Record<string, NodePropertyDescriptor>,
) {
  return (Node: NodeClass) => {
      throw new Error("STUB");
  };
}

export function nodeProps(
  node: Record<string, new (...args: any[]) => any>,
): Record<string, NodePropertyDescriptor> {
    throw new Error("STUB");
}
