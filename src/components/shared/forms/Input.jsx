import { forwardRef } from 'react';
import FormLabel from './FormLabel';
import FormError from './FormError';

const Input = forwardRef(({
  name,
  label,
  error,
  required = false,
  type = "text",
  placeholder = "",
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
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
          w-full px-4 py-2.5 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <div id={`${name}-error`}>
          <FormError message={error} />
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
