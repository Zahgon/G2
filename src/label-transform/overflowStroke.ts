import { DisplayObject } from '@antv/g';
import { OverflowStrokeTransform } from '../spec';
import { LabelTransformComponent as LLC } from '../runtime';
import { parseToRGB } from '../utils/color';
import { isOverflow, parseAABB } from '../utils/bounds';
import { bboxOf } from '../interaction/utils';
import { mostContrast } from './utils';

export type OverflowStrokeOptions = Omit<OverflowStrokeTransform, 'type'>;

/**
 * Get bounds of element considering animation state.
 * If element has animations, get the final state bounds.
 */
function getBoundsWithAnimation(element: DisplayObject) {
  const animations = element.getAnimations();

  // If no animations, use regular bboxOf.
  if (!animations || animations.length === 0) {
    return bboxOf(element);
  }

  // Clone element and apply final animation state.
  const cloneElement = element.cloneNode(true) as DisplayObject;
  cloneElement.style.visibility = 'hidden';

  animations.forEach((animation) => {
      throw new Error("STUB");
  });

  element.parentNode?.appendChild(cloneElement);
  const bounds = bboxOf(cloneElement);
  cloneElement.destroy();

  return bounds;
}

/**
 * Reverse label stroke against label color.
 * More about contract, see https://webaim.org/resources/contrastchecker/
 */
export const OverflowStroke: LLC<OverflowStrokeOptions> = (options) => {
    throw new Error("STUB");
};
