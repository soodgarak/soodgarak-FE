'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
const CardSwiper = dynamic(() => import('./CardSwiper'), { ssr: false });

const FoodDnaLanding = () => {
  const [isAgree, setIsAgree] = useState(false);

  if (isAgree) {
    return <CardSwiper />;
  }

  return (
    <section className='flex grow flex-col items-center justify-center gap-24'>
      <h1 className='text-center text-28'>
        푸드 DNA 검사를 완료하면 사용자의 취향을 기반으로 음식을 추천받을 수 있습니다.
      </h1>
      <button
        className='bg-primary rounded-12 p-12 text-24 text-white'
        onClick={() => setIsAgree(true)}
      >
        검사하러 가기
      </button>
    </section>
  );
};

export default FoodDnaLanding;
