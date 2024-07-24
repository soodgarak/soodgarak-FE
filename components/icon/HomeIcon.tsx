import Image from 'next/image';

const HomeIcon = ({ ...props }) => {
  return <Image src='/icons/home.png' alt='home icon' width={50} height={50} {...props} />;
};

export default HomeIcon;
