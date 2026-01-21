import { clsx } from 'clsx';

const Card = ({
  children,
  className,
  padding = 'default',
  shadow = 'default',
  hover = false,
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div
      className={clsx(
        'bg-white rounded-lg border border-gray-200',
        paddings[padding],
        shadows[shadow],
        hover && 'transition-all duration-200 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
