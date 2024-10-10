"use client"
import React from 'react';
import { z } from 'zod';

// Define the Zod schema
const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Email is invalid' }),
  phone: z.string().min(1, { message: 'Phone number is required' }).regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Phone number is invalid',
  }),
  message: z.string().min(1, { message: 'Message is required' }),
});

// Define the shape of the error object
interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate data
      await contactSchema.parseAsync(formData);
      console.log('Form Data:', formData);
      // Reset errors
      setErrors({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {
          name: '',
          email: '',
          phone: '',
          message: '',
        };

        error.errors.forEach((err) => {
          newErrors[err.path[0] as keyof FormErrors] = err.message; // Use type assertion
        });

        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full border border-gray-300 p-2 rounded ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="email">
          E-mail address
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border border-gray-300 p-2 rounded ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Your Email"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="phone">
          Phone number
        </label>
        <div className="flex items-center">
          <span className="inline-block mr-2">🇳🇱 +31</span>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border border-gray-300 p-2 rounded ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="Your Phone Number"
          />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full border border-gray-300 p-2 rounded ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Your Message"
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
