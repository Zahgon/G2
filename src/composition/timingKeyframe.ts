import { deepMix } from '@antv/util';
import { CompositionComponent as CC, G2ViewTree } from '../runtime';
import { TimingKeyframeComposition } from '../spec';

export type TimingKeyframeOptions = Omit<TimingKeyframeComposition, 'type'>;

function range(
  direction: TimingKeyframeComposition['direction'],
  iterationCount: number,
  keyframeCount: number,
): [number, number] {
  const start = 0;
  const end = keyframeCount;
  const normal: [number, number] = [start, end];
  const reverse: [number, number] = [-end + 1, -start + 1];
  if (direction === 'normal') return normal;
  if (direction === 'reverse') return reverse;
  if (direction === 'alternate') {
    return iterationCount % 2 === 0 ? normal : reverse;
  }
  if (direction === 'reverse-alternate') {
    return iterationCount % 2 === 0 ? reverse : normal;
  }
}

/**
 * Set animation options for all descendants.
 */
function setAnimation(node: G2ViewTree, duration: number, easing: string) {
  const discovered = [node];
  while (discovered.length) {
    const n = discovered.pop();
    n.animate = deepMix(
      {
        enter: {
          duration,
        },
        update: {
          duration,
          easing,
          type: 'morphing',
          fill: 'both',
        },
        exit: {
          type: 'fadeOut',
          duration,
        },
      },
      n.animate || {},
    );
    const { children } = n;
    if (Array.isArray(children)) discovered.push(...children);
  }
  return node;
}

/**
 * @todo More options, such as fill, totalDuration...
 */
export const TimingKeyframe: CC<TimingKeyframeOptions> = () => {
    throw new Error("STUB");
};

TimingKeyframe.props = {};
