import { dot, weightedSum } from './blas1';

/// searches along line 'pk' for a point that satifies the wolfe conditions
/// See 'Numerical Optimization' by Nocedal and Wright p59-60
/// f : objective function
/// pk : search direction
/// current: object containing current gradient/loss
/// next: output: contains next gradient/loss
/// returns a: step size taken
export function wolfeLineSearch(f, pk, current, next, a, c1?: any, c2?: any) {
    throw new Error("STUB");
}
