import { deepMix } from '@antv/util';
import {
  CompositionComponent as CC,
  G2View,
  G2ViewTree,
  Node,
} from '../runtime';
import { RepeatMatrixComposition } from '../spec';
import { Container } from '../utils/container';
import { calcBBox } from '../utils/vector';
import { indexOf } from '../utils/array';
import {
  createInnerGuide,
  inferColor,
  setAnimation,
  setStyle,
  toCell,
} from './facetRect';
import { useDefaultAdaptor, useOverrideAdaptor } from './utils';

export type RepeatMatrixOptions = Omit<RepeatMatrixComposition, 'type'>;

const setScale = useDefaultAdaptor<G2ViewTree>((options) => {
    throw new Error("STUB");
});

const setChildren = useOverrideAdaptor<G2ViewTree>((options) => {
    throw new Error("STUB");
});

/**
 * @todo Use transform instead of override data directly.
 */
const setData = useOverrideAdaptor<G2ViewTree>((options: G2ViewTree) => {
    throw new Error("STUB");
});

function createGuideX(guideX) {
  if (typeof guideX === 'function') return guideX;
  if (guideX === null) return () => { throw new Error("STUB"); };
  return (facet, data) => {
      throw new Error("STUB");
  };
}

function createGuideY(guideY) {
  if (typeof guideY === 'function') return guideY;
  if (guideY === null) return () => { throw new Error("STUB"); };
  return (facet, data) => {
      throw new Error("STUB");
  };
}

/**
 * @todo Layout mode: layer, row, col...
 * @todo Specify show axis or not.
 */
export const RepeatMatrix: CC<RepeatMatrixComposition> = () => {
    throw new Error("STUB");
};
