import styled, { css } from 'styled-components';

export const CenteredWrapper = styled.main(
  ({ theme: { breakpoint } }) => css`
    max-width: 1560px;
    margin: 0 auto;
    padding: 0 60px;
    overflow: hidden;

    ${breakpoint.xxl} {
      padding: 0;
    }
  `,
);

export const ChronologyWrapper = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    padding: 170px 0 105px;
    background:
      linear-gradient(${colors.highlight[1]}) no-repeat center/1px 100%,
      linear-gradient(${colors.highlight[1]}) no-repeat left/1px 100%,
      linear-gradient(${colors.highlight[1]}) no-repeat right/1px 100%;

    ${breakpoint.xxl} {
      margin: 0;
      padding: 100px 0 80px;
      background: none;
    }

    ${breakpoint.xl} {
      padding: 60px 0;
    }

    ${breakpoint.m} {
      padding-bottom: 30px;
    }

    ${breakpoint.xs} {
      padding-bottom: 15px;
    }
  `,
);

export const Title = styled.h1(
  ({ theme: { colors, fontSizes, breakpoint } }) => css`
    position: relative;
    width: min-content;
    margin: 0;
    padding-left: 80px;
    font-size: ${fontSizes[4]}px;
    font-weight: 600;

    &::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      width: 5px;
      height: 90%;
      background: linear-gradient(
        to bottom,
        ${colors.scheme.secondary},
        ${colors.scheme.tertiary}
      );
    }

    ${breakpoint.xxl} {
      padding-left: 60px;

      &::before {
        display: none;
      }
    }

    ${breakpoint.m} {
      padding-left: 40px;
    }

    ${breakpoint.s} {
      font-size: ${fontSizes[3]}px;
    }

    ${breakpoint.xs} {
      padding-left: 20px;
      font-size: ${fontSizes[2]}px;
    }
  `,
);
