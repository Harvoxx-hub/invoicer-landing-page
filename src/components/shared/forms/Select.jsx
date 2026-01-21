import { forwardRef } from 'react';
import FormLabel from './FormLabel';
import FormError from './FormError';

const Select = forwardRef(({
  name,
  label,
  error,
  required = false,
  options = [],
  placeholder = "Select an option",
  className = "",
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <FormLabel
          htmlFor={name}
          label={label}
          required={required}
        />
      )}
      <select
        ref={ref}
        id={name}
        name={name}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
          w-full px-4 py-2.5 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
          bg-white
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className}
        `}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div id={`${name}-error`}>
          <FormError message={error} />
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
