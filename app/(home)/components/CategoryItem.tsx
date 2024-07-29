import Image from 'next/image';
import Link from 'next/link';

type CategoryItemProps = {
  title: string;
  size: '2' | '3';
  imgName: string;
  link: string;
};

const CategoryItem = ({ title, size, imgName, link }: CategoryItemProps) => {
  return (
    <Link
      href={link}
      className={`relative overflow-hidden rounded-12 ${size === '2' ? 'col-span-2' : 'col-span-3'}`}
    >
      <Image
        src={`/images/${imgName}.png`}
        alt={title}
        width={300}
        height={160}
        className='h-[16rem] w-full'
      />
      <div className='absolute top-0 flex h-full w-full items-center justify-center bg-black/50'>
        <p className='text-24 font-bold text-white'>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
