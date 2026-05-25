import { DataComponent as DC } from '../runtime';
import { InlineConnector } from '../spec';

export type InlineOptions = Omit<InlineConnector, 'type'>;

export const Inline: DC<InlineOptions> = (options) => {
    throw new Error("STUB");
};

Inline.props = {};
