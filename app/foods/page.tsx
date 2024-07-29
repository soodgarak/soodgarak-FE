import FoodList from '@/components/FoodList';
import { redirect } from 'next/navigation';

type FoodPageProps = {
  searchParams: {
    type: string;
    keyword: string;
  };
};

const FoodPage = ({ searchParams }: FoodPageProps) => {
  if (!searchParams.type || !searchParams.keyword) return redirect('/');
  const { type, keyword } = searchParams;

  return (
    <section>
      <h1 className='mb-24 text-28 font-bold'>
        {type === 'category' ? `${keyword}` : `"${keyword}"의 검색결과`}
      </h1>
      <FoodList />
    </section>
  );
};

export default FoodPage;
