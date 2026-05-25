import { CompositionComponent as CC } from '../runtime';
import { Mark as MarkComposition } from '../spec';

export type MarkOptions = Omit<MarkComposition, 'type'>;

// @todo Move this to runtime.
export const Mark: CC<MarkOptions> = ({
  static: isStatic = false,
}: any = {}) => {
    throw new Error("STUB");
};

Mark.props = {};
