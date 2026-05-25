import { CompositionComponent as CC, G2ViewTree } from '../runtime';
import { FacetCircleComposition } from '../spec';
import { Container } from '../utils/container';
import { angleWithQuadrant, angleBetween, dist, sub } from '../utils/vector';
import {
  inferColor,
  setAnimation,
  setStyle,
  toCell,
  setChildren,
  setData,
} from './facetRect';
import { useDefaultAdaptor } from './utils';

export type FacetCircleOptions = Omit<FacetCircleComposition, 'type'>;

const setScale = useDefaultAdaptor<G2ViewTree>((options) => {
    throw new Error("STUB");
});

const setCoordinate = useDefaultAdaptor((options: G2ViewTree) => {
    throw new Error("STUB");
});

const setEncode = (options) => {
    throw new Error("STUB");
};

/**
 * Every facet should do not show both axisX and axisY by default.
 */
function createGuideFacetCircle(guide) {
    throw new Error("STUB");
}

/**
 * Use the inscribed circle of the sector as the
 * circumscribed circle of the new bbox.
 */
function subLayoutFacetCircle(data) {
    throw new Error("STUB");
}

/**
 * @todo Pack.
 */
export const FacetCircle: CC<FacetCircleComposition> = () => {
    throw new Error("STUB");
};
