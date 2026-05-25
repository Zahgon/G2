import { G2View } from '../runtime';

type Size = {
  width: number;
  height: number;
  depth?: number;
};

const parseInt10 = (d: string) => (d ? parseInt(d) : 0);

/**
 * @description Get the element's bounding size.
 * @param container dom element.
 * @returns the element width and height
 */
export function getContainerSize(container: HTMLElement): Size {
  // size = width/height - padding.

  const style = getComputedStyle(container);

  const wrapperWidth = container.clientWidth || parseInt10(style.width);
  const wrapperHeight = container.clientHeight || parseInt10(style.height);

  const widthPadding =
    parseInt10(style.paddingLeft) + parseInt10(style.paddingRight);
  const heightPadding =
    parseInt10(style.paddingTop) + parseInt10(style.paddingBottom);

  return {
    width: wrapperWidth - widthPadding,
    height: wrapperHeight - heightPadding,
  };
}

/**
 * @description Calculate the real canvas size by view options.
 */
export function getBBoxSize(options: G2View): Size {
    throw new Error("STUB");
}
