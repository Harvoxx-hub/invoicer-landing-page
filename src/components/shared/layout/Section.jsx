import { clsx } from 'clsx';
import Container from './Container';

const Section = ({
  children,
  className,
  containerSize = 'default',
  id,
  background = 'white',
  padding = 'default',
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    green: 'bg-[#163300]',
    lightGreen: 'bg-[#9FE870]/10',
  };

  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-24 lg:py-32',
  };

  return (
    <section
      id={id}
      className={clsx(
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default Section;
