"use client";
import { submitContactForm } from '@/helpers/postData';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { z } from 'zod';
import Swal from 'sweetalert2';
import Loader from '@/components/Loader';
import { useTranslations } from 'next-intl';


interface FormErrors {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

const ContactForm = () => {
  const lang = useTranslations('contactForm');
  const [loading, setLoading] = React.useState(false);


  const contactSchema = z.object({
    name: z.string().min(1, { message: lang('validation.nameRequired') }),
    email: z.string().email({ message: lang('validation.emailInvalid') }),
    phone_number: z.string()
      .min(1, { message: lang('validation.phoneRequired') })
      .regex(/^\+?[0-9]\d{1,14}$/, { message: lang('validation.phoneInvalid') }),
    message: z.string().min(1, { message: lang('validation.messageRequired') }),
  });


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
          title: lang('alerts.success.title'),
          text: lang('alerts.success.text'),
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
          title: lang('alerts.serverError.title'),
          text: lang('alerts.serverError.text'),
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
          title: lang('alerts.validationError.title'),
          text: lang('alerts.validationError.text'),
          confirmButtonText: 'OK',
        });
      } else {
        // Unknown error
        Swal.fire({
          icon: 'error',
          title: lang('alerts.unexpectedError.title'),
          text: lang('alerts.unexpectedError.text'),
          confirmButtonText: 'OK',
        });

        console.error('Form submission error: ', error);
      }
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <h2 className="text-2xl font-bold mb-2">{lang('title')}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1" htmlFor="name">
            {lang('nameLabel')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border border-gray-300 p-2 rounded-lg ${errors.name ? 'border-red-500' : ''}`}
            placeholder={lang('namePlaceholder')}
          />
          {errors.name && <p className="text-red-500">{lang('validation.nameRequired')}</p>}
          {/* {errors.name} */}
        </div>
        <div>
          <label className="mb-1" htmlFor="email">
            {lang('emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border border-gray-300 p-2 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
            placeholder={lang('emailPlaceholder')}
          />
          {errors.email && <p className="text-red-500">{lang('validation.emailInvalid')}</p>}
          {/* {errors.email} */}
        </div>

        <div>
          <label className="mb-1" htmlFor="phone_number">
            {lang('phoneLabel')}
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className={`w-full border border-gray-300  p-2 rounded-lg ${errors.phone_number ? 'border-red-500' : ''}`}
            placeholder={lang('phonePlaceholder')}
          />
          {errors.phone_number && <p className="text-red-500">{lang('validation.phoneRequired')}</p>}
          {/* {errors.phone_number} */}
        </div>

        <div>
          <label className="mb-1" htmlFor="message">
            {lang('messageLabel')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full border border-gray-300 p-2 rounded-lg ${errors.message ? 'border-red-500' : ''}`}
            placeholder={lang('messagePlaceholder')}
          />
          {errors.message && <p className="text-red-500">{lang('validation.messageRequired')}</p>}
          {/* {errors.message} */}
        </div>


        <button type="submit" className="btn btn-primary text-white" disabled={loading}>
          {loading ? lang('submitButtonLoading') : lang('submitButton')}
          <FaChevronRight />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
