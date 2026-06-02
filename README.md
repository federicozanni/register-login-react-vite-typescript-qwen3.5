# Login App - React + Vite + TypeScript

Una aplicación de login moderna y completa construida con React 19, Vite y TypeScript.

## Características

- ✅ React 19 con TypeScript
- ✅ Vite para desarrollo rápido
- ✅ SCSS Modules para estilos
- ✅ Autenticación simulada con API mock
- ✅ Validaciones en tiempo real
- ✅ React Router para navegación
- ✅ AuthContext para gestión de estado
- ✅ ProtectedRoute para rutas protegidas
- ✅ Diseño responsivo y accesible
- ✅ Código tipado completamente (sin `any`)

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes UI reutilizables
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── LoadingSpinner.tsx
│   ├── forms/           # Componentes de formulario
│   │   └── LoginForm.tsx
│   └── layout/          # Componentes de layout
│       └── ProtectedRoute.tsx
├── pages/               # Páginas de la aplicación
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   └── NotFoundPage.tsx
├── context/             # Contextos de React
│   └── AuthContext.tsx
├── hooks/               # Custom hooks
│   └── useAuth.ts
├── services/            # Servicios y APIs
│   └── authService.ts
├── types/               # Tipos y interfaces
│   └── auth.ts
└── styles/              # Estilos globales
    └── globals.scss
```

## Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd login-app

# Instalar dependencias
npm install

# Iniciar el desarrollo
npm run dev
```

## Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview

# Linting
npm run lint

# Verificación de tipos
npm run type-check
```

## Uso

### Usuarios de prueba

| Email | Contraseña |
|-------|-----------|
| test@example.com | password123 |
| demo@example.com | demo1234 |

### Flujo de autenticación

1. El usuario ingresa email y contraseña
2. El formulario valida los datos en tiempo real
3. Al enviar, se simula una llamada a API con timeout de 1s
4. Si es exitoso, se guarda el token en localStorage
5. El usuario es redirigido al Dashboard
6. El Dashboard muestra la información del usuario

### Principios SOLID aplicados

- **S**: Componentes pequeños y con una sola responsabilidad
- **O**: Dependencias inyectadas (AuthContext)
- **L**: Código abierto para extensión, cerrado para modificación
- **I**: Interfaces claras y bien definidas
- **D**: Inversión de dependencias (servicios separados)

## Tecnologías

- **React 19**: Framework UI
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **React Router**: Navegación
- **SCSS**: Preprocesador CSS

## Licencia

MIT
