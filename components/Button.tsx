import Spinner from './Spinner';

type ButtonProps = {
  isLoading?: boolean;
  width?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ isLoading = false, width, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-primary h-[6rem] rounded-12 p-12 text-24 font-bold text-white ${width || ''}`}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
