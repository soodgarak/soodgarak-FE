'use client';

import { DUMMY_FOODS } from '@/mock/data';
import Image from 'next/image';
import HateButton from './HateButton';
import LikeButton from './LikeButton';
import { useRef, useState } from 'react';

const TestSwiper = () => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  const currentCard = useRef<HTMLDivElement | null>(null);
  const frame = useRef<HTMLDivElement | null>(null);

  const setTransform = (x: number, y: number, deg: number, duration?: number | undefined) => {
    if (currentCard.current) {
      currentCard.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`;
      if (duration) currentCard.current.style.transition = `transform ${duration}ms`;
    }
  };

  const complete = () => {};

  const cancel = () => {
    setTransform(0, 0, 0, 100);
    setTimeout(() => {
      if (currentCard.current) currentCard.current.style.transition = '';
    }, 100);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const x = e.clientX - startX;
    const y = e.clientY - startY;
    setMoveX(x);
    setMoveY(y);

    setTransform(x, y, (x / window.innerWidth) * 50);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!frame.current || !currentCard.current) return;

    if (Math.abs(moveX) > frame.current.clientWidth / 2) {
      complete();
    } else {
      cancel();
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  return (
    <section className='relative flex grow flex-col items-center' ref={frame}>
      {DUMMY_FOODS.map((food, index) => (
        <div
          key={food.name}
          className='absolute h-5/6 w-[50rem] cursor-grab touch-none overflow-hidden rounded-16 bg-white'
          onPointerDown={onPointerDown}
          // onPointerMove={onPointerMove}
          // onPointerUp={onPointerUp}
          // onPointerLeave={onPointerUp}
          ref={index === DUMMY_FOODS.length - 1 ? currentCard : null}
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
        </div>
      ))}
      <div className='absolute bottom-0 flex justify-center gap-36'>
        <HateButton onClick={() => {}} />
        <LikeButton onClick={() => {}} />
      </div>
    </section>
  );
};

export default TestSwiper;
