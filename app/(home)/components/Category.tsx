import Image from 'next/image';
import CategoryItem from './CategoryItem';

const Category = () => {
  return (
    <section className='mt-[7.2rem]'>
      <h2 className='mb-24 text-28 font-bold'>어떤 음식을 찾으시나요 ?</h2>
      <div className='grid grid-cols-6 gap-12'>
        <CategoryItem
          title='자극적인 음식'
          link='/foods?type=category&keyword=자극적인 음식'
          imgName='spicy'
          size='3'
        />
        <CategoryItem
          title='담백한 음식'
          link='/foods?type=category&keyword=담백한 음식'
          imgName='mild'
          size='3'
        />
        <CategoryItem
          title='육류'
          link='/foods?type=category&keyword=육류'
          imgName='meat'
          size='2'
        />
        <CategoryItem
          title='해산물'
          link='/foods?type=category&keyword=해산물'
          imgName='seafood'
          size='2'
        />
        <CategoryItem
          title='야채 과일 기타'
          link='/foods?type=category&keyword=야채 과일 기타'
          imgName='vegetable'
          size='2'
        />
      </div>
    </section>
  );
};

export default Category;
