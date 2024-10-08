"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  userType: z.enum(['Freelancer', 'Entrepreneur']),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  
  const [selectedType, setSelectedType] = React.useState<'Freelancer' | 'Entrepreneur'>('Freelancer');

  const onSubmit = (data: FormData) => {
    console.log('Registration Data: ', data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Register at Styptec</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-6">
            <label className="block font-medium mb-2">I want to register as:</label>
            <div className="flex space-x-4">
              <div 
                className={`btn w-full ${selectedType === 'Freelancer' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedType('Freelancer')}
              >
                Freelancer
              </div>
              <div 
                className={`btn w-full ${selectedType === 'Entrepreneur' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedType('Entrepreneur')}
              >
                Entrepreneur
              </div>
            </div>
            <input type="hidden" {...register('userType')} value={selectedType} />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">First name</label>
            <input
              {...register('firstName')}
              type="text"
              className="input input-bordered w-full"
              placeholder="First name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Last name</label>
            <input
              {...register('lastName')}
              type="text"
              className="input input-bordered w-full"
              placeholder="Last name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">E-mail address</label>
            <input
              {...register('email')}
              type="email"
              className="input input-bordered w-full"
              placeholder="E-mail address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">Password</label>
            <input
              {...register('password')}
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full">Sign Up</button>
        </form>
      </div>

      <div className="ml-8 max-w-md">
        <h3 className="text-xl font-semibold">Register at Verloning.nl</h3>
        <p className="text-gray-600 mb-4">
          To work independently via Verloning.nl, we apply a number of conditions and rules. Please also read our framework agreement and terms and conditions carefully.
        </p>
        <ul className="list-inside list-disc text-green-600">
          <li>No administration, Chamber of Commerce or VAT number.</li>
          <li>We invoice and arrange all mandatory taxes.</li>
          <li>Our service can be canceled at any time.</li>
        </ul>
      </div>
    </div>
  );
}
