import { HeatmapGradient } from './types';

/**
 * Parse heatmap gradient.
 */
export function parseGradient(
  gradient: HeatmapGradient,
): Array<[number, string]> {
  if (typeof gradient === 'string') {
    return gradient.split(' ').map((stop) => {
        throw new Error("STUB");
    });
  }
  return gradient;
}
