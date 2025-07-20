import { useState, useRef, FC } from 'react';

import { Swiper as SwiperCore } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { SWIPER_BREAKPOINTS, INITIAL_BUTTON_VISIBILITY } from './constants';
import { SliderButtons } from './SliderButtons';
import {
  EventCard,
  EventDate,
  StyledSwiper,
  SliderWrapper,
  EventDescription,
} from './styled';
import { Event } from '../../types';

import 'swiper/css';

const ChronologySlider: FC<{ events: Event[] }> = ({ events }) => {
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const [buttonVisibility, setButtonVisibility] = useState(
    INITIAL_BUTTON_VISIBILITY,
  );

  const handleChange = (swiper: SwiperCore) => {
    setButtonVisibility({
      showPrevButton: !swiper.isBeginning,
      showNextButton: !swiper.isEnd,
    });
  };

  return (
    <SliderWrapper ref={sliderWrapperRef}>
      <StyledSwiper
        navigation
        breakpoints={SWIPER_BREAKPOINTS}
        modules={[Navigation]}
        onInit={handleChange}
        onResize={handleChange}
        onSlideChange={handleChange}
        onUpdate={handleChange}
      >
        {events.map(({ year, description }) => (
          <SwiperSlide key={year}>
            <EventCard>
              <EventDate>{year}</EventDate>
              <EventDescription>{description}</EventDescription>
            </EventCard>
          </SwiperSlide>
        ))}
        <SliderButtons ref={sliderWrapperRef} {...buttonVisibility} />
      </StyledSwiper>
    </SliderWrapper>
  );
};

export { ChronologySlider };
