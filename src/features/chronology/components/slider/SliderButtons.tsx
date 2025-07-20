import { Fragment, forwardRef } from 'react';

import { createPortal } from 'react-dom';
import { useSwiper } from 'swiper/react';

import { SwiperSliderButton } from './styled';
import { ButtonVisibility } from './types';
import { ReactComponent as ArrowBlueIcon } from '../../../../assets/icons/arrow_blue.svg';

const SliderButtons = forwardRef<HTMLDivElement, ButtonVisibility>(
  ({ showPrevButton, showNextButton }, ref) => {
    const swiper = useSwiper();

    if ('current' in ref! && ref.current) {
      return createPortal(
        <Fragment>
          {showPrevButton && (
            <SwiperSliderButton isLeft onClick={() => swiper.slidePrev()}>
              <ArrowBlueIcon />
            </SwiperSliderButton>
          )}
          {showNextButton && (
            <SwiperSliderButton onClick={() => swiper.slideNext()}>
              <ArrowBlueIcon />
            </SwiperSliderButton>
          )}
        </Fragment>,
        ref.current,
      );
    }

    return null;
  },
);

export { SliderButtons };
