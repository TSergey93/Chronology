import { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';

export const useAnimatedNumber = (value: number): number => {
  const objRef = useRef({ val: value });

  const [animatedNumber, setAnimatedNumber] = useState(value);

  useEffect(() => {
    objRef.current.val = animatedNumber;

    gsap.to(objRef.current, {
      val: value,
      duration: 0.3,
      snap: { val: 1 },
      onUpdate: () => setAnimatedNumber(objRef.current.val),
    });
  }, [value, animatedNumber]);

  return animatedNumber;
};
