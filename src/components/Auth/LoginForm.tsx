import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm({ onPasswordRecovery }: { onPasswordRecovery: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block  ">Email</label>
        <input
          {...register('email')}
          type="email"
          className="input input-bordered w-full focus:outline-none"
        />
        {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4 relative">
        <label className="block  ">Password</label>
        <input
          {...register('password')}
          type={showPassword ? 'text' : 'password'}
          className="input input-bordered w-full pr-10 focus:outline-none"
        />
        {errors.password && <p className="text-error text-sm mt-1">{errors.password.message}</p>}
        <div
          className="absolute right-3 top-10 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
        </div>
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
        className="btn btn-primary text-white w-full mt-4"
      >
        Sign In
      </button>
    </form>
  );
}
