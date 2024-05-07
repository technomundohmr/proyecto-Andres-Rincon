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

export const BlockTypesOptions = [
    {
      value: 'text_block',
      label: 'Bloque de texto',
    },
    {
      value: 'form',
      label: 'Formulario',
    },
    {
      value: 'view',
      label: 'Bloque de vista',
    },
    {
      value: 'hero_banner',
      label: 'Hero Banner',
    },
    {
      value: 'accordeon',
      label: 'Acordeon',
    },
    {
      value: 'float_button',
      label: 'Botón flotante',
    },
  ];

export const LoginFormData = [
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
]

export const MenuTypes = [
    {
        value: 'main',
        label: 'Menú principal',
    },
    {
        value: 'footer',
        label: 'Menú del Footer',
    },
]

export const MenuItemFormData = [
    {
        name: 'name',
        placeholder: 'Nombre',
        id: 'menu-form-name',
        validations: {
            required: {
                value: true,
                message: 'El nombre es requerido'
            },
        }
    },
    {
        name: 'path',
        placeholder: 'Ruta',
        id: 'menu-form-path',
        validations: {
            required: {
                value: true,
                message: 'La ruta es requerido'
            },
        }
    },
    {
        name: 'weight',
        placeholder: 'Peso',
        id: 'menu-form-weight',
        type: 'number',
        validations: {
            required: {
                value: true,
                message: 'El peso es requerido'
            },
        }
    },
    {
        name: 'target',
        placeholder: 'target',
        id: 'menu-form-target',
    },
    {
        name: 'icon',
        placeholder: 'Icono o imagen',
        id: 'menu-form-icon',
        type: 'file',
    },
]

export const TechnologyFormData = [
    {
        name: 'name',
        placeholder: 'Nombre',
        id: 'technology-form-name',
        validations: {
            required: {
                value: true,
                message: 'El nombre es requerido'
            },
        }
    },
    {
        name: 'level',
        placeholder: 'Nivel',
        id: 'technology-form-path',
        validations: {
            min: {
                value: 10,
                message: 'El mínimo valor permitido es 10'
            },
            max: {
                value: 100,
                message: 'El máximo valor permitido es 100'
            },
        },
        type: 'number'
    },
    {
        name: 'logo',
        placeholder: 'Logo o imagen',
        id: 'technology-form-logo',
        type: 'file',
        accept: 'image/*'
    },
]

export const HeroMainFormData = [
    {
        name: 'name',
        placeholder: 'Nombre',
        id: 'hero-main-form-name',
        validations: {
            required: {
                value: true,
                message: 'El nombre es requerido'
            },
        }
    },
    {
        name: 'main_image',
        placeholder: 'Imagen Principal',
        id: 'hero-main-form-path',
        type: 'file',
        accept: 'image/*'
    },
    {
        name: 'subtitle',
        placeholder: 'Subtitulo',
        id: 'hero-main-form-subtitle',
    },
    {
        name: 'body',
        placeholder: 'Cuerpo',
        id: 'hero-main-form-body',
        type: 'textarea'
    },
    {
        name: 'secondary_image',
        placeholder: 'Imagen Principal',
        id: 'hero-main-form-path',
        type: 'file',
        accept: 'image/*'
    },
]