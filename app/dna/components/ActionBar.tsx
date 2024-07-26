import LikeButton from '@/app/dna/components/LikeButton';
import HateButton from './HateButton';

const ActionBar = () => {
  return (
    <section className='flex justify-center gap-36 p-20'>
      <HateButton />
      <LikeButton />
    </section>
  );
};

export default ActionBar;
