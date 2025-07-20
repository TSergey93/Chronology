import { useState, useEffect, useRef, Children, FC, ReactNode } from 'react';

import { throttle } from 'lodash';

import { CIRCLE_DEGREES, HALF_CIRCLE_DEGREES } from './constants';
import { Carousel, CarouselSlide, RotateWrapper } from './styled';
import { getShortestRotationDifference } from './utils';

interface ICircleCarouselProps {
  children: ReactNode[];
  activeIndex: number;
  initialTop: number;
}

const CircleCarousel: FC<ICircleCarouselProps> = ({
  children,
  activeIndex,
  initialTop,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);

  const [isAnimationStopped, setIsAnimationStopped] = useState(false);
  const [carouselRadius, setCarouselRadius] = useState(0);
  const [rotation, setRotation] = useState(0);

  const step = CIRCLE_DEGREES / Children.count(children);
  const offset = -step;

  useEffect(() => {
    const handleResize = throttle(() => {
      if (carouselRef.current) {
        setCarouselRadius(carouselRef.current.offsetWidth / 2);
        setIsAnimationStopped(true);

        setTimeout(() => setIsAnimationStopped(false), 500);
      }
    }, 100);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const targetRotationRaw = -activeIndex * step;
    const currentRotation = rotationRef.current;
    const angleDifference = getShortestRotationDifference(
      targetRotationRaw - currentRotation,
    );
    const newRotation = currentRotation + angleDifference;

    setRotation(newRotation);
    rotationRef.current = newRotation;
  }, [step, activeIndex]);

  return (
    <Carousel
      ref={carouselRef}
      isStopped={isAnimationStopped}
      rotation={rotation}
      top={initialTop}
    >
      {Children.map(children, (child, index) => {
        const rotate = index * step + offset;
        const x =
          carouselRadius * Math.cos((rotate * Math.PI) / HALF_CIRCLE_DEGREES);
        const y =
          carouselRadius * Math.sin((rotate * Math.PI) / HALF_CIRCLE_DEGREES);

        return (
          <CarouselSlide
            transform={`translate(-50%, -50%) translate(${x}px, ${y}px)`}
          >
            <RotateWrapper transform={`rotate(${-rotation}deg)`}>
              {child}
            </RotateWrapper>
          </CarouselSlide>
        );
      })}
    </Carousel>
  );
};

export { CircleCarousel };
