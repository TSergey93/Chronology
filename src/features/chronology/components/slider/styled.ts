import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

export const SliderWrapper = styled.div(
  ({ theme: { breakpoint } }) => css`
    position: relative;
    margin-top: 56px;
    padding: 0 80px;

    ${breakpoint.xxl} {
      padding: 0;
    }

    ${breakpoint.l} {
      margin-bottom: 76px;
      margin-top: 0;
    }
  `,
);

export const StyledSwiper = styled(Swiper)(
  ({ theme: { breakpoint } }) => css`
    ${breakpoint.xxl} {
      padding: 0 60px;
    }

    ${breakpoint.m} {
      padding: 0 40px;
    }

    ${breakpoint.xs} {
      padding: 0 20px;
    }
  `,
);

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
`;

export const EventDate = styled.div(
  ({ theme: { colors, fontSizes, breakpoint } }) => css`
    font-family: 'Bebas Neue', sans-serif;
    font-size: ${fontSizes[3]}px;
    color: ${colors.scheme.secondary};

    ${breakpoint.l} {
      font-size: ${fontSizes[2]}px;
    }

    ${breakpoint.m} {
      font-size: ${fontSizes[1]}px;
    }
  `,
);

export const EventDescription = styled.div(
  ({ theme: { fontSizes, breakpoint } }) => css`
    font-size: ${fontSizes[2]}px;
    line-height: 1.5;

    ${breakpoint.l} {
      font-size: ${fontSizes[1]}px;
    }

    ${breakpoint.m} {
      font-size: ${fontSizes[0]}px;
    }
  `,
);

export const SwiperSliderButton = styled.button.attrs({ type: 'button' })<{
  isLeft?: boolean;
}>(
  ({ theme: { colors, breakpoint }, isLeft }) => css`
    position: absolute;
    top: 50%;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: ${colors.white};
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 15px ${colors.highlight[2]};
    outline: none;
    transform: translateY(-50%);
    cursor: pointer;

    ${isLeft &&
    css`
      left: 20px;
      transform: translateY(-50%) rotate(180deg);
    `}

    ${breakpoint.xxl} {
      display: none;
    }
  `,
);
