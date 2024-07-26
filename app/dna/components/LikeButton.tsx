import React from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
  return (
    <div className='shadow-all flex h-[9rem] w-[9rem] cursor-pointer items-center justify-center rounded-full bg-white'>
      <FaHeart className='h-[5rem] w-[5rem] text-green-500' />
    </div>
  );
};

export default LikeButton;
