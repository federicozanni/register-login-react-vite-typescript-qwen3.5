import React, { useState, useCallback, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { ErrorMessage } from '../ui/ErrorMessage';
import { RegisterFormValues, FormErrors } from '../../types/auth';

interface RegisterFormProps {
  onSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const { register, isLoading, error: contextError, clearError } = useAuth();
  const [formData, setFormData] = useState<RegisterFormValues>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Limpiar errores cuando el formulario cambia
  useEffect(() => {
    setErrors({});
    clearError();
  }, [formData.name, formData.email, formData.password, clearError]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length > 0;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Por favor ingrese un nombre';
    }

    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingrese un email válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    await register(formData.email, formData.password, formData.name);
    setIsSubmitting(false);

    if (!contextError) {
      onSuccess?.();
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <Input
          id="name"
          name="name"
          label="Nombre"
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        {errors.name && <ErrorMessage message={errors.name} />}
      </div>

      <div className="form-group">
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="ejemplo@correo.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        {errors.email && <ErrorMessage message={errors.email} />}
      </div>

      <div className="form-group">
        <Input
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          showPasswordToggle
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
        />
        {errors.password && <ErrorMessage message={errors.password} />}
      </div>

      <div className="form-actions">
        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting || isLoading}
          disabled={isSubmitting}
        >
          Registrarse
        </Button>
      </div>

      {contextError && (
        <div className="form-error">
          <ErrorMessage message={contextError} />
        </div>
      )}
    </form>
  );
};
