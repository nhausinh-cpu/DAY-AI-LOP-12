import type { Slide } from '../types';
import { SLIDES_PART_1 } from './slidesPart1';
import { SLIDES_PART_2 } from './slidesPart2';
import { SLIDES_PART_3 } from './slidesPart3';

export const ALL_SLIDES: Slide[] = [
  ...SLIDES_PART_1,
  ...SLIDES_PART_2,
  ...SLIDES_PART_3,
];

export const TOTAL_SLIDES_COUNT = ALL_SLIDES.length;
