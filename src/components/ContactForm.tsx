"use client";
import { submitContactForm } from '@/helpers/postData';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Email is invalid' }),
  phone_number: z.string().min(1, { message: 'Phone number is required' }).regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Phone number is invalid',
  }),
  message: z.string().min(1, { message: 'Message is required' }),
});

interface FormErrors {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await contactSchema.parseAsync(formData);
      const response = await submitContactForm({
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        message: data.message,
      });
      if (response && response.success) {
        alert('Form successfully submitted, we will get back to you');
        
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          message: '',
        });
      } else {
        alert('Server error, please try after some time.');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {
          name: '',
          email: '',
          phone_number: '',
          message: '',
        };

        error.errors.forEach((err) => {
          newErrors[err.path[0] as keyof FormErrors] = err.message;
        });

        setErrors(newErrors);
      } else {
        console.log('form error: ', error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border border-gray-300 p-2 rounded-lg ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1" htmlFor="email">
            E-mail address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border border-gray-300 p-2 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1" htmlFor="phone_number">
            Phone number
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className={`w-full border border-gray-300  p-2 rounded-lg ${errors.phone_number ? 'border-red-500' : ''}`}
            placeholder="Your Phone Number"
          />
          {errors.phone_number && <p className="text-red-500">{errors.phone_number}</p>}
        </div>

        <div>
          <label className="mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full border border-gray-300 p-2 rounded-lg ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Your Message"
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary text-white">
          Send
          <FaChevronRight />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
