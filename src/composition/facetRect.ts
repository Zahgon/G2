import { deepMix } from '@antv/util';
import { extent, group, max } from '@antv/vendor/d3-array';
import {
  CompositionComponent as CC,
  G2MarkChildrenCallback,
  G2ViewTree,
  Node,
} from '../runtime';
import { FacetRectComposition } from '../spec';
import { calcBBox } from '../utils/vector';
import { Container } from '../utils/container';
import { indexOf } from '../utils/array';
import { useDefaultAdaptor, useOverrideAdaptor } from './utils';

export type SubLayout = (data?: any) => number[];

const setScale = useDefaultAdaptor<G2ViewTree>((options) => {
    throw new Error("STUB");
});

/**
 * BFS view tree and using the last discovered color encode
 * as the top-level encode for this plot. This is useful when
 * color encode and color scale is specified in mark node.
 * It makes sense because the whole facet should shared the same
 * color encoding, but it also can be override with explicity
 * encode and scale specification.
 */
export const inferColor = useOverrideAdaptor<G2ViewTree>(
  (options: G2ViewTree) => {
        throw new Error("STUB");
    },
);

export const setAnimation = useDefaultAdaptor<G2ViewTree>(() => { throw new Error("STUB"); });

export const setStyle = useOverrideAdaptor<G2ViewTree>(() => { throw new Error("STUB"); });

export const toCell = useOverrideAdaptor<G2ViewTree>(() => { throw new Error("STUB"); });

/**
 * Do not set cell data directly, the children will get wrong do if do
 * so. Use transform to set new data.
 **/
export const setData = useOverrideAdaptor<G2ViewTree>((options) => {
    throw new Error("STUB");
});

/**
 * @todo Move some options assignment to runtime.
 */
export const setChildren = useOverrideAdaptor<G2ViewTree>(
  (
    options,
    subLayout: SubLayout = subLayoutRect,
    createGuideX = createGuideXRect,
    createGuideY = createGuideYRect,
    childOptions = {},
  ) => {
        throw new Error("STUB");
    },
);

function subLayoutRect(data) {
    throw new Error("STUB");
}

/**
 * Inner guide not show title, tickLine, label and subTickLine,
 * if data is empty, do not show guide.
 */
export function createInnerGuide(guide, data) {
  return data.length
    ? deepMix(
        {
          title: false,
          tick: null,
          label: null,
        },
        guide,
      )
    : deepMix(
        {
          title: false,
          tick: null,
          label: null,
          grid: null,
        },
        guide,
      );
}

function createGuideXRect(guide) {
    throw new Error("STUB");
}

function createGuideYRect(guide) {
    throw new Error("STUB");
}

function createGuide(guide, factory) {
  if (typeof guide === 'function') return guide;
  if (guide === null || guide === false) return () => { throw new Error("STUB"); };
  return factory(guide);
}

export type FacetRectOptions = Omit<FacetRectComposition, 'type'>;

export const FacetRect: CC<FacetRectOptions> = () => {
    throw new Error("STUB");
};

FacetRect.props = {};
