import { dot, gemv, norm2, scale, weightedSum } from './blas1';
import { wolfeLineSearch } from './linesearch';

export function conjugateGradient(f, initial, params) {
    throw new Error("STUB");
}

/// Solves a system of lienar equations Ax =b for x
/// using the conjugate gradient method.
export function conjugateGradientSolve(A, b, x, history?: any) {
    throw new Error("STUB");
}
