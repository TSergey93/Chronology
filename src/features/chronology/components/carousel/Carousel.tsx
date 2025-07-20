import {
  Fragment,
  useState,
  useEffect,
  useRef,
  FC,
  Dispatch,
  SetStateAction,
} from 'react';

import { throttle } from 'lodash';

import { CircleCarousel } from './CircleCarousel';
import { useAnimatedNumber } from './hooks';
import {
  Period,
  SlideCounter,
  PeriodWrapper,
  CarouselControls,
  CarouselSlideContent,
  CarouselSlideWrapper,
  SwiperCarouselButton,
  StyledArrowMobileIcon,
  CarouselButtonsWrapper,
  StyledArrowDesktopIcon,
} from './styled';
import { formatTwoDigitNumber } from './utils';
import theme from '../../../../theme';
import { MOCK_DATA } from '../../constants';
import { YearPeriod } from '../../types';

interface IChronologyCarouselProps extends Omit<YearPeriod, 'events'> {
  activePeriodIndex: number;
  onPeriodChange: Dispatch<SetStateAction<number>>;
}

const ChronologyCarousel: FC<IChronologyCarouselProps> = ({
  yearStart,
  yearEnd,
  activePeriodIndex,
  onPeriodChange,
}) => {
  const periodWrapperRef = useRef<HTMLDivElement>(null);

  const [periodWrapperYPosition, setPeriodWrapperYPosition] = useState(0);

  const animatedYearStart = useAnimatedNumber(yearStart);
  const animatedYearEnd = useAnimatedNumber(yearEnd);

  const isPrevButtonDisabled = activePeriodIndex === 0;
  const isNextButtonDisabled = MOCK_DATA.length - 1 === activePeriodIndex;

  useEffect(() => {
    const handleResize = throttle(() => {
      if (periodWrapperRef.current) {
        const rect = periodWrapperRef.current.getBoundingClientRect();
        setPeriodWrapperYPosition(rect.top + window.scrollY + rect.height / 2);
      }
    }, 100);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>
      <PeriodWrapper ref={periodWrapperRef}>
        <Period color={theme.colors.scheme.secondary}>
          {animatedYearStart}
        </Period>
        <Period color={theme.colors.scheme.tertiary}>{animatedYearEnd}</Period>
      </PeriodWrapper>
      <CarouselSlideWrapper>
        <CircleCarousel
          activeIndex={activePeriodIndex}
          initialTop={periodWrapperYPosition}
        >
          {MOCK_DATA.map(({ field }, index) => (
            <CarouselSlideContent
              key={field}
              content={field}
              isActive={activePeriodIndex === index}
              onClick={() => onPeriodChange(index)}
            >
              <span>{index + 1}</span>
            </CarouselSlideContent>
          ))}
        </CircleCarousel>
        <CarouselControls>
          <SlideCounter>
            {formatTwoDigitNumber(activePeriodIndex + 1)}/
            {formatTwoDigitNumber(MOCK_DATA.length)}
          </SlideCounter>
          <CarouselButtonsWrapper>
            <SwiperCarouselButton
              disabled={isPrevButtonDisabled}
              hasOpacity={isPrevButtonDisabled}
              onClick={() => onPeriodChange(prev => prev - 1)}
            >
              <StyledArrowDesktopIcon />
              <StyledArrowMobileIcon />
            </SwiperCarouselButton>
            <SwiperCarouselButton
              hasRotate
              disabled={isNextButtonDisabled}
              hasOpacity={isNextButtonDisabled}
              onClick={() => onPeriodChange(prev => prev + 1)}
            >
              <StyledArrowDesktopIcon />
              <StyledArrowMobileIcon />
            </SwiperCarouselButton>
          </CarouselButtonsWrapper>
        </CarouselControls>
      </CarouselSlideWrapper>
    </Fragment>
  );
};

export { ChronologyCarousel };
