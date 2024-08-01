'use client';

import { DUMMY_FOODS } from '@/mock/data';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Image from 'next/image';
import HateButton from './HateButton';
import LikeButton from './LikeButton';
import { useRef, useState } from 'react';
import { Food } from '@/types/food';

const TestSwiper2 = () => {
  const [cards, setCards] = useState<Food[]>(DUMMY_FOODS);
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [springs, api] = useSprings(cards.length, (index) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    config: { duration: window.innerWidth * 0.7 }
  }));
  const frame = useRef<HTMLDivElement>(null);
  const gone = new Set<number>();

  const complete = (
    isTrigger: boolean,
    index: number,
    xDir: number,
    active = false,
    mx = 0,
    vx = 1
  ) => {
    if (isTrigger) gone.add(index);

    api.start((i) => {
      if (index !== i) return;
      setCurrentIndex(index - 1);

      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
      const rotate = active
        ? (mx / window.innerWidth) * 20
        : isGone
          ? mx / 100 + xDir * 10 * vx
          : 0;

      const scale = active ? 1.1 : 1;

      return {
        x,
        y: 0,
        rotate,
        scale,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 }
      };
    });
  };

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], velocity: [vx], args: [index] }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) gone.add(index);

      complete(!active && trigger, index, xDir, active, mx, vx);
    }
  );

  const like = () => {
    complete(true, currentIndex, 1);
  };

  const hate = () => {
    complete(true, currentIndex, -1);
  };

  return (
    <section className='relative mx-auto flex w-[50rem] grow flex-col items-center' ref={frame}>
      {cards.map((food, index) => (
        <animated.div
          key={food.name}
          style={springs[index]}
          {...bind(index)}
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
