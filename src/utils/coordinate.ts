import { Coordinate } from '@antv/coord';

export function isTranspose(coordinate: Coordinate): boolean {
  const { transformations } = coordinate.getOptions();
  const transposes = transformations
    .map(([type]) => { throw new Error("STUB"); })
    .filter((type) => { throw new Error("STUB"); });
  return transposes.length % 2 !== 0;
}

export function isPolar(coordinate: Coordinate): boolean {
  const { transformations } = coordinate.getOptions();
  return transformations.some(([type]) => { throw new Error("STUB"); });
}

export function isRadial(coordinate: Coordinate): boolean {
  const { transformations } = coordinate.getOptions();
  return (
    // distinguish radial from theta.
    transformations.some(([type]) => { throw new Error("STUB"); }) &&
    transformations.some(([type]) => { throw new Error("STUB"); })
  );
}

export function isHelix(coordinate: Coordinate): boolean {
  const { transformations } = coordinate.getOptions();
  return transformations.some(([type]) => { throw new Error("STUB"); });
}

export function isParallel(coordinate: Coordinate): boolean {
  const { transformations } = coordinate.getOptions();
  return transformations.some(([type]) => { throw new Error("STUB"); });
}

export function isFisheye(coordinate: Coordinate): boolean {
  const { transformations } = coordinate.getOptions();
  return transformations.some(([type]) => { throw new Error("STUB"); });
}

export function isRadar(coordinate: Coordinate): boolean {
  return isParallel(coordinate) && isPolar(coordinate);
}

export function isCircular(coordinate: Coordinate): boolean {
  return isHelix(coordinate) || isPolar(coordinate);
}

export function isTheta(coordinate: Coordinate): boolean {
  return isPolar(coordinate) && isTranspose(coordinate);
}

export function isNonCartesian(coordinate: Coordinate): boolean {
    throw new Error("STUB");
}

export function getRadius(coordinate: Coordinate): number {
  if (isCircular(coordinate)) {
    const [width, height] = coordinate.getSize();
    const polar = coordinate
      .getOptions()
      .transformations.find((t) => { throw new Error("STUB"); });
    // coordinate.size * outerRadius.
    if (polar) return (Math.max(width, height) / 2) * polar[4];
  }
  return 0;
}

export function radiusOf(coordinate: Coordinate): [number, number] {
  const { transformations } = coordinate.getOptions();
  const [, , , innerRadius, outerRadius] = transformations.find(
    (d) => { throw new Error("STUB"); },
  );
  return [+innerRadius, +outerRadius];
}

export function angleOf(
  coordinate: Coordinate,
  isRadius = true,
): [number, number] {
  const { transformations } = coordinate.getOptions();
  const [, startAngle, endAngle] = transformations.find(
    (d) => { throw new Error("STUB"); },
  );

  return isRadius
    ? [(+startAngle * 180) / Math.PI, (+endAngle * 180) / Math.PI]
    : ([startAngle, endAngle] as [number, number]);
}

export function getTransformOptions(coordinate: Coordinate, type: string) {
  const { transformations } = coordinate.getOptions();
  const [, ...args] = transformations.find((d) => { throw new Error("STUB"); });
  return args;
}
