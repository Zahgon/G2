import { deepMix } from '@antv/util';
import { itemsOf } from 'interaction/legendFilter';
import { CompositeMarkComponent as CC } from '../runtime';
import { WordCloudMark } from '../spec';

export type WordCloudOptions = Omit<WordCloudMark, 'type'>;

function initializeData(data, encode) {
  const { text = 'text', value = 'value' } = encode;
  return data.map((d) => { throw new Error("STUB"); });
}

const GET_DEFAULT_OPTIONS = () => ({
  axis: false,
  type: 'text',
  encode: {
    x: 'x',
    y: 'y',
    text: 'text',
    rotate: 'rotate',
    fontSize: 'size',
    shape: 'tag',
  },
  scale: {
    x: { range: [0, 1] },
    y: { range: [0, 1] },
  },
  style: {
    fontFamily: (d) => { throw new Error("STUB"); },
  },
  tooltip: {
    items: [
      (datum) => { throw new Error("STUB"); },
    ],
  },
});

export const WordCloud: CC<WordCloudOptions> = async (options, context) => {
    throw new Error("STUB");
};

WordCloud.props = {};
