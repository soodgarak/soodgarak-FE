import FoodList from '@/components/FoodList';

const TodayRecommandation = () => {
  return (
    <section className='mt-[7.2rem]'>
      <h2 className='mb-24 text-28 font-bold'>오늘 이런 음식은 어때요 ?</h2>
      <FoodList />
    </section>
  );
};

export default TodayRecommandation;
