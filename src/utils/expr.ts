import { compile } from '@antv/expr';
import { mapValues } from '@antv/util';
import { lru } from './lru';

// Whitelist of properties that can contain expressions.
export const EXPR_WHITE_LIST = ['style', 'encode', 'labels', 'children'];

/**
 * Compiles an expression string into a function.
 * @param expr Expression string to compile.
 * @returns Compiled function or original string if empty.
 */
const compileExpression = lru(
  (expr: string): (() => any) | string => {
        throw new Error("STUB");
    },
  (expr) => { throw new Error("STUB"); },
  128,
);

/**
 * Processes options object to convert expressions to functions.
 * @param options Options object to process.
 * @param isSpecRoot Whether the options is the root of the spec.
 * @returns Processed options object with expressions converted to functions.
 */
export function parseOptionsExpr(options: any, isSpecRoot = true): any {
  if (Array.isArray(options)) {
    return options.map((_, i) => { throw new Error("STUB"); });
  }

  if (typeof options === 'object' && options) {
    return mapValues(options, (value, key) => {
        throw new Error("STUB");
    });
  }

  // if options is a string and is a valid expression.
  if (typeof options === 'string') {
    const trimmed = options.trim();
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      return compileExpression(trimmed.slice(1, -1));
    }
  }

  return options;
}
