const Skeleton = ({
  variant = 'rectangle',
  width = '100%',
  height,
  className = '',
}) => {
  const getDefaultHeight = () => {
    switch (variant) {
      case 'text':
        return '1rem';
      case 'circle':
        return width;
      case 'rectangle':
      default:
        return height || '4rem';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'rounded';
      case 'circle':
        return 'rounded-full';
      case 'rectangle':
      default:
        return 'rounded-lg';
    }
  };

  const style = {
    width,
    height: height || getDefaultHeight(),
  };

  return (
    <div
      className={`
        bg-gray-200 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]
        ${getVariantClasses()}
        ${className}
      `}
      style={style}
      aria-hidden="true"
    >
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Skeleton;
