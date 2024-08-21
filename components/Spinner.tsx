type SpinnerProps = {
  type?: 'white' | 'black';
};

const Spinner = ({ type = 'white' }: SpinnerProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={`h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-t-transparent ${type === 'white' ? 'border-white' : type === 'black' ? 'border-black' : ''}`}
      />
    </div>
  );
};

export default Spinner;
