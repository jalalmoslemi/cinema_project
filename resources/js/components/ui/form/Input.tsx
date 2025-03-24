import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function Input({ className, ...props }: Props) {
  return (
    <input
      className={
        'border border-zinc-200 rounded focus-visible:outline-0 py-1 px-2 ' +
        (className ?? '')
      }
      {...props}
    />
  );
}
export default Input;
