import Image from 'next/image';

const UserIcon = ({ ...props }) => {
  return <Image src='/icons/user.png' alt='user icon' width={50} height={50} {...props} />;
};

export default UserIcon;
