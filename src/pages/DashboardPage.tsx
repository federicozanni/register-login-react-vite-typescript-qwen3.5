import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login', { state: { from: location } });
  };

  if (!user) {
    return (
      <div className="loading-container">
        <LoadingSpinner size="large" />
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Bienvenido, {user.name}</p>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-card">
            <h2>Información del usuario</h2>
            <div className="user-info">
              <div className="info-item">
                <span className="label">Nombre:</span>
                <span className="value">{user.name}</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="info-item">
                <span className="label">ID:</span>
                <span className="value">{user.id}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Acciones</h2>
            <div className="action-buttons">
              <Button variant="primary" fullWidth>
                Ver perfil
              </Button>
              <Button variant="secondary" fullWidth onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
