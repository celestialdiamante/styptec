import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const recoverySchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

type RecoveryFormData = z.infer<typeof recoverySchema>;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PasswordRecoveryModal({ isOpen, onClose }: ModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<RecoveryFormData>({
    resolver: zodResolver(recoverySchema),
  });

  const onSubmit = (data: RecoveryFormData) => {
    // Handle password recovery logic (API call, etc.)
    console.log("Password recovery email sent to:", data.email);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
        <div className="bg-base-100 rounded-lg shadow-lg max-w-md w-full p-6 z-20">
          <Dialog.Title className="text-xl font-semibold mb-4">Password Recovery</Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block  ">Email</label>
              <input
                {...register('email')}
                type="email"
                className="input input-bordered w-full"
              />
              {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Recover Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}
