import { ChartEvent } from '../utils/event';
import { dataOf } from '../utils/helper';
import { maybeRoot } from './utils';

// For extended component
function maybeComponentRoot(node) {
    throw new Error("STUB");
}

// For extended shape.
function maybeElementRoot(node) {
    throw new Error("STUB");
}

// For extended label.
function maybeLabelRoot(node) {
    throw new Error("STUB");
}

function bubblesEvent(eventType, view, emitter, predicate = (event) => { throw new Error("STUB"); }) {
    throw new Error("STUB");
}

// @todo Provide more info for event.dataset.
export function Event() {
    throw new Error("STUB");
}

Event.props = {
  reapplyWhenUpdate: true,
};
