import React from 'react';
import { RegisterForm } from '../components/forms/RegisterForm';
import { Link } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="register-container">
        <div className="register-header">
          <h1>Crea tu cuenta</h1>
          <p>Regístrate para comenzar a usar</p>
        </div>
        <RegisterForm onSuccess={() => {}} />
        <div className="register-footer">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="link">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
