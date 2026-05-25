import { Vector2 } from '@antv/coord';
import { DisplayObject, IAnimation as GAnimation, Rect } from '@antv/g';
import { deepMix, upperFirst, isArray, get } from '@antv/util';
import { group, groups } from '@antv/vendor/d3-array';
import { format } from '@antv/vendor/d3-format';
import { mapObject } from '../utils/array';
import { ChartEvent } from '../utils/event';
import {
  isStrictObject,
  appendTransform,
  compose,
  copyAttributes,
  defined,
  error,
  maybeSubObject,
  subObject,
  useMemo,
} from '../utils/helper';
import { G2Element, select, Selection } from '../utils/selection';
import {
  groupComponents,
  inferComponent,
  normalizeComponents,
  renderComponent,
} from './component';
import {
  AREA_CLASS_NAME,
  COMPONENT_CLASS_NAME,
  ELEMENT_CLASS_NAME,
  LABEL_CLASS_NAME,
  LABEL_LAYER_CLASS_NAME,
  MAIN_LAYER_CLASS_NAME,
  PLOT_CLASS_NAME,
  VIEW_CLASS_NAME,
  BREAK_CLASS_NAME,
  BREAK_GROUP_CLASS_NAME,
} from './constant';
import { coordinate2Transform, createCoordinate } from './coordinate';
import {
  computeLayout,
  computeRoughPlotSize,
  placeComponents,
  processAxisZ,
} from './layout';
import { documentOf, useLibrary } from './library';
import { initializeMark } from './mark';
import {
  applyScale,
  assignScale,
  collectScales,
  inferScale,
  syncFacetsScales,
  useRelationScale,
  groupTransform,
} from './scale';
import { applyDataTransform } from './transform';
import {
  G2MarkState,
  G2Theme,
  G2ViewDescriptor,
  G2ViewInstance,
  Primitive,
} from './types/common';
import {
  Animation,
  AnimationComponent,
  Composition,
  CompositionComponent,
  Interaction,
  InteractionComponent,
  LabelTransform,
  LabelTransformComponent,
  Scale,
  Shape,
  ShapeComponent,
  Theme,
  ThemeComponent,
} from './types/component';
import { Mark, MarkComponent, SingleMark } from './types/mark';
import {
  G2AnimationOptions,
  G2CompositionOptions,
  G2Context,
  G2GuideComponentOptions,
  G2InteractionOptions,
  G2LabelTransformOptions,
  G2Library,
  G2Mark,
  G2MarkOptions,
  G2ScaleOptions,
  G2ShapeOptions,
  G2ThemeOptions,
  G2View,
  G2ViewTree,
} from './types/options';

type Store = Map<any, (options: G2ViewTree) => G2ViewTree>;

export async function plot<T extends G2ViewTree>(
  options: T,
  selection: Selection,
  context: G2Context,
): Promise<any> {
  const { library } = context;

  const [useComposition] = useLibrary<
    G2CompositionOptions,
    CompositionComponent,
    Composition
  >('composition', library);
  const [useInteraction] = useLibrary<
    G2InteractionOptions,
    InteractionComponent,
    Interaction
  >('interaction', library);

  // Some helper functions.
  const marks = new Set(
    Object.keys(library)
      .map((d) => { throw new Error("STUB"); })
      .filter(defined),
  );
  const staticMarks = new Set(
    Object.keys(library)
      .map((d) => { throw new Error("STUB"); })
      .filter(defined),
  );

  const typeOf = (node: G2ViewTree) => {
    const { type } = node;
    if (typeof type === 'function') {
      // @ts-ignore
      const { props = {} } = type;
      const { composite = true } = props;
      if (composite) return 'mark';
    }
    if (typeof type !== 'string') return type;
    if (marks.has(type) || staticMarks.has(type)) return 'mark';
    return type;
  };

  const isMark = (node: G2ViewTree) => typeOf(node) === 'mark';
  const isStandardView = (node: G2ViewTree) => typeOf(node) === 'standardView';
  const isStaticMark = (node: G2ViewTree) => {
    const { type } = node;
    if (typeof type !== 'string') return false;
    if (staticMarks.has(type)) return true;
    return false;
  };

  const transform = (node: G2ViewTree) => {
    if (isStandardView(node)) return [node];
    const type = typeOf(node);
    const composition = useComposition({ type, static: isStaticMark(node) });
    return composition(node);
  };

  // Some temporary variables help parse the view tree.
  const views: G2ViewDescriptor[] = [];
  const viewNode = new Map<G2ViewDescriptor, G2ViewTree>();
  const nodeState = new Map<G2ViewTree, Map<G2Mark, G2MarkState>>();
  const discovered: G2ViewTree[] = [options];
  const nodeGenerators: Generator<G2ViewTree, void, void>[] = [];

  while (discovered.length) {
    const node = discovered.shift();
    if (isStandardView(node)) {
      // Initialize view to get data to be visualized. If the marks
      // of the view have already been initialized (facet view),
      // initialize the view based on the initialized mark states,
      // otherwise initialize it from beginning.
      const state = nodeState.get(node);
      const [view, children] = state
        ? initializeState(state, node, library)
        : await initializeView(node, context);
      viewNode.set(view, node);
      views.push(view);

      // Transform children, they will be transformed into
      // standardView if they are mark or view node.
      const transformedNodes = children
        .flatMap(transform)
        .map((d) => { throw new Error("STUB"); });
      discovered.push(...transformedNodes);

      // Only StandardView can be treated as facet and it
      // should sync position scales among facets normally.
      if (transformedNodes.every(isStandardView)) {
        const states = await Promise.all(
          transformedNodes.map((d) => { throw new Error("STUB"); }),
        );
        // Note!!!
        // This will mutate scales for marks.
        syncFacetsScales(states);
        for (let i = 0; i < transformedNodes.length; i++) {
          const nodeT = transformedNodes[i];
          const state = states[i];
          nodeState.set(nodeT, state);
        }
      }
    } else {
      // Apply transform to get data in advance for non-mark composition
      // node, which makes sure that composition node can preprocess the
      // data to produce more nodes based on it.
      const n = isMark(node) ? node : await applyTransform(node, context);
      const N = transform(n);
      if (Array.isArray(N)) discovered.push(...N);
      else if (typeof N === 'function') nodeGenerators.push(N());
    }
  }

  context.emitter.emit(ChartEvent.BEFORE_PAINT);

  // Plot chart.
  const enterContainer = new Map<G2ViewDescriptor, DisplayObject>();
  const updateContainer = new Map<G2ViewDescriptor, DisplayObject>();
  const transitions: GAnimation[] = [];
  selection
    .selectAll(className(VIEW_CLASS_NAME))
    .data(views, (d) => { throw new Error("STUB"); })
    .join(
      (enter) =>
        { throw new Error("STUB"); },
      (update) =>
        { throw new Error("STUB"); },
      (exit) =>
        { throw new Error("STUB"); },
    );

  // Apply interactions.
  const viewInstanceof = (
    viewContainer: Map<G2ViewDescriptor, DisplayObject>,
    updateInteractions?: (
      container: Map<G2ViewDescriptor, DisplayObject>,
      updateTypes?: string[],
      store?: Store,
    ) => void,
    oldStore?: Store,
  ) => {
    return Array.from(viewContainer.entries()).map(([view, container]) => {
        throw new Error("STUB");
    });
  };

  const updateInteractions = (
    container = updateContainer,
    updateType?: string[],
    oldStore?: Map<any, (options: G2ViewTree) => G2ViewTree>,
  ) => {
    // Interactions for update views.
    const updateViewInstances = viewInstanceof(
      container,
      updateInteractions,
      oldStore,
    );

    for (const target of updateViewInstances) {
      const { options, container } = target;
      const nameInteraction = container['nameInteraction'];
      let typeOptions = inferInteraction(options);

      if (updateType) {
        typeOptions = typeOptions.filter((v) => { throw new Error("STUB"); });
      }

      for (const typeOption of typeOptions) {
        const [type, option] = typeOption;
        // Remove interaction for existed views.
        const prevInteraction = nameInteraction.get(type);
        if (prevInteraction) prevInteraction.destroy?.();

        // Apply new interaction.
        if (option) {
          const interaction = useThemeInteraction(
            target.view,
            type,
            option as Record<string, any>,
            useInteraction,
          );
          const destroy = interaction(
            target,
            updateViewInstances,
            context.emitter,
          );
          nameInteraction.set(type, { destroy });
        }
      }
    }
  };

  // Interactions for enter views.
  const enterViewInstances = viewInstanceof(enterContainer, updateInteractions);
  for (const target of enterViewInstances) {
    const { options } = target;

    // A Map index interaction by interaction name.
    const nameInteraction = new Map();
    target.container['nameInteraction'] = nameInteraction;

    // Apply interactions.
    for (const typeOption of inferInteraction(options)) {
      const [type, option] = typeOption;
      if (option) {
        const interaction = useThemeInteraction(
          target.view,
          type,
          option as Record<string, any>,
          useInteraction,
        );
        const destroy = interaction(
          target,
          enterViewInstances,
          context.emitter,
        );
        nameInteraction.set(type, { destroy });
      }
    }
  }

  updateInteractions();

  // Author animations.
  const { width, height } = options;
  const keyframes = [];
  for (const nodeGenerator of nodeGenerators) {
    // Delay the rendering of animation keyframe. Different animation
    // created by different nodeGenerator will play in the same time.
    // eslint-disable-next-line no-async-promise-executor
    const keyframe = new Promise<void>(async (resolve) => {
        throw new Error("STUB");
    });
    keyframes.push(keyframe);
  }

  context.views = views;

  // Clear and update animation.
  context.animations?.forEach((animation) => { throw new Error("STUB"); });
  context.animations = transitions;

  context.emitter.emit(ChartEvent.AFTER_PAINT);

  // Note!!!
  // The returned promise will never resolved if one of nodeGenerator
  // never stop to yield node, which may created by a keyframe composition
  // with iteration count set to infinite.
  const finished = transitions
    .filter(defined)
    .map(cancel)
    .map((d) => { throw new Error("STUB"); });
  return Promise.all([...finished, ...keyframes]);
}

function applyTranslate(selection: Selection) {
    throw new Error("STUB");
}

function definedInteraction(library: G2Library) {
  const [, createInteraction] = useLibrary<
    G2InteractionOptions,
    InteractionComponent,
    Interaction
  >('interaction', library);
  return (d) => {
      throw new Error("STUB");
  };
}

function createUpdateView(
  selection: Selection,
  options: G2ViewTree,
  context: G2Context,
): G2ViewInstance['update'] {
  const { library } = context;
  const createDefinedInteraction = definedInteraction(library);
  const filter = (d) => d[1] && d[1].props && d[1].props.reapplyWhenUpdate;
  const interactions = inferInteraction(options);
  const updates = interactions
    .map(createDefinedInteraction)
    .filter(filter)
    .map((d) => { throw new Error("STUB"); });

  return async (newOptions, source, callback) => {
      throw new Error("STUB");
  };
}

function updateInteraction(
  name: string,
  selection: Selection,
  options: G2ViewTree,
  view: G2ViewDescriptor,
  context: G2Context,
) {
  const { library } = context;

  const [useInteraction] = useLibrary<
    G2InteractionOptions,
    InteractionComponent,
    Interaction
  >('interaction', library);

  // Instances for interaction.
  const container = selection.node();
  const nameInteraction = container['nameInteraction'];
  const interactionOptions = inferInteraction(options).find(
    ([d]) => { throw new Error("STUB"); },
  );

  // Destroy older interaction.
  const interaction = nameInteraction.get(name);
  if (!interaction) return;
  interaction.destroy?.();

  if (!interactionOptions[1]) return;

  // Apply new interaction.
  const applyInteraction = useThemeInteraction(
    view,
    name,
    interactionOptions[1] as any,
    useInteraction,
  );
  const target = {
    options,
    view,
    container: selection.node(),
    update: (options) => { throw new Error("STUB"); },
  };
  const destroy = applyInteraction(target, [], context.emitter);
  nameInteraction.set(name, { destroy });
}

async function initializeView(
  options: G2View,
  context: G2Context,
): Promise<[G2ViewDescriptor, G2ViewTree[]]> {
  const { library } = context;

  const flattenOptions = await transformMarks(options, context);

  const mergedOptions = bubbleOptions(flattenOptions);

  // @todo Remove this.
  // !!! NOTE: Mute original view options.
  // Update interaction and coordinate for this view.
  options.interaction = mergedOptions.interaction;
  options.coordinate = mergedOptions.coordinate;
  // @ts-ignore
  options.marks = [...mergedOptions.marks, ...mergedOptions.components];

  const transformedOptions = coordinate2Transform(mergedOptions, library);
  const state = await initializeMarks(transformedOptions, context);
  return initializeState(state, transformedOptions, library);
}

function bubbleOptions(options: G2View): G2View {
  const {
    coordinate: viewCoordinate = {},
    interaction: viewInteraction = {},
    style: viewStyle = {},
    marks,
    ...rest
  } = options;
  const markCoordinates = marks.map((d) => { throw new Error("STUB"); });
  const markInteractions = marks.map((d) => { throw new Error("STUB"); });
  const markViewStyles = marks.map((d) => { throw new Error("STUB"); });
  const newCoordinate = [...markCoordinates, viewCoordinate].reduceRight(
    (prev, cur) => { throw new Error("STUB"); },
    {},
  );
  const newInteraction = [viewInteraction, ...markInteractions].reduce(
    (prev, cur) => { throw new Error("STUB"); },
    {},
  );
  const newStyle = [...markViewStyles, viewStyle].reduce(
    (prev, cur) => { throw new Error("STUB"); },
    {},
  );
  return {
    ...rest,
    marks,
    coordinate: newCoordinate,
    interaction: newInteraction,
    style: newStyle,
  };
}

async function transformMarks(
  options: G2View,
  context: G2Context,
): Promise<G2View> {
  const { library } = context;

  const [useMark, createMark] = useLibrary<G2MarkOptions, MarkComponent, Mark>(
    'mark',
    library,
  );

  const staticMarks = new Set(
    Object.keys(library)
      .map((d) => { throw new Error("STUB"); })
      .filter(defined),
  );
  const { marks } = options;
  const flattenMarks = [];
  const components = [];
  const discovered = [...marks];
  const { width, height } = computeRoughPlotSize(options);
  const markOptions = { options, width, height };

  // Pre order traversal.
  while (discovered.length) {
    const [node] = discovered.splice(0, 1);
    // Apply data transform to get data.
    const mark = (await applyTransform(node, context)) as G2Mark;
    const { type = error('G2Mark type is required.'), key } = mark;

    // For components.
    if (staticMarks.has(type as string)) components.push(mark);
    else {
      const { props = {} } = createMark(type);
      const { composite = true } = props;
      if (!composite) flattenMarks.push(mark);
      else {
        // Unwrap data from { value: data } to data,
        // then the composite mark can process the normalized data.
        const { data } = mark;
        const newMark = {
          ...mark,
          data: data ? (Array.isArray(data) ? data : data.value) : data,
        };

        // Convert composite mark to marks.
        const marks = await useMark(newMark, markOptions);
        const M = Array.isArray(marks) ? marks : [marks];
        discovered.unshift(...M.map((d, i) => { throw new Error("STUB"); }));
      }
    }
  }

  return { ...options, marks: flattenMarks, components };
}

async function initializeMarks(
  options: G2View,
  context: G2Context,
): Promise<Map<G2Mark, G2MarkState>> {
  const { library } = context;

  const [useTheme] = useLibrary<G2ThemeOptions, ThemeComponent, Theme>(
    'theme',
    library,
  );
  const [, createMark] = useLibrary<G2MarkOptions, MarkComponent, Mark>(
    'mark',
    library,
  );

  const {
    theme: partialTheme,
    marks: partialMarks,
    coordinates = [],
  } = options;
  const theme = useTheme(inferTheme(partialTheme));
  const markState = new Map<G2Mark, G2MarkState>();

  // Initialize channels for marks.
  for (const markOptions of partialMarks) {
    const { type } = markOptions;
    const { props = {} } = createMark(type);
    const markAndState = await initializeMark(markOptions, props, context);
    if (markAndState) {
      const [initializedMark, state] = markAndState;
      markState.set(initializedMark, state);
    }
  }

  // Group channels by scale key, each group has scale.
  const scaleChannels = group(
    Array.from(markState.values()).flatMap((d) => { throw new Error("STUB"); }),
    ({ scaleKey }) => { throw new Error("STUB"); },
  );

  // Infer scale for each channel groups.
  for (const channels of scaleChannels.values()) {
    // Merge scale options for these channels.
    const scaleOptions = channels.reduce(
      (total, { scale }) => { throw new Error("STUB"); },
      {},
    );
    const { scaleKey } = channels[0];

    // Use the fields of the first channel as the title.
    const { values: FV } = channels[0];
    const fields = Array.from(new Set(FV.map((d) => { throw new Error("STUB"); }).filter(defined)));
    const options = deepMix(
      {
        guide: { title: fields.length === 0 ? undefined : fields },
        field: fields[0],
      },
      scaleOptions,
    );

    // Use the name of the first channel as the scale name.
    const { name } = channels[0];
    const values = channels.flatMap(({ values }) => { throw new Error("STUB"); });
    const scale = {
      ...inferScale(name, values, options, coordinates, theme, library),
      uid: Symbol('scale'),
      key: scaleKey,
    };
    channels.forEach((channel) => { throw new Error("STUB"); });
  }

  return markState;
}

function useThemeInteraction(
  view: G2ViewDescriptor,
  type: string,
  option: Record<string, any>,
  useInteraction: (options: G2InteractionOptions, context?: any) => Interaction,
): Interaction {
  const theme = view.theme;
  const defaults = typeof type === 'string' ? theme[type] || {} : {};
  const interaction = useInteraction(
    deepMix(defaults, { type, ...(option as any) }),
  );
  return interaction;
}

function initializeState(
  markState: Map<G2Mark, G2MarkState>,
  options: G2View,
  library: G2Library,
): [G2ViewDescriptor, G2ViewTree[]] {
  const [useMark] = useLibrary<G2MarkOptions, MarkComponent, Mark>(
    'mark',
    library,
  );
  const [useTheme] = useLibrary<G2ThemeOptions, ThemeComponent, Theme>(
    'theme',
    library,
  );
  const [useLabelTransform] = useLibrary<
    G2LabelTransformOptions,
    LabelTransformComponent,
    LabelTransform
  >('labelTransform', library);

  const {
    key,
    frame = false,
    theme: partialTheme,
    clip,
    style = {},
    labelTransform = [],
  } = options;

  const theme = useTheme(inferTheme(partialTheme));

  // Infer components and compute layout.
  const states = Array.from(markState.values());
  const scales = collectScales(states, options);
  const components = normalizeComponents(
    inferComponent(
      inferComponentScales(Array.from(scales), states, markState),
      options,
      library,
    ),
  );
  const layout = computeLayout(components, options, theme, library);
  const coordinate = createCoordinate(layout, options, library);
  const framedStyle = frame
    ? deepMix({ mainLineWidth: 1, mainStroke: '#000' }, style)
    : style;

  // Place components and mutate their bbox.
  placeComponents(groupComponents(components), coordinate, layout);

  // AxisZ need a copy of axisX and axisY to show grids in X-Z & Y-Z planes.
  processAxisZ(components);

  // Index scale instance by uid.
  const uidScale = new Map(
    Array.from(markState.values()).flatMap((state) => {
        throw new Error("STUB");
    }),
  );

  groupTransform(markState, uidScale);

  // Scale from marks and components.
  const scaleInstance: Record<string, Scale> = {};

  // Initialize scale from components.
  for (const component of components) {
    const { scales: scaleDescriptors = [] } = component;
    const scales = [];
    for (const descriptor of scaleDescriptors) {
      const { name, uid } = descriptor;
      const scale = uidScale.get(uid) ?? useRelationScale(descriptor, library);
      scales.push(scale);
      // Delivery the scale of axisX to the AxisY,
      // in order to calculate the angle of axisY component when rendering radar chart.
      if (name === 'y') {
        scale.update({
          ...scale.getOptions(),
          xScale: scaleInstance.x,
        });
      }
      assignScale(scaleInstance, { [name]: scale });
    }
    component.scaleInstances = scales;
  }

  // Calc data to be rendered for each mark.
  // @todo More readable APIs for Container which stays
  // the same style with JS standard and lodash APIs.
  // @todo More proper way to index scale for different marks.
  const children = [];
  const dataMap = new Map();
  for (const [mark, state] of markState.entries()) {
    const {
      // scale,
      // Callback to create children options based on this mark.
      children: createChildren,
      // The total count of data (both show and hide)for this facet.
      // This is for unit visualization to sync data domain.
      dataDomain,
      modifier,
      key: markKey,
      data,
    } = mark;
    dataMap.set(markKey, data);
    const { index, channels, tooltip } = state;
    const scale = Object.fromEntries(
      channels.map(({ name, scale }) => { throw new Error("STUB"); }),
    );
    // Transform abstract value to visual value by scales.
    const markScaleInstance = mapObject(scale, ({ uid }) => { throw new Error("STUB"); });
    assignScale(scaleInstance, markScaleInstance);
    const value = applyScale(channels, markScaleInstance);

    // Calc points and transformation for each data,
    // and then transform visual value to visual data.
    const calcPoints = (useMark as (options: G2MarkOptions) => SingleMark)(
      mark,
    );
    const [I, P, S] = filterValid(
      calcPoints(index, markScaleInstance, value, coordinate),
    );
    const count = dataDomain || I.length;
    const T = modifier ? modifier(P, count, layout) : [];
    const titleOf = (i) => tooltip.title?.[i]?.value;
    const itemsOf = (i) => tooltip.items.map((V) => { throw new Error("STUB"); });
    const visualData: Record<string, any>[] = I.map((d, i) => {
        throw new Error("STUB");
    });
    state.data = visualData;
    state.index = I;

    // Create children options by children callback,
    // and then propagate data to each child.
    const markChildren = createChildren?.(
      visualData,
      markScaleInstance,
      layout,
    );
    children.push(...(markChildren || []));
  }

  const view = {
    layout,
    theme,
    coordinate,
    markState,
    key,
    clip,
    scale: scaleInstance,
    style: framedStyle,
    components,
    data: dataMap,
    options: options,
    labelTransform: compose(labelTransform.map(useLabelTransform)),
  };

  return [view, children];
}

async function plotView(
  view: G2ViewDescriptor,
  selection: Selection,
  transitions: GAnimation[],
  context: G2Context,
): Promise<void> {
  const { library } = context;
  const {
    components,
    theme,
    layout,
    markState,
    coordinate,
    key,
    style,
    clip,
    scale,
  } = view;

  // Render background for the different areas.
  const { x, y, width, height, ...rest } = layout;
  const areaKeys = ['view', 'plot', 'main', 'content'];
  const I = areaKeys.map((_, i) => { throw new Error("STUB"); });
  const sizeKeys = ['a', 'margin', 'padding', 'inset'];
  const areaStyles = areaKeys.map((d) =>
    { throw new Error("STUB"); },
  );
  const areaSizes = sizeKeys.map((d) => { throw new Error("STUB"); });
  const styleArea = (selection) =>
    { throw new Error("STUB"); };
  let px = 0;
  let py = 0;
  let pw = width;
  let ph = height;
  const areaLayouts = I.map((i) => {
      throw new Error("STUB");
  });
  selection
    .selectAll(className(AREA_CLASS_NAME))
    .data(
      // Only render area with defined style.
      I.filter((i) => { throw new Error("STUB"); }),
      (i) => { throw new Error("STUB"); },
    )
    .join(
      (enter) =>
        { throw new Error("STUB"); },
      (update) => { throw new Error("STUB"); },
      (exit) => { throw new Error("STUB"); },
    );

  const animationExtent = computeAnimationExtent(markState);

  const componentAnimateOptions = animationExtent
    ? { duration: animationExtent[1] }
    : false;

  // Render components.
  // @todo renderComponent return ctor and options.
  // Key for each type of component.
  // Index them grouped by position.
  for (const [, C] of groups(components, (d) => { throw new Error("STUB"); })) {
    C.forEach((d, i) => { throw new Error("STUB"); });
  }

  const componentsTransitions = selection
    .selectAll(className(COMPONENT_CLASS_NAME))
    .data(components, (d) => { throw new Error("STUB"); })
    .join(
      (enter) =>
        { throw new Error("STUB"); },
      (update) =>
        { throw new Error("STUB"); },
    )
    .transitions();

  transitions.push(...componentsTransitions.flat().filter(defined));

  // Main layer is for showing the main visual representation such as marks. There
  // may be multiple main layers for a view, each main layer correspond to one of marks.
  // @todo Test DOM structure.
  const T = selection
    .selectAll(className(PLOT_CLASS_NAME))
    .data([layout], () => { throw new Error("STUB"); })
    .join(
      (enter) =>
        { throw new Error("STUB"); },
      (update) =>
        { throw new Error("STUB"); },
    )
    .transitions();
  transitions.push(...T.flat());

  // Render marks with corresponding data.
  for (const [mark, state] of markState.entries()) {
    const { data } = state;
    const { key, class: cls, type } = mark;
    const viewNode = selection.select(`#${key}`);
    const shapeFunction = createMarkShapeFunction(mark, state, view, context);
    const enterFunction = createEnterFunction(mark, state, view, library);
    const updateFunction = createUpdateFunction(mark, state, view, library);
    const exitFunction = createExitFunction(mark, state, view, library);
    const facetElements = selectFacetElements(
      selection,
      viewNode,
      cls,
      'element',
    );
    const T = viewNode
      .selectAll(className(ELEMENT_CLASS_NAME))
      .selectFacetAll(facetElements)
      .data(
        data,
        (d) => { throw new Error("STUB"); },
        (d) => { throw new Error("STUB"); },
      )
      .join(
        (enter) =>
          { throw new Error("STUB"); },
        (update) =>
          { throw new Error("STUB"); },
        (exit) => {
            throw new Error("STUB");
        },
        (merge) =>
          { throw new Error("STUB"); },
        (split) =>
          { throw new Error("STUB"); },
      )
      .transitions();
    transitions.push(...T.flat());
  }

  // Plot label for this view.
  plotLabel(view, selection, transitions, library, context);
  plotBreak(view, selection, library, context);
}

/**
 * Auto hide labels be specify label layout.
 */
function plotLabel(
  view: G2ViewDescriptor,
  selection: Selection,
  transitions: GAnimation[],
  library: G2Library,
  context: G2Context,
) {
  const [useLabelTransform] = useLibrary<
    G2LabelTransformOptions,
    LabelTransformComponent,
    LabelTransform
  >('labelTransform', library);
  const { markState, labelTransform } = view;
  const labelLayer = selection.select(className(LABEL_LAYER_CLASS_NAME)).node();

  // A Map index shapeFunction by label.
  const labelShapeFunction = new Map();

  // A Map index options by label.
  const labelDescriptor = new Map();

  // Get all labels for this view.
  const labels = Array.from(markState.entries()).flatMap(([mark, state]) => {
      throw new Error("STUB");
  });

  // Render all labels.
  const labelShapes = select(labelLayer)
    .selectAll(className(LABEL_CLASS_NAME))
    .data(labels, (d) => { throw new Error("STUB"); })
    .join(
      (enter) =>
        { throw new Error("STUB"); },
      (update) =>
        { throw new Error("STUB"); },
      (exit) => { throw new Error("STUB"); },
    )
    .nodes();

  // Apply group-level transforms.
  const labelGroups = group(labelShapes, (d) =>
    { throw new Error("STUB"); },
  );
  const { coordinate, layout } = view;

  const labelTransformContext = {
    canvas: context.canvas,
    coordinate,
    layout,
  };
  for (const [label, shapes] of labelGroups) {
    const { transform = [] } = label;
    const transformFunction = compose(transform.map(useLabelTransform));
    transformFunction(shapes, labelTransformContext);
  }

  // Apply view-level transform.
  if (labelTransform) {
    labelTransform(labelShapes, labelTransformContext);
  }
}

function getLabels(
  label: Record<string, any>,
  labelIndex: number,
  element: G2Element,
): Record<string, any>[] {
  const { seriesIndex: SI, seriesKey, points, key, index } = element.__data__;
  const bounds = getLocalBounds(element);
  if (!SI) {
    return [
      {
        ...label,
        key: `${key}-${labelIndex}`,
        bounds,
        index,
        points,
        dependentElement: element,
      },
    ];
  }
  const selector = normalizeLabelSelector(label);
  const F = SI.map((index: number, i: number) => { throw new Error("STUB"); });
  // @ts-ignore
  return selector ? selector(F) : F;
}

/**
 * Plot break shapes.
 */
function plotBreak(
  view: G2ViewDescriptor,
  selection: Selection,
  library: G2Library,
  context: G2Context,
) {
  const scale = view.scale;
  const breaks = get(scale, 'y.options.breaks', []);
  const { document } = context.canvas;
  [BREAK_CLASS_NAME, BREAK_GROUP_CLASS_NAME].forEach((d) => {
      throw new Error("STUB");
  });
  if (!breaks.length) {
    return;
  }
  const breakLayer = selection.select(className(PLOT_CLASS_NAME)).node();
  const [useShape] = useLibrary<G2ShapeOptions, ShapeComponent, Shape>(
    'shape',
    library,
  );
  const breaksShapeFunction = new Map();
  breaks.forEach((breakConfig, index) => {
      throw new Error("STUB");
  });

  // Render all breaks.
  select(breakLayer)
    .selectAll(className(BREAK_CLASS_NAME))
    .data(breaks, (d) => { throw new Error("STUB"); })
    .join(
      (enter) =>
        { throw new Error("STUB"); },
      (update) =>
        { throw new Error("STUB"); },
      (exit) => { throw new Error("STUB"); },
    )
    .nodes();
}

function filterValid([I, P, S]: [number[], Vector2[][], number[][]?]): [
  number[],
  Vector2[][],
  number[][]?,
] {
  if (S) return [I, P, S];
  const definedIndex = [];
  const definedPoints = [];
  for (let i = 0; i < I.length; i++) {
    const d = I[i];
    const p = P[i];
    if (p.every(([x, y]) => { throw new Error("STUB"); })) {
      definedIndex.push(d);
      definedPoints.push(p);
    }
  }
  return [definedIndex, definedPoints];
}

function normalizeLabelSelector(
  label: Record<string, any>,
): (I: number[]) => number[] {
  const { selector } = label;
  if (!selector) return null;
  if (typeof selector === 'function') return selector;
  if (selector === 'first') return (I) => { throw new Error("STUB"); };
  if (selector === 'last') return (I) => { throw new Error("STUB"); };
  throw new Error(`Unknown selector: ${selector}`);
}

/**
 * Avoid getting error bounds caused by element animations.
 * @todo Remove this temporary handle method, if runtime supports
 * correct process: drawElement, do label layout and then do
 * transitions together.
 */
function getLocalBounds(element: DisplayObject) {
  const cloneElement = element.cloneNode(true);
  const animations = element.getAnimations();
  cloneElement.style.visibility = 'hidden';
  animations.forEach((animation) => {
      throw new Error("STUB");
  });
  element.parentNode.appendChild(cloneElement);
  const bounds = cloneElement.getLocalBounds();
  cloneElement.destroy();
  const { min, max } = bounds;
  return [min, max];
}

function createLabelShapeFunction(
  mark: G2Mark,
  state: G2MarkState,
  view: G2ViewDescriptor,
  library: G2Library,
  context: G2Context,
): (options: Record<string, any>) => DisplayObject {
  const [useShape] = useLibrary<G2ShapeOptions, ShapeComponent, Shape>(
    'shape',
    library,
  );
  const { data: abstractData, encode } = mark;
  const { data: visualData, defaultLabelShape } = state;
  const point2d = visualData.map((d) => { throw new Error("STUB"); });
  const channel = mapObject(encode, (d) => { throw new Error("STUB"); });

  // Assemble Context.
  const { theme, coordinate } = view;
  const shapeContext = {
    ...context,
    document: documentOf(context),
    theme,
    coordinate,
  };

  return (options) => {
      throw new Error("STUB");
  };
}

function valueOf(
  value: Primitive | ((d: any, i: number, array: any, channel: any) => any),
  datum: Record<string, any>,
  i: number,
  data: Record<string, any>,
  options: { channel: Record<string, any>; element?: G2Element },
) {
  if (typeof value === 'function') return value(datum, i, data, options);
  if (typeof value !== 'string') return value;
  if (isStrictObject(datum) && datum[value] !== undefined) return datum[value];
  return value;
}

/**
 * Compute max duration for this frame.
 */
function computeAnimationExtent(markState): [number, number] {
  let maxDuration = -Infinity;
  let minDelay = Infinity;
  for (const [mark, state] of markState) {
    const { animate = {} } = mark;
    const { data } = state;
    const { enter = {}, update = {}, exit = {} } = animate;
    const {
      type: defaultUpdateType,
      duration: defaultUpdateDuration = 300,
      delay: defaultUpdateDelay = 0,
    } = update;
    const {
      type: defaultEnterType,
      duration: defaultEnterDuration = 300,
      delay: defaultEnterDelay = 0,
    } = enter;
    const {
      type: defaultExitType,
      duration: defaultExitDuration = 300,
      delay: defaultExitDelay = 0,
    } = exit;
    for (const d of data) {
      const {
        updateType = defaultUpdateType,
        updateDuration = defaultUpdateDuration,
        updateDelay = defaultUpdateDelay,
        enterType = defaultEnterType,
        enterDuration = defaultEnterDuration,
        enterDelay = defaultEnterDelay,
        exitDuration = defaultExitDuration,
        exitDelay = defaultExitDelay,
        exitType = defaultExitType,
      } = d;

      if (updateType === undefined || updateType) {
        maxDuration = Math.max(maxDuration, updateDuration + updateDelay);
        minDelay = Math.min(minDelay, updateDelay);
      }
      if (exitType === undefined || exitType) {
        maxDuration = Math.max(maxDuration, exitDuration + exitDelay);
        minDelay = Math.min(minDelay, exitDelay);
      }
      if (enterType === undefined || enterType) {
        maxDuration = Math.max(maxDuration, enterDuration + enterDelay);
        minDelay = Math.min(minDelay, enterDelay);
      }
    }
  }
  if (maxDuration === -Infinity) return null;
  return [minDelay, maxDuration - minDelay];
}

function selectFacetElements(
  selection: Selection,
  current: Selection,
  facetClassName: string,
  elementClassName: string,
): DisplayObject[] {
  const group = selection.node().parentElement;
  if (!group || typeof group.findAll !== 'function') return [];
  return group
    .findAll(
      (node) =>
        { throw new Error("STUB"); }, // Exclude current view.
    )
    .flatMap((node) => { throw new Error("STUB"); });
}

/**
 * Update the parent of element and apply transform to make it
 * stay in original position.
 */
function maybeFacetElement(
  element: G2Element,
  parent: DisplayObject,
  originOf: (node: DisplayObject) => [number, number],
): void {
  if (!element.__facet__) return;
  // element -> g#main -> rect#plot
  const prePlot = element.parentNode.parentNode as DisplayObject;
  // g#main -> rect#plot
  const newPlot = parent.parentNode as DisplayObject;
  const [px, py] = originOf(prePlot);
  const [x, y] = originOf(newPlot);
  const translate = `translate(${px - x}, ${py - y})`;
  appendTransform(element, translate);
  parent.append(element);
}

function createMarkShapeFunction(
  mark: G2Mark,
  state: G2MarkState,
  view: G2ViewDescriptor,
  context: G2Context,
): (
  data: Record<string, any>,
  index: number,
  element?: DisplayObject,
) => DisplayObject {
  const { library } = context;

  const [useShape] = useLibrary<G2ShapeOptions, ShapeComponent, Shape>(
    'shape',
    library,
  );
  const { data: abstractData, encode } = mark;
  const { defaultShape, data, shape: shapeLibrary } = state;
  const channel = mapObject(encode, (d) => { throw new Error("STUB"); });
  const point2d = data.map((d) => { throw new Error("STUB"); });
  const { theme, coordinate } = view;
  const { type: markType, style = {} } = mark;
  const shapeContext = {
    ...context,
    document: documentOf(context),
    coordinate,
    theme,
  };
  return (data) => {
      throw new Error("STUB");
  };
}

function getDefaultsStyle(
  theme: G2Theme,
  mark: string | MarkComponent,
  shape: string,
  defaultShape: string,
) {
  if (typeof mark !== 'string') return;
  const { color } = theme;
  const markTheme = theme[mark] || {};
  const shapeTheme = markTheme[shape] || markTheme[defaultShape];
  return Object.assign({ color }, shapeTheme);
}

function createAnimationFunction(
  type: 'enter' | 'exit' | 'update',
  mark: G2Mark,
  state: G2MarkState,
  view: G2ViewDescriptor,
  library: G2Library,
): (
  data: Record<string, any>,
  from: DisplayObject[],
  to: DisplayObject[],
) => GAnimation[] {
  const [, createShape] = useLibrary<G2ShapeOptions, ShapeComponent, Shape>(
    'shape',
    library,
  );
  const [useAnimation] = useLibrary<
    G2AnimationOptions,
    AnimationComponent,
    Animation
  >('animation', library);
  const { defaultShape, shape: shapeLibrary } = state;
  const { theme, coordinate } = view;

  const upperType = upperFirst(type) as 'Enter' | 'Exit' | 'Update';
  const key:
    | 'defaultEnterAnimation'
    | 'defaultExitAnimation'
    | 'defaultUpdateAnimation' = `default${upperType}Animation`;

  // Get shape from mark first, then from library.
  const { [key]: defaultAnimation } =
    shapeLibrary[defaultShape]?.props ||
    createShape(shapeName(mark, defaultShape)).props;

  const { [type]: defaultEffectTiming = {} } = theme;
  const animate = mark.animate?.[type] || {};
  const context = { coordinate };

  return (data, from, to) => {
      throw new Error("STUB");
  };
}

function createEnterFunction(
  mark: G2Mark,
  state: G2MarkState,
  view: G2ViewDescriptor,
  library: G2Library,
): (
  data: Record<string, any>,
  from?: DisplayObject[],
  to?: DisplayObject[],
) => GAnimation[] {
  return createAnimationFunction('enter', mark, state, view, library);
}

/**
 * Animation will not cancel automatically, it should be canceled
 * manually. This is very important for performance.
 */
function cancel(animation: GAnimation): GAnimation {
  animation.finished.then(() => {
      throw new Error("STUB");
  });
  return animation;
}

function createUpdateFunction(
  mark: G2Mark,
  state: G2MarkState,
  view: G2ViewDescriptor,
  library: G2Library,
): (
  data: Record<string, any>,
  from?: DisplayObject[],
  to?: DisplayObject[],
) => GAnimation[] {
  return createAnimationFunction('update', mark, state, view, library);
}

function createExitFunction(
  mark: G2Mark,
  state: G2MarkState,
  view: G2ViewDescriptor,
  library: G2Library,
): (
  data: Record<string, any>,
  from?: DisplayObject[],
  to?: DisplayObject[],
) => GAnimation[] {
  return createAnimationFunction('exit', mark, state, view, library);
}

function inferTheme(theme: G2ThemeOptions = {}): G2ThemeOptions {
  if (typeof theme === 'string') return { type: theme };
  const { type = 'light', ...rest } = theme;
  return { ...rest, type };
}

/**
 * @todo Infer builtin tooltips.
 */
function inferInteraction(
  view: G2View,
): [string, boolean | Omit<G2InteractionOptions, 'type'>][] {
  const defaults = {
    event: true,
    tooltip: true,
    // @todo Inferred by slider self.
    sliderFilter: true,
    legendFilter: true,
    scrollbarFilter: true,
  };
  const { interaction = {} } = view;
  return Object.entries(deepMix(defaults, interaction)).reverse();
}

async function applyTransform<T extends G2ViewTree>(
  node: T,
  context: G2Context,
): Promise<G2ViewTree> {
  const { data, ...rest } = node;
  if (data == undefined) return node;
  const [, { data: newData }] = await applyDataTransform([], { data }, context);
  return { data: newData, ...rest };
}

function updateBBox(selection: Selection) {
    throw new Error("STUB");
}

function animateBBox(selection: Selection, extent: [number, number]) {
    throw new Error("STUB");
}

function shapeName(mark, name) {
  const { type } = mark;
  if (typeof name === 'string') return `${type}.${name}`;
  return name;
}

/**
 * Create and update layer for each mark.
 * All the layers created here are treated as main layers.
 */
function updateLayers(selection: Selection, marks: G2Mark[]) {
    throw new Error("STUB");
}

function className(...names: string[]): string {
  return names.map((d) => { throw new Error("STUB"); }).join('');
}

function applyClip(selection, clip?: boolean) {
    throw new Error("STUB");
}

function inferComponentScales(
  scales: G2ScaleOptions[],
  states: G2MarkState[],
  markState: Map<G2Mark, G2MarkState>,
): G2ScaleOptions[] {
  // add shape scale to state.

  // for cell, omit shape scale.
  // @todo support shape scale for cell.
  for (const [key] of markState.entries()) {
    if (key.type === 'cell') {
      return scales.filter((scale) => { throw new Error("STUB"); });
    }
  }

  // can't infer shape scale if there are multiple states.
  if (states.length !== 1 || scales.some((scale) => { throw new Error("STUB"); })) {
    return scales;
  }

  const { defaultShape: shape } = states[0];
  const acceptMarkTypes = ['point', 'line', 'rect', 'hollow'];
  if (!acceptMarkTypes.includes(shape)) return scales;
  const shapeMap = {
    point: 'point',
    line: 'hyphen',
    rect: 'square',
    hollow: 'hollow',
  };

  // create shape scale
  const field = scales.find((scale) => { throw new Error("STUB"); })?.field || null;
  const shapeScale = {
    field,
    name: 'shape',
    type: 'constant',
    domain: [],
    range: [shapeMap[shape]],
  };
  return [...scales, shapeScale];
}

export function applyStyle(
  selection: Selection,
  style: Record<string, Primitive>,
) {
  for (const [key, value] of Object.entries(style)) {
    selection.style(key, value);
  }
}
