'use client';

import Image from 'next/image';
import SearchIcon from '@/components/icon/SearchIcon';
import { useRef } from 'react';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocusHandler = () => {
    inputRef.current?.focus();
  };

  return (
    <header className='sticky top-0 flex gap-8 bg-white p-8'>
      <Image
        src='/images/soodgarak-logo.png'
        alt='soodgarak logo'
        width={120}
        height={48}
        className='h-[4.8rem] w-[12rem]'
      />
      <div className='relative w-full'>
        <input
          className='bg-gray-sm h-[4.8rem] w-full rounded-md pl-[4.8rem] text-[1.6rem]'
          placeholder='요리 or 재료'
          ref={inputRef}
        />
        <SearchIcon
          className='absolute left-[1.2rem] top-[1.2rem] cursor-pointer'
          onClick={inputFocusHandler}
        />
      </div>
    </header>
  );
};

export default Header;
