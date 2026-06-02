import React, { useState, useRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type?: string;
  showPasswordToggle?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = 'text', showPasswordToggle = false, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPasswordToggle && type === 'password' ? (showPassword ? 'text' : 'password') : type;

    const inputRef = useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      select: () => inputRef.current?.select(),
    }));

    return (
      <div className={`input-group ${error ? 'input-group-error' : ''} ${className}`}>
        <label htmlFor={props.id} className="input-label">
          {label}
        </label>
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type={inputType}
            className="input-field"
            aria-invalid={!!error}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? '👁️' : '👁️/🚫'}
            </button>
          )}
        </div>
        {error && (
          <span id={`${props.id}-error`} className="input-error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
