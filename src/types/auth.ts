/**
 * Tipos de autenticación
 * Define las interfaces y tipos utilizados en toda la aplicación
 */

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
}

export interface RegisterResponse {
  success: boolean;
  user?: User;
  error?: string;
}
