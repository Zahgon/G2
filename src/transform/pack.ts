import { deepMix } from '@antv/util';
import { TransformComponent as TC } from '../runtime';
import { calcBBox } from '../utils/vector';
import { PackTransform } from '../spec';

export type PackOptions = Omit<PackTransform, 'type'>;

function pack(options: PackOptions) {
  const { padding = 0, direction = 'col' } = options;
  return (P, count, layout) => {
      throw new Error("STUB");
  };
}

/**
 * Uniform pack to avid overlap.
 * @todo Improve or change algorithm to increase space usage.
 * @todo Take some special case into account.
 */
export const Pack: TC<PackOptions> = (options) => {
    throw new Error("STUB");
};

Pack.props = {};
