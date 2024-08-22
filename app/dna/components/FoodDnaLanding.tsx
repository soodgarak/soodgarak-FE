'use client';

import { useState } from 'react';
import CardSwiper from './CardSwiper';
import { getQueryClient } from '@/context/queryProvider';
import Button from '@/components/Button';

const FoodDnaLanding = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goToFoodDnaTest = async () => {
    setIsLoading(true);
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
      queryKey: ['dna'],
      queryFn: async () => fetch('/api/dna').then((res) => res.json())
    });
    setIsAgree(true);
    setIsLoading(false);
  };

  if (isAgree) {
    return <CardSwiper />;
  }

  return (
    <section className='flex grow flex-col items-center justify-center gap-24'>
      <h1 className='text-center text-28'>
        푸드 DNA 검사를 완료하면 사용자의 취향을 기반으로 음식을 추천받을 수 있습니다.
      </h1>
      <Button onClick={goToFoodDnaTest} className={isLoading ? 'cursor-not-allowed' : ''}>
        {isLoading ? '음식 불러오는중...' : '검사하러 가기'}
      </Button>
    </section>
  );
};

export default FoodDnaLanding;
