'use client';

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import { CategoryOption, categoryOptions, subCategoryOptions } from '@/utils/categoryData';

const AddIngredients = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<CategoryOption | null>(null);
  const [itemName, setItemName] = useState('');
  const [storage, setStorage] = useState<string | null>('냉장');

  const handleCategoryChange = (option: CategoryOption | null) => {
    setSelectedCategory(option);
    setSelectedSubCategory(null); // 대분류 내용이 변경되면 소분류 초기화
  };

  const handleSubCategoryChange = (option: CategoryOption | null) => {
    setSelectedSubCategory(option);
  };

  // 옵션 커스텀
  const formatOptionLabel = (option: CategoryOption) => (
    <div className='flex items-center'>
      <div className='relative mr-8 h-[4rem] w-[4rem]'>
        <Image src={option.imageUrl} alt={option.label} fill />
      </div>
      <span>{option.label}</span>
    </div>
  );

  // 현재 선택된 대분류에 소분류 옵션이 있는지 확인
  const hasSubCategories =
    selectedCategory && subCategoryOptions[selectedCategory.value]?.length > 0;

  const handleStorageChange = (value: string) => {
    setStorage(value);
  };

  return (
    <div>
      <h3 className='mb-32 text-28 font-bold'>냉장고 식재료 추가하기</h3>
      <div className='mb-32'>
        <label className='mb-12 block text-20'>분류</label>
        <div className='flex items-center justify-between'>
          <div className='w-[28.1rem]'>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={categoryOptions}
              formatOptionLabel={formatOptionLabel}
              placeholder='대분류'
              isSearchable={false}
              styles={{
                control: (base) => ({
                  ...base,
                  height: '6rem',
                  fontSize: '1.8rem'
                })
              }}
            />
          </div>
          {hasSubCategories && (
            <>
              <div className='relative mx-10 h-[2.8rem] w-[1.8rem]'>
                <Image src='/images/arrow_next.png' alt='오른쪽화살표' fill />
              </div>
              <div className='w-[28.1rem]'>
                <Select
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  options={subCategoryOptions[selectedCategory.value]}
                  formatOptionLabel={formatOptionLabel}
                  placeholder='소분류'
                  isSearchable={false}
                  styles={{
                    control: (base) => ({
                      ...base,
                      height: '6rem',
                      fontSize: '1.8rem'
                    })
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className='mb-32'>
        <label className='mb-12 block text-20'>이름</label>
        <input
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className='rounded-4 border-gray-md h-[4.8rem] w-[28.1rem] border px-12 text-18 focus:outline-[#2684ff]'
        />
      </div>
      <div className='mb-32'>
        <label className='mb-12 block text-20'>보관 상태</label>
        <div className='flex space-x-4'>
          <button
            onClick={() => handleStorageChange('냉장')}
            className={`border-gray-md h-[3.6rem] w-[7.2rem] rounded-20 border text-18 transition-colors ${
              storage === '냉장' ? 'bg-gray-400 text-white' : 'text-gray-800'
            }`}
          >
            냉장
          </button>
          <button
            onClick={() => handleStorageChange('냉동')}
            className={`h-[3.6rem] w-[7.2rem] rounded-20 border text-18 transition-colors ${
              storage === '냉동' ? 'bg-gray-400 text-white' : 'text-gray-800'
            }`}
          >
            냉동
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredients;
