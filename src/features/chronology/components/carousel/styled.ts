import styled, { css } from 'styled-components';

import { ReactComponent as ArrowGrayIcon } from '../../../../assets/icons/arrow_gray.svg';
import { ReactComponent as ArrowGraySmallIcon } from '../../../../assets/icons/arrow_gray_small.svg';

export const PeriodWrapper = styled.div(
  ({ theme: { colors, fontSizes, breakpoint } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 96px 0 137px;
    font-size: ${fontSizes[8]}px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -2px;
    background: linear-gradient(${colors.highlight[1]}) no-repeat center/100%
      1px;

    ${breakpoint.xxl} {
      gap: 10%;
      font-size: ${fontSizes[7]}px;
    }

    ${breakpoint.xl} {
      font-size: ${fontSizes[6]}px;
    }

    ${breakpoint.l} {
      margin: 0 60px 20px;
      padding: 60px 0;
      font-size: ${fontSizes[5]}px;
      background: none;
      border-bottom: 1px solid ${colors.highlight[1]};
    }

    ${breakpoint.m} {
      margin: 0 30px 20px;
    }

    ${breakpoint.s} {
      margin: 0 15px 20px;
      font-size: ${fontSizes[4]}px;
    }

    ${breakpoint.xs} {
      gap: 30px;
      margin: 0 15px 20px;
    }
  `,
);

export const Period = styled.span<{ color: string }>(
  ({ color }) => css`
    color: ${color};
  `,
);

export const CarouselSlideWrapper = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    padding-left: 80px;

    ${breakpoint.xxl} {
      padding-left: 60px;
    }

    ${breakpoint.l} {
      position: relative;
      flex-direction: row-reverse;
      justify-content: flex-end;
      order: 1;
    }

    ${breakpoint.m} {
      padding-left: 40px;
    }

    ${breakpoint.xs} {
      padding-left: 20px;
    }
  `,
);

export const Carousel = styled.div<{
  isStopped: boolean;
  rotation: number;
  top: number;
}>(
  ({ theme: { colors, breakpoint }, isStopped, rotation, top }) => css`
    position: absolute;
    left: 50%;
    top: ${top}px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 530px;
    border: 1px solid ${colors.highlight[1]};
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    transform: translate(-50%, -50%) rotate(${rotation}deg);
    transition: ${isStopped ? 'none' : 'transform 500ms linear'};

    ${breakpoint.xl} {
      width: 400px;
    }

    ${breakpoint.l} {
      top: 50%;
      gap: 15px;
      width: auto;
      border: none;
      border-radius: 0;
      aspect-ratio: auto;
      transform: translate(-50%, -50%);
      transition: none;
    }

    ${breakpoint.m} {
      gap: 10px;
    }

    ${breakpoint.s} {
      transform: translate(-50%, 50%);
    }
  `,
);

export const CarouselSlide = styled.div<{ transform: string }>(
  ({ theme: { breakpoint }, transform }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${transform};

    ${breakpoint.l} {
      position: static;
      top: auto;
      left: auto;
      transform: none;
    }
  `,
);

export const RotateWrapper = styled.div<{ transform: string }>(
  ({ transform }) => css`
    transform: ${transform};
    transition: transform 500ms linear;
  `,
);

const slideHoverActiveStyles = ({ theme: { colors } }) => css`
  &::before {
    width: 56px;
    height: 56px;
    background: ${colors.background};
  }

  & span {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CarouselSlideContent = styled.div<{
  isActive: boolean;
  content: string;
}>(
  ({ theme: { colors, fontSizes, breakpoint }, isActive, content }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    font-size: ${fontSizes[2]}px;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      background: ${colors.scheme.primary};
      border-radius: 50%;
      outline: 1px solid ${colors.highlight[0]};
      transform: translate(-50%, -50%);
      transition: all 300ms linear;
    }

    &::after {
      content: '${content}';
      position: absolute;
      opacity: 0;
      right: -20px;
      font-weight: 600;
      transform: translateX(100%);
      transition: opacity 200ms linear;
      transition-delay: ${isActive ? 600 : 0}ms;
      cursor: default;
    }

    & span {
      opacity: 0;
      transform: scale(0.4);
      transition: all 100ms 50ms linear;
    }

    &:hover {
      ${slideHoverActiveStyles};
    }

    ${isActive &&
    css`
      ${slideHoverActiveStyles};
      cursor: default;

      &::after {
        opacity: 1;
      }
    `}

    ${breakpoint.l} {
      position: static;
      opacity: 0.4;
      width: 10px;
      height: 10px;
      background: ${colors.scheme.primary};

      &::before {
        display: none;
      }

      &::after {
        display: none;
      }

      & span {
        display: none;
      }

      ${isActive &&
      css`
        opacity: 1;
      `}
    }

    ${breakpoint.s} {
      width: 8px;
      height: 8px;
    }

    ${breakpoint.xs} {
      width: 6px;
      height: 6px;
    }
  `,
);

export const CarouselControls = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 25px;

    ${breakpoint.l} {
      gap: 15px;
    }

    ${breakpoint.m} {
      gap: 10px;
    }
  `,
);

export const SlideCounter = styled.span(
  ({ theme: { fontSizes } }) => css`
    font-size: ${fontSizes[0]}px;
  `,
);

export const CarouselButtonsWrapper = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    gap: 20px;
    width: fit-content;

    ${breakpoint.m} {
      gap: 15px;
    }

    ${breakpoint.xs} {
      gap: 10px;
    }

    ${breakpoint.xs} {
      gap: 8px;
    }
  `,
);

export const SwiperCarouselButton = styled.button.attrs({ type: 'button' })<{
  hasRotate?: boolean;
  hasOpacity?: boolean;
}>(
  ({ theme: { colors, breakpoint }, hasRotate, hasOpacity }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 1px solid ${colors.highlight[0]};
    border-radius: 50%;
    cursor: pointer;

    ${hasRotate &&
    css`
      transform: rotate(180deg);
    `}

    ${hasOpacity &&
    css`
      opacity: 0.5;
      cursor: default;
    `}

    ${breakpoint.s} {
      width: 30px;
      height: 30px;
    }

    ${breakpoint.xs} {
      width: 25px;
      height: 25px;
    }
  `,
);

export const StyledArrowDesktopIcon = styled(ArrowGrayIcon)(
  ({ theme: { breakpoint } }) => css`
    display: block;

    ${breakpoint.xs} {
      display: none;
    }
  `,
);

export const StyledArrowMobileIcon = styled(ArrowGraySmallIcon)(
  ({ theme: { breakpoint } }) => css`
    display: none;

    ${breakpoint.xs} {
      display: block;
    }
  `,
);
