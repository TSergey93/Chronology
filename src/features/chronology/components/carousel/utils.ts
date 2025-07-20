import { CIRCLE_DEGREES, HALF_CIRCLE_DEGREES } from './constants';

export const formatTwoDigitNumber = (value: number | string): string => {
  return String(value).padStart(2, '0');
};

export const getShortestRotationDifference = (angle: number): number => {
  if (angle === 0) return 0;

  let diff =
    ((angle + HALF_CIRCLE_DEGREES) % CIRCLE_DEGREES) - HALF_CIRCLE_DEGREES;

  if (Math.abs(diff) === HALF_CIRCLE_DEGREES) {
    diff = HALF_CIRCLE_DEGREES;
  } else {
    diff += diff > HALF_CIRCLE_DEGREES ? -CIRCLE_DEGREES : CIRCLE_DEGREES;
  }

  return diff;
};
