import { DisplayObject } from '@antv/g';
import { ascending } from '@antv/vendor/d3-array';
import { OverlapDodgeYLabelTransform } from '../spec';
import { LabelTransformComponent as LLC } from '../runtime';

export type OverlapDodgeYOptions = Omit<OverlapDodgeYLabelTransform, 'type'>;

function isSegmentIntersect([a, b], [c, d]) {
  return d > a && b > c;
}

function useMap<K, V>() {
  const map = new Map<K, V>();
  const get = (key: K) => map.get(key);
  const set = (key: K, value: V) => map.set(key, value);
  return [get, set] as const;
}

function getBoundsWithoutConnector(shape: DisplayObject) {
  const node = shape.cloneNode(true);
  const connectorShape = node.getElementById('connector');
  connectorShape && node.removeChild(connectorShape);
  const { min, max } = node.getRenderBounds();
  node.destroy();
  return { min, max };
}

/**
 * An iterative dodge method avoids label overlap. (n * log(n))
 */
export const OverlapDodgeY: LLC<OverlapDodgeYOptions> = (options) => {
    throw new Error("STUB");
};
