import { Path } from '@antv/g';
import { get, deepMix, set } from '@antv/util';
import type { PathStyleProps } from '@antv/g';
import {
  BREAK_GROUP_CLASS_NAME,
  PLOT_CLASS_NAME,
} from '../../runtime/constant';

export const BREAKS_GAP = 0.03; // Default gap ratio for axis breaks

export type BreakOptions = {
  /** Start position of the break. */
  start: number;
  /** End position of the break. */
  end: number;
  /** Gap ratio of the break, default is 0.1. */
  gap?: number;
  /** Number of wave vertices, default is 50. */
  vertices?: number;
  /** Offset of each vertex, default is 3. */
  verticeOffset?: number;
  /** Compression type of the break, default is 'middle'. */
  compress?: 'start' | 'end' | 'middle';
  /** Custom styles of the break. */
  [key: string]: any;
};

const DEFAULT_STYLE = {
  fill: '#fff',
  stroke: '#aaa',
  lineDash: '4 3',
  lineWidth: 0.5,
  fillOpacity: 1,
  strokeOpacity: 1,
};

const PADDING = 0;

/**
 * Create path points and corresponding clip paths.
 * @param y baseline Y coordinate
 * @param width total width of the path
 * @param offset vertical offset of wave
 * @param vertices number of generated points
 * @param isLowerBoundary whether it is the lower boundary
 * @param lineWidth line width of path
 * @returns tuple of [pathPoints, clipPoints]
 */
const createPathPoints = (
  y: number,
  width: number,
  offset: number,
  vertices: number,
  isLowerBoundary: boolean,
  lineWidth: number,
) => {
  const pathPoints: string[] = [];
  const clipPoints: string[] = [];
  const segments = vertices - 1;

  for (let i = 1; i < segments; i++) {
    const x = (i / segments) * width;
    const offsetY = y + (i % 2 === 0 ? offset : -offset);

    pathPoints.push(`${x},${offsetY}`);
    clipPoints.push(
      `${x},${isLowerBoundary ? offsetY - lineWidth : offsetY + lineWidth}`,
    );
  }

  // Ensure last point reaches width
  pathPoints.push(`${width},${y}`);
  clipPoints.push(`${width + lineWidth},${y}`);

  return [pathPoints, clipPoints] as const;
};

export const AxisBreaks = (_, params) => {
    throw new Error("STUB");
};

AxisBreaks.props = {};
