import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button({ className, ...props }: Props) {
  return (
    <button
      className="bg-blue-500 text-white px-8 py-1 rounded cursor-pointer"
      {...props}
    />
  );
}
export default Button;
