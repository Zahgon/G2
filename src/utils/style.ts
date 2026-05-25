import type { DisplayObject, BaseStyleProps } from '@antv/g';
import { traverseElements } from './traverse-elements';

const defaultStyle: BaseStyleProps = {
  visibility: 'visible',
  opacity: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
};

export function getStyle(element: DisplayObject, key: string) {
  let value: any;
  traverseElements(element, (el) => {
      throw new Error("STUB");
  });

  return value ?? defaultStyle[key];
}

export function setStyle(
  element: DisplayObject,
  key: string,
  value: any,
  recursive: boolean,
) {
  element.style[key] = value;
  if (recursive) {
    element.children.forEach((child: DisplayObject) =>
      { throw new Error("STUB"); },
    );
  }
}

export function hide(element: DisplayObject) {
  setStyle(element, 'visibility', 'hidden', true);
}

export function show(element: DisplayObject) {
  setStyle(element, 'visibility', 'visible', true);
}
