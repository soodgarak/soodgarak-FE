import { create } from 'zustand';

type FoodListInfoState = {
  type: string;
  keyword: string;
};

type FoodListInfoAction = {
  setType: (type: string) => void;
  setKeyword: (keyword: string) => void;
};

export const useFoodListInfoStore = create<FoodListInfoState & FoodListInfoAction>()((set) => ({
  type: '',
  keyword: '',
  setType: (value) => set(() => ({ type: value })),
  setKeyword: (value) => set(() => ({ keyword: value }))
}));
