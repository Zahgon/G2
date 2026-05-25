import { DisplayObject } from '@antv/g';
import { G2MarkState, Scale } from '../runtime';
import { Mark as Spec } from '../spec';
import { Node } from './node';
import { defineProps } from './define';
import { markProps } from './props';
import { PropsOf } from './types';

export interface MarkNode extends PropsOf<typeof markProps, Spec, MarkNode> {}

@defineProps(markProps)
export class MarkNode extends Node<Spec & { [key: string]: any }> {
  changeData(data: any) {
    const chart = this.getRoot();
    if (!chart) return;
    this.attr('data', data);
    return chart?.render();
  }

  /**
   * Get mark from chart views.
   */
  getMark(): G2MarkState {
      throw new Error("STUB");
  }

  /**
   * Get all scales instance.
   */
  getScale(): Record<string, Scale> {
    const chartView = this.getRoot()?.getView();
    if (!chartView) return undefined;
    return chartView?.scale;
  }

  /**
   * Get the scale instance by channel.
   */
  getScaleByChannel(channel: string): Scale {
      throw new Error("STUB");
  }

  /**
   * Get canvas group.
   */
  getGroup(): DisplayObject {
    const key = this.attr('key');
    if (!key) return undefined;
    const chart = this.getRoot();
    const chartGroup = chart.getContext().canvas.getRoot();
    return chartGroup.getElementById(key);
  }
}
