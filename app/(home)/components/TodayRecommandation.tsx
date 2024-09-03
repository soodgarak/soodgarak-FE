'use client';

import FoodList from '@/components/FoodList';
import Spinner from '@/components/Spinner';
import useObserver from '@/hooks/useObserver';
import { getTodayRecommendationFoods } from '@/service/food';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';

const TodayRecommandation = () => {
  const { data, isPending, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['foods', { type: 'today' }],
    queryFn: ({ pageParam }) => getTodayRecommendationFoods(pageParam),
    initialPageParam: 1,
    getNextPageParam: (result, _, next) => {
      if (!result.hasNextData) return undefined;

      return next + 1;
    }
  });

  const bottom = useRef(null);

  const onIntersect: (entries: IntersectionObserverEntry[]) => void = ([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect
  });

  return (
    <>
      <section className='mt-[7.2rem]'>
        <h2 className='mb-24 text-28 font-bold'>오늘 이런 음식은 어때요 ?</h2>
        {isPending && <Spinner color='border-primary' />}
        {data?.pages.map((page, index) => <FoodList key={index} foods={page.recipeResponse} />)}
        {isFetchingNextPage && <Spinner color='border-primary' />}
      </section>
      <div ref={bottom} />
    </>
  );
};

export default TodayRecommandation;
