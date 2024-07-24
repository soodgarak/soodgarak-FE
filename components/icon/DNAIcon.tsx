import Image from 'next/image';

const DNAIcon = ({ ...props }) => {
  return <Image src='/icons/dna.png' alt='dna icon' width={50} height={50} {...props} />;
};

export default DNAIcon;
