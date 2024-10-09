"use client"
import LoginForm from '@/components/Auth/LoginForm';
import PasswordRecoveryModal from '@/components/Auth/PasswordRecoveryModal';
import RegisterInfo from '@/components/Auth/RegisterInfo';
import PageHeader from '@/components/Global/PageHeader';
import React from 'react';

export default function SigninPage() {
  const [isRecoveryModalOpen, setRecoveryModalOpen] = React.useState(false);

  const openRecoveryModal = () => setRecoveryModalOpen(true);
  const closeRecoveryModal = () => setRecoveryModalOpen(false);

  return (
    // <div className="bg-[url('/images/13655.jpg')] bg-cover bg-no-repeat min-h-screen flex justify-center items-center">
    <>

      <PageHeader title="Sign In" className="lg:h-[200px]" />

      <section className="py-16">
        <div className="container grid lg:grid-cols-10 gap-8">
          <div className="col-span-5">
            <div className="shadow-xl rounded-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
              <LoginForm onPasswordRecovery={openRecoveryModal} />
            </div>
            {isRecoveryModalOpen && (
              <PasswordRecoveryModal isOpen={isRecoveryModalOpen} onClose={closeRecoveryModal} />
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
