import FoodListItem from '@/app/(home)/components/FoodListItem';
import { DUMMY_FOODS } from '@/mock/data';

const FoodList = () => {
  return (
    <ul className='grid grid-cols-2 gap-20'>
      {DUMMY_FOODS.map((food) => (
        <li key={food.name}>
          <FoodListItem food={food} />
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
