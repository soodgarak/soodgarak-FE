'use client';

import FoodCard from './FoodCard';

const DUMMY_FOODS = [
  {
    title: '대패짬뽕',
    image: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702651_234_10.jpg'
  },
  {
    title: '대패베이컨칩',
    image: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702640_234_09.jpg'
  },
  {
    title: '닭가슴살양배추쌈',
    image: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702639_234_08.jpg'
  },
  {
    title: '시금치계란찜',
    image: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702628_234_07.jpg'
  },
  {
    title: '감자토스트',
    image: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702617_234_06.jpg'
  }
];

const CardSwiper = () => {
  return (
    <section className=''>
      {DUMMY_FOODS.map((food) => (
        <FoodCard key={food.title} food={food} />
      ))}
    </section>
  );
};

export default CardSwiper;
