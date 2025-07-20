import { ButtonVisibility } from './types';
import { Breakpoint } from '../../../../theme';

export const INITIAL_BUTTON_VISIBILITY: ButtonVisibility = {
  showPrevButton: false,
  showNextButton: false,
};

export const SWIPER_BREAKPOINTS = {
  0: {
    slidesPerView: 1.4,
    spaceBetween: 25,
  },
  [Breakpoint.S]: {
    slidesPerView: 2.4,
    spaceBetween: 30,
  },
  [Breakpoint.M]: {
    slidesPerView: 2.4,
    spaceBetween: 40,
  },
  [Breakpoint.XL]: {
    slidesPerView: 3.4,
    spaceBetween: 60,
  },
  [Breakpoint.XXL]: {
    slidesPerView: 3.4,
    spaceBetween: 80,
  },
};
