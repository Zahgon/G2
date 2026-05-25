/**
 * @param x center x
 * @param y center y
 * @param radius
 */
function circle(x: number, y: number, r: number) {
    throw new Error("STUB");
}

/**
 * @param x center x
 * @param y center y
 * @param radius
 */
function rect(x: number, y: number, r: number) {
  const GOLDEN_SECTION_RATIO = 0.618;
  const w = r * GOLDEN_SECTION_RATIO;
  return `
      M ${x - w} ${y - r}
      L ${x + w} ${y - r}
      L ${x + w} ${y + r}
      L ${x - w} ${y + r}
      Z
    `;
}

/**
 * @param x center x
 * @param y center y
 * @param radius
 */
function diamond(x: number, y: number, r: number) {
    throw new Error("STUB");
}

/**
 * @param x center x
 * @param y center y
 * @param radius
 */
function triangle(x: number, y: number, r: number) {
    throw new Error("STUB");
}

/**
 * @param x center x
 * @param y center y
 * @param radius
 */
function pin(x: number, y: number, radius: number) {
    throw new Error("STUB");
}

export const LiquidShapesPath = {
  pin,
  rect,
  circle,
  diamond,
  triangle,
};
