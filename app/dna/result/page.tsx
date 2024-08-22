import { Button } from '@/components/ui/button';

const DNAResultPage = () => {
  return (
    <section className='flex grow flex-col items-center justify-center gap-24'>
      <h1 className='text-center text-32'>푸드 DNA 분석이 완료 되었습니다!</h1>
      <p className='text-28 font-bold'>VADH</p>
      <div className='h-[9.6rem] w-[9.6rem] rounded-[1.2rem] bg-primary' />
      <p className='text-24 font-bold'>칠색조</p>
      <div className='mt-40 flex gap-20'>
        <Button>다시하기</Button>
        <Button>내 정보에 등록</Button>
      </div>
    </section>
  );
};

export default DNAResultPage;
