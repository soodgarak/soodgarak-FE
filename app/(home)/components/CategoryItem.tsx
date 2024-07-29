'use client';

import { useFoodListInfoStore } from '@/store/foodList';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type CategoryItemProps = {
  title: string;
  enTitle: string;
  size: '2' | '3';
};

const CategoryItem = ({ title, enTitle, size }: CategoryItemProps) => {
  const router = useRouter();
  const { setType, setKeyword } = useFoodListInfoStore();

  const handleClick = () => {
    setType('category');
    setKeyword(title);
    router.push('/foods');
  };

  return (
    <li
      className={`group relative cursor-pointer overflow-hidden rounded-12 ${size === '2' ? 'col-span-2' : 'col-span-3'}`}
      onClick={handleClick}
    >
      <Image
        src={`/images/${enTitle}.png`}
        alt={title}
        width={300}
        height={0}
        className='h-auto w-full transition group-hover:scale-110'
        priority
      />
      <div className='absolute top-0 flex h-full w-full items-center justify-center bg-black/50'>
        <p className='text-24 font-bold text-white'>{title}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
