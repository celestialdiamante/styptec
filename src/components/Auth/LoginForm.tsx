import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm({ onPasswordRecovery }: { onPasswordRecovery: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          {...register('email')}
          type="email"
          className="input input-bordered w-full"
        />
        {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          {...register('password')}
          type="password"
          className="input input-bordered w-full"
        />
        {errors.password && <p className="text-error text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={onPasswordRecovery}
          className="text-primary hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full mt-4"
      >
        Login
      </button>
    </form>
  );
}
