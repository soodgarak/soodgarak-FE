'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

type SelectSwiperWrapperProps = {
  children: Array<React.ReactNode>;
};

const SelectSwiperWrapper = ({ children }: SelectSwiperWrapperProps) => {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='w-[400px]'>
      {children.map((c, idx) => (
        <SwiperSlide className='rounded-12' key={idx}>
          {c}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SelectSwiperWrapper;
