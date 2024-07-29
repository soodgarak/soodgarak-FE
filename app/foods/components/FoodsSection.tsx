'use client';

import FoodList from '@/components/FoodList';
import { useFoodListInfoStore } from '@/store/foodList';
import React from 'react';

const FoodsSection = () => {
  const { type, keyword } = useFoodListInfoStore();
  return (
    <section>
      <h1 className='mb-24 text-28 font-bold'>
        {type === 'category' ? `${keyword}` : `"${keyword}"의 검색결과`}
      </h1>
      <FoodList />
    </section>
  );
};

export default FoodsSection;
