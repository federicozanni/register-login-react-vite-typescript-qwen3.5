import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
