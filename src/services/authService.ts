import { LoginResponse, User, RegisterResponse } from '../types/auth';

/**
 * Servicio de autenticación
 * Simula llamadas a API con timeout de 1 segundo
 */

const mockUsers = new Map<string, { password: string; name: string }>();

// Simular usuarios de prueba
const seedMockUsers = (): void => {
  if (mockUsers.size === 0) {
    mockUsers.set('test@example.com', { password: 'password123', name: 'Test User' });
    mockUsers.set('demo@example.com', { password: 'demo1234', name: 'Demo User' });
  }
};

export const authService = {
  /**
   * Iniciar sesión con email y contraseña
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    seedMockUsers();

    // Simular timeout de 1 segundo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = mockUsers.get(email.toLowerCase());

    if (!user) {
      return {
        success: false,
        error: 'Credenciales inválidas',
      };
    }

    if (user.password !== password) {
      return {
        success: false,
        error: 'Contraseña incorrecta',
      };
    }

    return {
      success: true,
      user: {
        id: '1',
        email: email.toLowerCase(),
        name: user.name,
      },
    };
  },

  /**
   * Registrarse con email, contraseña y nombre
   */
  register: async (
    email: string,
    password: string,
    name: string
  ): Promise<RegisterResponse> => {
    seedMockUsers();

    // Simular timeout de 1 segundo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = mockUsers.get(email.toLowerCase());

    if (user) {
      return {
        success: false,
        error: 'El email ya está registrado',
      };
    }

    if (!name) {
      return {
        success: false,
        error: 'El nombre es obligatorio',
      };
    }

    if (password.length < 8) {
      return {
        success: false,
        error: 'La contraseña debe tener al menos 8 caracteres',
      };
    }

    mockUsers.set(email.toLowerCase(), {
      password,
      name,
    });

    return {
      success: true,
      user: {
        id: '1',
        email: email.toLowerCase(),
        name,
      },
    };
  },

  /**
   * Verificar si el usuario está autenticado
   */
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('token');
    return !!token;
  },

  /**
   * Obtener datos del usuario
   */
  getCurrentUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};
