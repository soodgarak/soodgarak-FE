import HomeIcon from '@/components/icon/HomeIcon';
import DNAIcon from '@/components/icon/DNAIcon';
import PinIcon from '@/components/icon/PinIcon';
import UserIcon from '@/components/icon/UserIcon';
import Link from 'next/link';

const NAV_ITEMS = [
  { title: '홈', link: '/', Icon: HomeIcon },
  { title: '푸드 DNA', link: '/dna', Icon: DNAIcon },
  { title: '내 PICK', link: '/pick', Icon: PinIcon },
  { title: 'MY', link: '/my', Icon: UserIcon }
];

const Footer = () => {
  return (
    <footer className='sticky bottom-0'>
      <nav>
        <ul className='flex justify-evenly rounded-t-lg bg-white py-20'>
          {NAV_ITEMS.map(({ title, link, Icon }) => (
            <li key={title}>
              <Link href={link} className='flex flex-col items-center'>
                <Icon className='h-[5rem] w-[5rem]' />
                <p className='text-14'>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
