"use client"
import LoginForm from '@/components/Auth/LoginForm';
import PasswordRecoveryModal from '@/components/Auth/PasswordRecoveryModal';
import React from 'react';

export default function LoginPage() {
  const [isRecoveryModalOpen, setRecoveryModalOpen] = React.useState(false);

  const openRecoveryModal = () => setRecoveryModalOpen(true);
  const closeRecoveryModal = () => setRecoveryModalOpen(false);

  return (
    <div className="bg-[url('/images/13655.jpg')] bg-cover bg-no-repeat min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <LoginForm onPasswordRecovery={openRecoveryModal} />
      </div>
      {isRecoveryModalOpen && (
        <PasswordRecoveryModal isOpen={isRecoveryModalOpen} onClose={closeRecoveryModal} />
      )}
    </div>
  );
}
