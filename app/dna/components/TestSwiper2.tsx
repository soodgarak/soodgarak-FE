'use client';

import { DUMMY_FOODS } from '@/mock/data';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Image from 'next/image';
import HateButton from './HateButton';
import LikeButton from './LikeButton';
import { useRef, useState } from 'react';
import { Food } from '@/types/food';

const TestSwiper2 = () => {
  const [cards, setCards] = useState<Food[]>(DUMMY_FOODS);
  const [{ x, y, rotate }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotate: 0
  }));
  const frame = useRef<HTMLDivElement>(null);

  const complete = (mx: number, my: number) => {
    const flyX = (Math.abs(mx) / mx) * window.innerWidth * 1.3;
    const flyY = (my / mx) * flyX;

    api.start({
      x: flyX,
      y: flyY,
      rotate: (flyX / window.innerWidth) * 50,
      immediate: false,
      config: { duration: window.innerWidth * 0.7 },
      onRest: () => {
        setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
        api.set({ x: 0, y: 0, rotate: 0 });
      }
    });
  };

  const cancel = () => {
    api.start({
      x: 0,
      y: 0,
      rotate: 0,
      immediate: false
    });
  };

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (!frame.current) return;
    if (Math.abs(mx) > frame.current.clientWidth / 2 && !down) {
      complete(mx, my);
    } else {
      cancel();
    }
    down &&
      api.start({
        x: mx,
        y: my,
        rotate: (mx / window.innerWidth) * 20,
        immediate: down
      });
  });

  const like = () => {
    complete(1, 0);
  };

  const hate = () => {
    complete(-1, 0);
  };

  return (
    <section className='relative mx-auto flex w-[50rem] grow flex-col items-center' ref={frame}>
      {cards.map((food, index) => (
        <animated.div
          key={food.name}
          style={index === cards.length - 1 ? { x, y, rotate } : {}}
          {...bind()}
          className='absolute z-20 h-5/6 w-[50rem] cursor-grab touch-none overflow-hidden rounded-16 bg-white'
        >
          <Image
            src={food.mainImg}
            alt={`${food.name} 이미지`}
            width={360}
            height={540}
            className='h-full w-full object-cover'
            priority
          />
          <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/10 to-black/40' />
          <p className='absolute bottom-8 left-1/2 w-full -translate-x-1/2 text-center text-40 text-white'>
            {food.name}
          </p>
        </animated.div>
      ))}
      <div className='absolute bottom-0 flex justify-center gap-36'>
        <HateButton onClick={hate} />
        <LikeButton onClick={like} />
      </div>
    </section>
  );
};

export default TestSwiper2;
