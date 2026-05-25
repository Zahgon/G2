import { deepMix } from '@antv/util';
import { ThemeComponent as TC, Theme } from '../runtime';
import { create } from './create';

export const tokens = {
  colorBlack: '#000',
  colorWhite: '#fff',
  colorStroke: '#888',
  colorDefault: '#4e79a7',
  colorBackground: 'transparent',
  category10: [
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ],
  category20: [
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ],
  padding1: 8,
  padding2: 12,
  padding3: 20,
  alpha90: 0.9,
  alpha65: 0.65,
  alpha45: 0.45,
  alpha25: 0.25,
  alpha10: 0.1,
};

const defaults = create(tokens);

export type AcademyOptions = Theme;

export const Academy: TC<AcademyOptions> = (options) => {
    throw new Error("STUB");
};

Academy.props = {};
