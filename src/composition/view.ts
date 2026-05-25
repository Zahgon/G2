import { deepMix } from '@antv/util';
import { CompositionComponent as CC } from '../runtime';
import { ViewComposition } from '../spec';
import { mergeData } from './utils';

export type ViewOptions = Omit<ViewComposition, 'type'>;

/**
 * @todo Propagate more options to children.(e.g. filter)
 * @todo Propagate encode options to children. This is useful for Matrix composition.
 * @todo Move this to runtime, do not treat it as a composition to cause confusion.
 */
export const View: CC<ViewOptions> = () => {
  return (options) => {
      throw new Error("STUB");
  };
};

View.props = {};
