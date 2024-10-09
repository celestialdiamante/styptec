"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PageHeader from '@/components/Global/PageHeader';
import { FaChevronLeft, FaChevronRight, FaRegUserCircle, FaUserTie } from 'react-icons/fa';
import RegisterInfo from '@/components/Auth/RegisterInfo';


const schema = z.object({
  first_Name: z.string().min(1, "First name is required"),
  last_Name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  userType: z.enum(['Freelancer', 'Entrepreneur']),
  private_Person: z.boolean().optional(),
  located_Abroad: z.boolean().optional(),
  company_Name: z.string().optional(),
  postcode: z.string().optional(),
  house_Number: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const [step, setStep] = React.useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const userType = watch('userType');

  const onSubmit = (data: FormData) => {
    console.log('Registration Data: ', data);

    if (userType === 'Entrepreneur' && step === 1) {
      setStep(2);
    } else {
      console.log("Final Submit", data);
    }
  };


  return (
    <>
      <PageHeader title="Register" className="lg:h-[250px]" />

      <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-10 gap-8">

          <div className="col-span-5 shadow-xl rounded-xl border border-gray-100 p-6">
            {step === 1 ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Register at Styptec</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <label className="block font-medium mb-2">I want to register as:</label>
                    <div className="grid grid-cols-6 gap-2 my-2">
                      <div className="col-span-3 flex justify-between rounded-xl py-5 px-3 border border-gray-500">
                        <div className="flex flex-col gap-2">
                          <FaRegUserCircle className="size-6" />
                          <span>Freelancer</span>
                        </div>
                        <label className="cursor-pointer flex items-center">
                          <input type="radio" value="Freelancer" {...register('userType')} className="radio" defaultChecked />
                        </label>
                      </div>

                      <div className="col-span-3 flex justify-between rounded-xl py-5 px-3 border border-gray-500">
                        <div className="flex flex-col gap-2">
                          <FaUserTie className="size-6" />
                          <span>Entrepreneur</span>
                        </div>
                        <label className="cursor-pointer flex items-center">
                          <input type="radio" value="Entrepreneur" {...register('userType')} className="radio" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                      <label className="block font-medium mb-1">First name</label>
                      <input
                        {...register('first_Name')}
                        type="text"
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="First name"
                      />
                      {errors.first_Name && <p className="text-red-500 text-sm">{errors.first_Name.message}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="block font-medium mb-1">Last name</label>
                      <input
                        {...register('last_Name')}
                        type="text"
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="Last name"
                      />
                      {errors.last_Name && <p className="text-red-500 text-sm">{errors.last_Name.message}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium mb-1">E-mail address</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="input input-bordered w-full focus:outline-none"
                      placeholder="E-mail address"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block font-medium mb-1">Password</label>
                    <input
                      {...register('password')}
                      type="password"
                      className="input input-bordered w-full focus:outline-none"
                      placeholder="Password"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary text-white w-full">
                    {userType === 'Entrepreneur' ? 'Next Step' : 'Sign Up'}<FaChevronRight />
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Register Your Business</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="cursor-pointer flex items-center">
                      <input type="checkbox" {...register('private_Person')} className="checkbox" />
                      <span className="ml-2">I&apos;m a private person</span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="cursor-pointer flex items-center">
                      <input type="checkbox" {...register('located_Abroad')} className="checkbox" />
                      <span className="ml-2">I&apos;m located abroad</span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium mb-1">Company Name</label>
                    <input
                      {...register('company_Name')}
                      type="text"
                      className="input input-bordered w-full focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                      <label className="block font-medium mb-1">Postcode</label>
                      <input
                        {...register('postcode')}
                        type="number"
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="Postcode"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-medium mb-1">House Number</label>
                      <input
                        {...register('house_Number')}
                        type="text"
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="House Number"
                      />
                    </div>
                  </div>


                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                      <label className="block font-medium mb-1">Street</label>
                      <input
                        {...register('street')}
                        type="text"
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="Street"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-medium mb-1">City</label>
                      <input
                        {...register('city')}
                        type="text"
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-2">
                    <label className="col-span-1 form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Country</span>
                      </div>
                      <select className="lg:w-full focus:outline-none bg-white border border-gray-300 rounded-md px-3 py-3">
                        <option disabled selected>Nederland</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Iran</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button onClick={() => setStep(1)} className="btn btn-outline btn-primary !hover:text-white"><FaChevronLeft />Previous Step</button>
                    <button type="submit" className="btn btn-primary text-white w-full">Sign Up <FaChevronRight /></button>
                  </div>
                </form>
              </>
            )}
          </div>

          <div className="col-span-5">
            <RegisterInfo />
          </div>

        </div>
      </section>
    </>
  );
}
