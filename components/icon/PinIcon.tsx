import Image from 'next/image';

const PinIcon = ({ ...props }) => {
  return <Image src='/icons/pin.png' alt='pin icon' width={50} height={50} {...props} />;
};

export default PinIcon;
