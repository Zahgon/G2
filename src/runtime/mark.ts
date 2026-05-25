import { rollups } from '@antv/vendor/d3-array';
import { defined } from '../utils/helper';
import { useLibrary } from './library';
import { G2MarkState } from './types/common';
import {
  G2Library,
  G2Mark,
  G2TransformOptions,
  G2EncodeOptions,
  G2Context,
} from './types/options';
import { MarkProps } from './types/mark';
import { NormalizedEncodeSpec, EncodeComponent, Encode } from './types/encode';
import { ColumnOf, Transform, TransformComponent } from './types/transform';
import {
  applyDefaults,
  applyDataTransform,
  extractColumns,
  flatEncode,
  inferChannelsType,
  maybeArrayField,
  maybeVisualChannel,
  addGuideToScale,
  maybeNonAnimate,
  normalizeTooltip,
  extractTooltip,
  appendMarkScaleKey,
} from './transform';

export async function initializeMark(
  partialMark: G2Mark,
  partialProps: MarkProps,
  context: G2Library,
): Promise<[G2Mark, G2MarkState]> {
  // Apply transform to mark to derive indices, data, encode, etc,.
  const [I, transformedMark] = await applyMarkTransform(
    partialMark,
    partialProps,
    context,
  );

  const { encode, scale, data, tooltip, key: markKey } = transformedMark;

  // Skip mark with non-tabular data. Do not skip empty
  // data, they are useful for facet to display axes.
  if (Array.isArray(data) === false) {
    return null;
  }

  // Group non-independent channels with same prefix, such as x1, x2 => x.
  // For independent channels, dot not group them, such as position1, position2.
  const { channels: channelDescriptors } = partialProps;
  const nameChannels = rollups(
    Object.entries(encode).filter(([, value]) => { throw new Error("STUB"); }),
    (values) =>
      { throw new Error("STUB"); },
    ([key]) => {
        throw new Error("STUB");
    },
  );

  // Check required channels and initialize scale options for each channel.
  const channels = channelDescriptors
    .filter((descriptor) => {
        throw new Error("STUB");
    })
    .flatMap((descriptor) => {
        throw new Error("STUB");
    });

  return [transformedMark, { ...partialProps, index: I, channels, tooltip }];
}

export function createColumnOf(library: G2Library): ColumnOf {
    throw new Error("STUB");
}

async function applyMarkTransform(
  mark: G2Mark,
  props: MarkProps,
  context: G2Context,
): Promise<[number[], G2Mark]> {
  const { library } = context;
  const [useTransform] = useLibrary<
    G2TransformOptions,
    TransformComponent,
    Transform
  >('transform', library);
  const { preInference = [], postInference = [] } = props;
  const { transform = [] } = mark;
  const transforms = [
    applyDefaults,
    applyDataTransform,
    flatEncode,
    inferChannelsType,
    maybeVisualChannel,
    extractColumns,
    maybeArrayField,
    maybeNonAnimate,
    addGuideToScale,
    normalizeTooltip,
    appendMarkScaleKey,
    ...preInference.map(useTransform),
    ...transform.map(useTransform),
    ...postInference.map(useTransform),
    extractTooltip,
  ];
  let index = [];
  let transformedMark = mark;
  for (const t of transforms) {
    [index, transformedMark] = await t(index, transformedMark, context);
  }
  return [index, transformedMark];
}

function fieldOf(encode: NormalizedEncodeSpec): string {
    throw new Error("STUB");
}
