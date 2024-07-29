import { DUMMY_FOODS } from '@/mock/data';
import Image from 'next/image';
import Link from 'next/link';

const FoodList = () => {
  return (
    <ul className='grid grid-cols-2 gap-20'>
      {DUMMY_FOODS.map((food) => (
        <li key={food.name}>
          <Link href={`/foods/${food.name}`} className='relative'>
            <Image
              src={food.mainImg}
              alt={`${food.name} 이미지`}
              width={300}
              height={260}
              className='w-full rounded-12'
            />
            <p className='p-12 text-20'>{food.name}</p>
            <div className='absolute right-4 top-4 flex gap-12'>
              <button className='rounded-12 bg-white p-6'>{food.recipeWay}</button>
              <button className='rounded-12 bg-white p-6'>{food.category}</button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
