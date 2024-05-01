export const RegisterFormData = [
    {
        name: 'name',
        placeholder: 'Nombre',
        id: 'register-form-name',
        validations: {
            required: {
                value: true,
                message: 'El nombre es requerido'
            },
        }
    },
    {
        name: 'email',
        placeholder: 'Correo electrónico',
        id: 'register-form-email',
        type: 'email',
        validations: {
            required: {
                value: true,
                message: 'El correo es requerido'
            },
            pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9*-]+.\.[a-z]{2,10}$/,
                message: 'El correo no es válido'
            }
        }
    },
    {
        name: 'position',
        placeholder: 'Cargo o posición',
        id: 'register-form-position',
    },
    {
        name: 'password',
        placeholder: 'Contraseña',
        id: 'register-form-password',
        type: 'password',
        validations: {
            required: {
                value: true,
                message: 'La contraseña es requerido'
            },
            minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres'
            }
        }
    },
    {
        name: 'passwordConfirm',
        placeholder: 'Confirmar contraseña',
        id: 'register-form-password-confirm',
        type: 'password',
        validations: {
            required: {
                value: true,
                message: 'La contraseña es requerido'
            },
        }
    },
]

export const LoginFormData = [
    {
        name: 'email',
        placeholder: 'Correo electrónico',
        id: 'register-form-email',
        type: 'email'
    },
    {
        name: 'password',
        placeholder: 'Contraseña',
        id: 'register-form-password',
        type: 'password'
    },
]