import { redirect } from 'next/navigation';

type FoodPageProps = {
  searchParams: {
    type: string;
    keyword: string;
  };
};

const FoodPage = ({ searchParams }: FoodPageProps) => {
  if (!searchParams.type || !searchParams.keyword) return redirect('/');
  return (
    <div>
      타입: {searchParams.type}, 키워드: {searchParams.keyword}
    </div>
  );
};

export default FoodPage;
