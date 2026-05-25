/**
 * camelCase('foo-bar');
 * // => 'fooBar'
 * @param s
 */
export function camelCase(s: string) {
  return s.replace(/-(\w)/g, function (_, letter) {
      throw new Error("STUB");
  });
}

/**
 * kebabCase('fooBar');
 * // => 'foo-bar'
 * @param s
 */
export function kebabCase(s: string) {
    throw new Error("STUB");
}
