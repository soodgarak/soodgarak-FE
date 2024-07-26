import Image from 'next/image';

type FoodCardProps = {
  food: {
    title: string;
    image: string;
  };
};

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className='relative h-[60vh] w-[46rem] overflow-hidden rounded-16'>
      <Image
        src={food.image}
        alt={`${food.title} 이미지`}
        width={360}
        height={540}
        className='h-[60vh] w-[46rem] object-cover'
      />
      <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/10 to-black/40' />
      <p className='absolute bottom-4 left-1/2 -translate-x-1/2 text-24 text-white'>{food.title}</p>
    </div>
  );
};

export default FoodCard;
