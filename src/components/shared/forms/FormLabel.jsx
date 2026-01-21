const FormLabel = ({ htmlFor, label, required, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    >
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
