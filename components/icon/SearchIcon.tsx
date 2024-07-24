import Image from 'next/image';

const SearchIcon = ({ ...props }) => {
  return <Image src='/icons/search.png' alt='search icon' width={24} height={24} {...props} />;
};

export default SearchIcon;
