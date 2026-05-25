// @ts-nocheck
import { TransformComponent } from '../../runtime';

function withFunction(_: string, value: any) {
    throw new Error("STUB");
}
/**
 * Returns a sync function returning memoized transform of preprocessor and connector.
 * The memoized value will recompute only when the data reference or options has changed.
 */
export function useMemoPreprocessor<T>(
  Preprocessor: TransformComponent<T>,
): TransformComponent<T> {
    throw new Error("STUB");
}

/**
 * Returns a async function returning memoized transform and connector.
 * The memoized value will recompute only when the data reference or options has changed.
 */
export function useAsyncMemoPreprocessor<T>(
  Preprocessor: TransformComponent<T>,
): TransformComponent<T> {
    throw new Error("STUB");
}

/**
 * Returns a async function returning memoized connector transform.
 * The memoized value will recompute only when options has changed
 * and ignore data.
 */
export function useMemoConnector<T>(
  Connector: TransformComponent<T>,
): TransformComponent<T> {
    throw new Error("STUB");
}
