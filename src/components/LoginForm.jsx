import { useForm } from 'react-hook-form';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input style={{ margin: "10px"}}
          type="email"
          {...register('email', {
            required: 'El email es requerido',
          })}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input style={{ margin: "10px"}}
          type="password"
          {...register('password', {
            required: 'La contraseña es requerida',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password.message}</span>
        )}
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;

