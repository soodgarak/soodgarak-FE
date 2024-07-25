'use client';

import Image from 'next/image';
import SearchIcon from '@/components/icon/SearchIcon';
import { useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocusHandler = () => {
    inputRef.current?.focus();
  };

  return (
    <header className='sticky top-0 flex gap-20 bg-white p-20'>
      <Link href='/'>
        <Image
          src='/images/soodgarak-logo.png'
          alt='soodgarak logo'
          width={120}
          height={48}
          className='h-[4.8rem] w-[12rem]'
        />
      </Link>
      <div className='relative grow'>
        <input
          className='text-16 rounded-12 h-[4.8rem] w-full bg-gray-sm pl-[4.8rem]'
          placeholder='요리 or 재료'
          ref={inputRef}
        />
        <SearchIcon
          className='absolute left-[1.2rem] top-[1.2rem] h-[2.4rem] w-[2.4rem] cursor-pointer'
          onClick={inputFocusHandler}
        />
      </div>
    </header>
  );
};

export default Header;
