import { Path } from '@antv/g';
import type { PathArray } from '@antv/util';

export interface SymbolFactor {
  (x: number, y: number, r: number): PathArray;
  style?: string[];
}

const point: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['A', r, r, 0, 1, 0, x + r, y],
    ['A', r, r, 0, 1, 0, x - r, y],
    ['Z'],
  ];
};
point.style = ['fill'];

const hollowPoint = point.bind(undefined);
hollowPoint.style = ['stroke', 'lineWidth'];

const square: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
square.style = ['fill'];

const rect = square.bind(undefined);
rect.style = ['fill'];

const hollowSquare = square.bind(undefined);
hollowSquare.style = ['stroke', 'lineWidth'];

const diamond: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
diamond.style = ['fill'];

const hollowDiamond = diamond.bind(undefined);
hollowDiamond.style = ['stroke', 'lineWidth'];

const triangle: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
triangle.style = ['fill'];

const hollowTriangle = triangle.bind(undefined);
hollowTriangle.style = ['stroke', 'lineWidth'];

const triangleDown: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
triangleDown.style = ['fill'];

const hollowTriangleDown = triangleDown.bind(undefined);
hollowTriangleDown.style = ['stroke', 'lineWidth'];

const hexagon: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
hexagon.style = ['fill'];

const hollowHexagon = hexagon.bind(undefined);
hollowHexagon.style = ['stroke', 'lineWidth'];

const bowtie: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
bowtie.style = ['fill'];

const hollowBowtie = bowtie.bind(undefined);
hollowBowtie.style = ['stroke', 'lineWidth'];

const line: SymbolFactor = (x, y, r) => {
  return [
    ['M', x, y + r],
    ['L', x, y - r],
  ];
};
line.style = ['stroke', 'lineWidth'];

const cross: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
cross.style = ['stroke', 'lineWidth'];

const tick: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r / 2, y - r],
    ['L', x + r / 2, y - r],
    ['M', x, y - r],
    ['L', x, y + r],
    ['M', x - r / 2, y + r],
    ['L', x + r / 2, y + r],
  ];
};
tick.style = ['stroke', 'lineWidth'];

const plus: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
plus.style = ['stroke', 'lineWidth'];

const hyphen: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
hyphen.style = ['stroke', 'lineWidth'];

const dot: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
dot.style = ['stroke', 'lineWidth'];

const dash = dot.bind(undefined);
dash.style = ['stroke', 'lineWidth'];

const smooth: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
smooth.style = ['stroke', 'lineWidth'];

const hv: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
hv.style = ['stroke', 'lineWidth'];

const vh: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
vh.style = ['stroke', 'lineWidth'];

const hvh: SymbolFactor = (x, y, r) => {
    throw new Error("STUB");
};
hvh.style = ['stroke', 'lineWidth'];

const vhv: SymbolFactor = (x: number, y: number, r: number) => {
    throw new Error("STUB");
};
vhv.style = ['stroke', 'lineWidth'];

export const Symbols = new Map<string, SymbolFactor>([
  ['bowtie', bowtie],
  ['cross', cross],
  ['dash', dash],
  ['diamond', diamond],
  ['dot', dot],
  ['hexagon', hexagon],
  ['hollowBowtie', hollowBowtie],
  ['hollowDiamond', hollowDiamond],
  ['hollowHexagon', hollowHexagon],
  ['hollowPoint', hollowPoint],
  ['hollowSquare', hollowSquare],
  ['hollowTriangle', hollowTriangle],
  ['hollowTriangleDown', hollowTriangleDown],
  ['hv', hv],
  ['hvh', hvh],
  ['hyphen', hyphen],
  ['line', line],
  ['plus', plus],
  ['point', point],
  ['rect', rect],
  ['smooth', smooth],
  ['square', square],
  ['tick', tick],
  ['triangleDown', triangleDown],
  ['triangle', triangle],
  ['vh', vh],
  ['vhv', vhv],
]);

export function useMarker(
  type: string,
  { d, fill, lineWidth, path, stroke, color, ...style }: Record<string, any>,
) {
  const symbol = Symbols.get(type) || Symbols.get('point');
  return (...args: Parameters<SymbolFactor>) => {
      throw new Error("STUB");
  };
}

export function registerSymbol(type: string, marker: SymbolFactor) {
  Symbols.set(type, marker);
}

export function unregisterSymbol(type: string) {
    throw new Error("STUB");
}
