'use client';

import { DUMMY_FOODS } from '@/mock/data';
import Image from 'next/image';
import HateButton from './HateButton';
import LikeButton from './LikeButton';

const TestSwiper = () => {
  return (
    <section className='relative flex grow flex-col items-center'>
      {DUMMY_FOODS.map((food) => (
        <div
          key={food.name}
          className='absolute h-5/6 w-[50rem] cursor-grab touch-none overflow-hidden rounded-16 bg-white'
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
