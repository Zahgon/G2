import { DisplayObject, HTML } from '@antv/g';
import { kebabCase } from '../utils/string';
import { subObject } from '../utils/helper';

function dom(tag, children, style) {
    throw new Error("STUB");
}

const defaultTipStyle = {
  backgroundColor: 'rgba(0,0,0,0.75)',
  color: '#fff',
  width: 'max-content',
  padding: '1px 4px',
  fontSize: '12px',
  borderRadius: '2.5px',
  boxShadow:
    '0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05)',
};

function isTipText(element) {
    throw new Error("STUB");
}

export function Poptip({ offsetX = 8, offsetY = 8, ...style }) {
    throw new Error("STUB");
}

Poptip.props = {
  reapplyWhenUpdate: true,
};
