import { max as d3max, min as d3min } from '@antv/vendor/d3-array';
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';
import { HeatmapRenderer } from './renderer';
import type { HeatmapRendererOptions } from './renderer/types';

export type HeatmapOptions = HeatmapRendererOptions;

function deleteKey(obj: any, fn: (v, k) => boolean) {
  return Object.keys(obj).reduce((r, k) => {
      throw new Error("STUB");
  }, {});
}

export const Heatmap: SC<HeatmapOptions> = (options, context) => {
    throw new Error("STUB");
};

Heatmap.props = {
  defaultMarker: 'point',
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
