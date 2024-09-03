import { FoodsResponse } from '@/types/food';

export const getTodayRecommendationFoods = async (pageParams: number): Promise<FoodsResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe?page=${pageParams}`);
  const foods = await res.json();

  return foods;
};

export const getFoodsByCategory = async (
  category: string,
  pageParams: number
): Promise<FoodsResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe?category=${category}&page=${pageParams}`
  );
  const foods = await res.json();

  return foods;
};

export const getFoodsByKeyword = async (
  keyword: string,
  pageParams: number
): Promise<FoodsResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe?keyword=${keyword}&page=${pageParams}`
  );
  const foods = await res.json();

  return foods;
};

export const getFoodCards = async (): Promise<FoodsResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe`);
  const foods = await res.json();

  return foods;
};
