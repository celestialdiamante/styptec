import React from 'react';
import PageHeader from '@/components/Global/PageHeader';
import ContactForm from '@/components/ContactForm';

const ContactUs = () => {
  return (
    <>
      <PageHeader title="Contact us" />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-10 grid-cols-1 gap-6">
            <div className="md:col-span-5 p-6 border border-gray-50 rounded-xl shadow-xl">
              <ContactForm />
            </div>
            <div className="md:col-span-5 p-6">
              <h3 className="text-lg font-bold">Contact details</h3>

              <p className="my-2">
                STYPTEC B.V. <br />
                <span className="font-bold">Hoofdvestiging:</span> KVK 81188803 <br />
                Rokin 92, 1012 KZ  Amsterdam <br />
              </p>

              <p className="my-2">
                <span className="font-bold">Bezoekadres:</span> Laan van Zuidhoorn 41,<br />
               2289 DC  Rijswijk
               </p>

              <p>
                <a href="mailto:info@styptec.nl" className="text-primary">
                  info@styptec.nl
                </a>
              </p>
              <h4 className="text-lg font-bold mt-6">Opening hours</h4>
              <p>Monday - Friday: 09:00 - 17:30</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default ContactUs;
