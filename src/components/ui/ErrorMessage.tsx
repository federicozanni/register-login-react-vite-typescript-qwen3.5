import React from 'react';

interface ErrorMessageProps {
  message: string;
  id?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, id }) => {
  return (
    <span id={id} className="error-message" role="alert">
      {message}
    </span>
  );
};
