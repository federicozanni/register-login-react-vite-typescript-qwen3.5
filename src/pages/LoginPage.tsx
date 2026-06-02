import React from 'react';
import { LoginForm } from '../components/forms/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-header">
          <h1>Bienvenido</h1>
          <p>Inicia sesión para continuar</p>
        </div>
        <LoginForm onSuccess={() => {}} />
      </div>
    </div>
  );
};
