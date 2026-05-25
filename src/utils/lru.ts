import flru from 'flru';

const cache = flru(3);
/**
 * A decorator to return new function with LRU cache.
 */
export function lru<T = any, V = any>(
  fn: (...args: T[]) => V,
  keyFn: (...args: T[]) => string = (...args) => { throw new Error("STUB"); },
  maxSize = 16,
) {
  const cache = flru(maxSize);

  return (...args) => {
      throw new Error("STUB");
  };
}
