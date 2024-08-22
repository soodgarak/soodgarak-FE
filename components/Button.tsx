import Spinner from './Spinner';

type ButtonProps = {
  isLoading?: boolean;
  width?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ isLoading = false, width, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-[6rem] rounded-12 bg-primary p-12 text-24 font-bold text-white ${width || ''} ${isLoading && 'cursor-not-allowed'} ${className}`}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
