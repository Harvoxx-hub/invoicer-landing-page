import { HiExclamationCircle } from 'react-icons/hi';

const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
      <HiExclamationCircle className="w-4 h-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
};

export default FormError;
