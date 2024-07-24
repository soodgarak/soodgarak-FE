import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: '숟가락',
  description: '숟가락 설명'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='mx-auto flex min-h-screen max-w-[640px] flex-col'>
        <Header />
        {/* 구분용 색상 넣어놨습니다. bg-neutral-100 */}
        <main className='grow bg-neutral-100'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
