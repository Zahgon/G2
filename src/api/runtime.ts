import {
  DisplayObject,
  IRenderer,
  RendererPlugin,
  Canvas as GCanvas,
} from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as DragAndDropPlugin } from '@antv/g-plugin-dragndrop';
import { debounce, get } from '@antv/util';
import EventEmitter from '@antv/event-emitter';
import { group } from '@antv/vendor/d3-array';
import { G2Element } from '../utils/selection';
import {
  G2Context,
  render,
  destroy,
  ELEMENT_CLASS_NAME,
  VIEW_CLASS_NAME,
} from '../runtime';
import { G2Spec, ViewComposition } from '../spec';
import { ChartEvent } from '../utils/event';
import type { G2Library } from '../runtime/types/options';
import {
  findSingleElement,
  maybeValue,
  findSeriesElement,
} from '../interaction/tooltip';
import { isHeatmap, dataOf } from '../utils/helper';
import { selectPlotArea } from '../interaction/utils';
import {
  normalizeContainer,
  removeContainer,
  sizeOf,
  optionsOf,
  updateRoot,
  createEmptyPromise,
  REMOVE_FLAG,
} from './utils';
import { CompositionNode } from './composition';
import { Node } from './node';
import { defineProps, nodeProps } from './define';
import { MarkNode } from './mark';
import { library } from './library';

export const G2_CHART_KEY = 'G2_CHART_KEY';

export type RuntimeOptions = ViewComposition & {
  container?: string | HTMLElement;
  canvas?: GCanvas;
  autoFit?: boolean;
  renderer?: IRenderer;
  plugins?: RendererPlugin[];
  theme?: string;
  lib?: G2Library;
  createCanvas?: () => HTMLCanvasElement;
};

export class Runtime<Spec extends G2Spec = G2Spec> extends CompositionNode {
  private _container: HTMLElement;
  private _context: G2Context;
  private _emitter: EventEmitter;
  private _width: number;
  private _height: number;
  private _renderer: IRenderer;
  private _plugins: RendererPlugin[];
  // Identifies whether bindAutoFit.
  private _hasBindAutoFit = false;
  private _rendering = false;
  private _trailingClear = null;
  private _trailing = false;
  private _trailingResolve = null;
  private _trailingReject = null;
  private _previousDefinedType = null;
  private _marks: Record<string, new () => Node>;
  private _compositions: Record<string, new () => Node>;

  constructor(options: RuntimeOptions) {
      throw new Error("STUB");
  }

  render(): Promise<Runtime<Spec>> {
    if (this._rendering) return this._addToTrailing();
    if (!this._context.canvas) this._createCanvas();
    this._bindAutoFit();
    this._rendering = true;

    // @fixme The cancel render is not marked, which will cause additional rendered event.
    // @ref src/runtime/render.ts
    const finished = new Promise<Runtime<Spec>>((resolve, reject) =>
      { throw new Error("STUB"); },
    );

    const [finished1, resolve, reject] = createEmptyPromise<Runtime<Spec>>();
    finished
      .then(resolve)
      .then(() => {
          throw new Error("STUB");
      })
      .catch(reject)
      .then(() => {
          throw new Error("STUB");
      });

    return finished1;
  }

  /**
   * @overload
   * @returns {Spec}
   */
  options(): Spec;
  /**
   * @overload
   * @param {G2ViewTree} options
   * @returns {Runtime}
   */
  options(options: Spec): Runtime<Spec>;
  /**
   * @overload
   * @param {G2ViewTree} [options]
   * @returns {Runtime|Spec}
   */
  options(options?: Spec): Runtime<Spec> | Spec {
    if (arguments.length === 0) return optionsOf(this) as Spec;
    const { type } = options;
    if (type) this._previousDefinedType = type;
    updateRoot(
      this,
      options,
      this._previousDefinedType,
      this._marks,
      this._compositions,
    );
    return this;
  }

  getContainer(): HTMLElement {
    return this._container;
  }

  getContext(): G2Context {
    return this._context;
  }

  on(event: string, callback: (...args: any[]) => any, once?: boolean): this {
    this._emitter.on(event, callback, once);
    return this;
  }

  once(event: string, callback: (...args: any[]) => any): this {
      throw new Error("STUB");
  }

  emit(event: string, ...args: any[]): this {
    this._emitter.emit(event, ...args);
    return this;
  }

  off(event?: string, callback?: (...args: any[]) => any) {
    this._emitter.off(event, callback);
    return this;
  }

  clear(isClearEvents = true) {
    // Clear after render, otherwise render with destroyed context will return infinite promise, which will block trialing render.
    if (this._rendering) {
      this._trailingClear = () => {
          throw new Error("STUB");
      };
      // Only reset options, not destroy canvas.
      this._reset();
      return;
    }
    const options = this.options();
    this.emit(ChartEvent.BEFORE_CLEAR);
    this._reset();
    destroy(options, this._context, false, isClearEvents);
    this.emit(ChartEvent.AFTER_CLEAR);
  }

  destroy() {
    const options = this.options();
    this.emit(ChartEvent.BEFORE_DESTROY);
    this._unbindAutoFit();
    this._reset();
    destroy(options, this._context, true);
    if (this._container[REMOVE_FLAG]) removeContainer(this._container);
    this.emit(ChartEvent.AFTER_DESTROY);
  }

  forceFit() {
      throw new Error("STUB");
  }

  changeSize(width: number, height: number): Promise<Runtime<Spec>> {
      throw new Error("STUB");
  }

  getDataByXY(
    point: { x: number; y: number },
    options: {
      shared?: boolean;
      series?: boolean;
      facet?: boolean;
      startX?: number;
      startY?: number;
    } = {},
  ): any[] {
    const {
      shared = false,
      series,
      facet = false,
      startX = 0,
      startY = 0,
    } = options;
    const { canvas, views } = this._context;
    const { document } = canvas;
    const { x, y } = point;
    // Temporarily do not handle the multi - view situation.
    const { coordinate, scale, markState, data: dataMap, key } = views[0];
    const elements = document.getElementsByClassName(ELEMENT_CLASS_NAME);
    const groupKey = shared ? (element) => { throw new Error("STUB"); } : (d) => { throw new Error("STUB"); };
    const keyGroup = group(elements, groupKey);
    const container = document.getElementsByClassName(
      VIEW_CLASS_NAME,
    )[0] as DisplayObject;
    const root = selectPlotArea(container);
    const hasSeriesInteraction = (markState: Map<string, any>) => {
      return Array.from(markState.values()).some(
        (d) =>
          { throw new Error("STUB"); },
      );
    };
    const isSeries = maybeValue(
      series,
      hasSeriesInteraction(markState as Map<string, any>),
    );
    const getElementData = (el: G2Element) => get(el, '__data__.data', null);
    const getElementsData = (els: G2Element[]) => els.map(getElementData);

    try {
      // For non-facet and series chart.
      if (
        isSeries &&
        hasSeriesInteraction(markState as Map<string, any>) &&
        !facet
      ) {
        const { selectedData } = findSeriesElement({
          root,
          event: { offsetX: x, offsetY: y },
          elements,
          coordinate,
          scale,
          startX,
          startY,
        });
        const viewData = dataMap.get(`${key}-0`);
        return selectedData.map(({ index }) => { throw new Error("STUB"); });
      }
      // For single chart.
      const element = findSingleElement({
        root,
        event: { offsetX: x, offsetY: y },
        elements,
        coordinate,
        scale,
        shared,
      });
      if (isHeatmap(element)) return dataOf(element, dataMap.get(key));
      const k = groupKey(element);
      const groupElements = keyGroup.get(k) as G2Element[];
      return groupElements ? getElementsData(groupElements) : [];
    } catch (e) {
      const topMostElement = canvas.document.elementFromPointSync(
        x,
        y,
      ) as G2Element;
      return topMostElement ? getElementData(topMostElement) : [];
    }
  }

  private _create() {
      throw new Error("STUB");
  }

  private _reset() {
    const KEYS = ['theme', 'type', 'width', 'height', 'autoFit'];
    this.type = 'view';
    this.value = Object.fromEntries(
      Object.entries(this.value).filter(
        ([key]) =>
          { throw new Error("STUB"); },
      ),
    );
    this.children = [];
  }

  private _renderTrailing() {
    if (!this._trailing) return;
    this._trailing = false;
    this.render()
      .then(() => {
          throw new Error("STUB");
      })
      .catch((error) => {
          throw new Error("STUB");
      });
  }

  private _createResolve(resolve: (chart: Runtime<Spec>) => void) {
    return () => {
        throw new Error("STUB");
    };
  }

  private _createReject(reject: (error: Error) => void) {
    return (error: Error) => {
        throw new Error("STUB");
    };
  }

  // Update actual size and key.
  private _computedOptions() {
    const options = this.options();
    const { key = G2_CHART_KEY } = options;
    const { width, height, depth } = sizeOf(options, this._container);
    this._width = width;
    this._height = height;
    this._key = key;
    return { key: this._key, ...options, width, height, depth };
  }

  // Create canvas if it does not exist.
  // DragAndDropPlugin is for interaction.
  // It is OK to register more than one time, G will handle this.
  private _createCanvas() {
    const { width, height } = sizeOf(this.options(), this._container);
    this._plugins.push(new DragAndDropPlugin());
    this._plugins.forEach((d) => { throw new Error("STUB"); });
    this._context.canvas = new GCanvas({
      container: this._container,
      width,
      height,
      renderer: this._renderer,
    });

    const dom = this._context.canvas
      ?.getContextService()
      ?.getDomElement() as HTMLCanvasElement;
    if (dom) dom.style.display = 'block';
  }

  private _addToTrailing(): Promise<Runtime<Spec>> {
    // Resolve previous promise, and give up this task.
    this._trailingResolve?.(this);

    // Create new task.
    this._trailing = true;
    const promise = new Promise<Runtime<Spec>>((resolve, reject) => {
        throw new Error("STUB");
    });

    return promise;
  }

  private _onResize = debounce(() => {
      throw new Error("STUB");
  }, 300);

  private _bindAutoFit() {
    const options = this.options();
    const { autoFit } = options;

    if (this._hasBindAutoFit) {
      // If it was bind before, unbind it now.
      if (!autoFit) this._unbindAutoFit();
      return;
    }

    if (autoFit) {
      this._hasBindAutoFit = true;
      window.addEventListener('resize', this._onResize);
    }
  }

  private _unbindAutoFit() {
    if (this._hasBindAutoFit) {
      this._hasBindAutoFit = false;
      window.removeEventListener('resize', this._onResize);
    }
  }
}
