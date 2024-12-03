"use client";
import { submitContactForm } from '@/helpers/postData';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { z } from 'zod';
import Swal from 'sweetalert2';
import Loader from '@/components/Loader';

const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Email is invalid' }),
  phone_number: z.string().min(1, { message: 'Phone number is required' }).regex(/^\+?[0-9]\d{1,14}$/, {
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

  const [loading, setLoading] = React.useState(false);

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
      // Frontend validation
      const data = await contactSchema.parseAsync(formData);

      // Start loader
      setLoading(true);

      // Backend submission
      const response = await submitContactForm({
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        message: data.message,
      });

      // Stop loader after the response
      setLoading(false);

      // Show success alert if submission is successful
      if (response && response.success) {
        Swal.fire({
          icon: 'success',
          title: 'Form successfully submitted!',
          text: 'We will get back to you shortly.',
          confirmButtonText: 'OK',
        });
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          message: '',
        });
      } else {
        // Backend error
        Swal.fire({
          icon: 'error',
          title: 'Submission failed!',
          text: 'Server error, please try again later.',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      // Stop loader on error
      setLoading(false);

      if (error instanceof z.ZodError) {
        // Frontend validation error handling
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

        // Display alert for frontend validation errors
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please check your input fields and try again.',
          confirmButtonText: 'OK',
        });
      } else {
        // Unknown error
        Swal.fire({
          icon: 'error',
          title: 'Unexpected Error!',
          text: 'An unexpected error occurred, please try again.',
          confirmButtonText: 'OK',
        });

        console.error('Form submission error: ', error);
      }
    }
  };

  return (
    <div>
      {loading && <Loader />}
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


        <button type="submit" className="btn btn-primary text-white" disabled={loading}>
          {loading ? 'Submitting...' : 'Send'}
          <FaChevronRight />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
