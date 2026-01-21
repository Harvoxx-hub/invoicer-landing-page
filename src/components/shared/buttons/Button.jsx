import { clsx } from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#163300] text-white hover:bg-[#163300]/90 focus:ring-[#163300]',
    secondary: 'bg-[#9FE870] text-[#163300] hover:bg-[#9FE870]/90 focus:ring-[#9FE870]',
    outline: 'border-2 border-[#163300] text-[#163300] hover:bg-[#163300] hover:text-white focus:ring-[#163300]',
    ghost: 'text-[#163300] hover:bg-[#163300]/10 focus:ring-[#163300]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
