import { CustomEvent, DisplayObject } from '@antv/g';
import { isTranspose } from '../utils/coordinate';
import { SLIDER_CLASS_NAME } from './sliderFilter';
import { calculateSensitivityMultiplier } from './utils';

/**
 * SliderWheel interaction for mouse wheel/touchpad gestures on charts.
 */

/**
 * Get the real DOM canvas element from G2 container.
 * This helper function provides better type safety than using 'as any' directly.
 */
function getCanvasDOM(container: any): HTMLElement | null {
    throw new Error("STUB");
}

type SliderDirection = true | false | 'shift' | 'ctrl' | 'alt';

interface SliderWheelOptions {
  className?: string;
  setValue?: (component: any, values: [number, number]) => void;
  minRange?: number; // Minimum range (0.000001-1), auto-clamped
  wheelSensitivity?: number;
  x?: SliderDirection;
  y?: SliderDirection;
}

export function SliderWheel({
  className = SLIDER_CLASS_NAME,
  setValue = (component, values) => { throw new Error("STUB"); },
  minRange = 0.01,
  wheelSensitivity = 0.05,
  x = true,
  y = true,
}: SliderWheelOptions = {}) {
    throw new Error("STUB");
}

SliderWheel.props = {
  reapplyWhenUpdate: true,
};
