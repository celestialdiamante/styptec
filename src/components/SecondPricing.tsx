import React from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FiCheck } from 'react-icons/fi';
import { GrDiamond } from 'react-icons/gr';

const SecondPricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '€ 0,-',
      features: [
        '6% commissie',
        '6% Prae commissie',
        'Travel expenses',
        'Invoice prepaid at 6%',
        'Retirement through Brand New Day',
        'Donation circle',
        'AOV',
        'Group health insurance via ONVZ',
        'Unlimited customer service',
      ],
      finance: {
        contractPeriod: '—',
        commissionVerloning: '6%',
        commissionPrae: '6%',
        expenses: 'Travel expenses',
        taxBenefit: '—',
        invoicePrepaid: '6%',
      },
      securities: {
        donationCircle: true,
        disabilityInsurance: true,
        accidentInsurance: false,
        liabilityInsurance: false,
        legalAssistance: false,
        professionalLiabilityInsurance: false,
        trafficParticipantsInsurance: false,
      },
      health: {
        groupHealthInsurance: true,
        cashbackHealthInsurance: false,
        psychologicalMedicalAssistance: false,
        employabilityCoach: false,
      },
      extras: {
        unlimitedCustomerService: true,
        affiliateProgram: false,
        requestVog: false,
        goodHabitzOnlineTraining: false,
        chiChiGolfVenue: false,
        vipAhoyZiggoDome: false,
        vipTicketsFeyenoordAjax: false,
      },
    },
    {
      name: 'Premium',
      price: '€ 39,95',
      features: [
        '3% commissie',
        'No Prae commission',
        'Targeted expenses',
        'Tax benefit of €40 per month',
        'Invoice prepaid at 4%',
        'Debt collection services',
        'Accident Insurance',
        'Liability Insurance',
        'Legal assistance',
        '€ 25,- Cashback on health insurance p/m',
        '24/7 psychological/medical assistance',
        'Affiliate program',
        'Request VOG',
        'GoodHabitz online training',
        'Chi Chi - The Golf Venue',
      ],
      finance: {
        contractPeriod: '1 year',
        commissionVerloning: '3%',
        commissionPrae: 'Free',
        expenses: 'Targeted expenses',
        taxBenefit: '€ 40,-',
        invoicePrepaid: '4%',
      },
      securities: {
        donationCircle: true,
        disabilityInsurance: true,
        accidentInsurance: true,
        liabilityInsurance: true,
        legalAssistance: true,
        professionalLiabilityInsurance: false,
        trafficParticipantsInsurance: false,
      },
      health: {
        groupHealthInsurance: true,
        cashbackHealthInsurance: true,
        psychologicalMedicalAssistance: true,
        employabilityCoach: false,
      },
      extras: {
        unlimitedCustomerService: true,
        affiliateProgram: true,
        requestVog: true,
        goodHabitzOnlineTraining: true,
        chiChiGolfVenue: true,
        vipAhoyZiggoDome: false,
        vipTicketsFeyenoordAjax: false,
      },
    },
    {
      name: 'All-in',
      price: '€ 99,95',
      features: [
        'No commission',
        'All expenses',
        'Tax benefit of €100 per month',
        'Invoice prepaid at 2%',
        'Professional liability insurance',
        'Traffic participants insurance',
        'Employability coach',
        'VIP Ahoy and Ziggo dome',
        'VIP tickets Feyenoord & Ajax',
      ],
      finance: {
        contractPeriod: '1 year',
        commissionVerloning: 'Free',
        commissionPrae: 'Free',
        expenses: 'All expenses',
        taxBenefit: '€ 100,-',
        invoicePrepaid: '2%',
      },
      securities: {
        donationCircle: true,
        disabilityInsurance: true,
        accidentInsurance: true,
        liabilityInsurance: true,
        legalAssistance: true,
        professionalLiabilityInsurance: true,
        trafficParticipantsInsurance: true,
      },
      health: {
        groupHealthInsurance: true,
        cashbackHealthInsurance: true,
        psychologicalMedicalAssistance: true,
        employabilityCoach: true,
      },
      extras: {
        unlimitedCustomerService: true,
        affiliateProgram: true,
        requestVog: true,
        goodHabitzOnlineTraining: true,
        chiChiGolfVenue: true,
        vipAhoyZiggoDome: true,
        vipTicketsFeyenoordAjax: true,
      },
    },
  ];

  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div className="flex-wrap md:flex -mx-3 -mt-2 mb-2 last:-mb-2">
          <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full">
            <div className="lg:px-5 lg:pb-5 lg:rounded-2xl lg:shadow-lg lg:ring-1 ring-gray-200 bg-white">
              <div className="grid-cols-4 sticky top-0 border-b z-20 hidden bg-white lg:grid">
                {plans.map((plan, index) => (
                  <div key={index} className="flex flex-col px-2 py-4 items-center justify-start">
                    <p className="font-sans text-[24px] leading-[32px] font-bold text-black">
                      {plan.name}
                    </p>
                    <p className="font-sans text-sm   mb-2 last:mb-0">
                      {plan.features[0]}
                    </p>
                    <div className="block space-x-1 mt-2 mb-4">
                      <p className="font-sans text-[24px] leading-[32px] font-bold text-black inline">
                        {plan.price}
                      </p>
                      <p className="font-sans text-sm   mb-2 last:mb-0 inline">
                        per month
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 lg:hidden">
                {plans.map((plan, index) => (
                  <div key={index} className="flex flex-col rounded-2xl shadow-md p-8 lg:p-6 ring-1 ring-gray-200">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center justify-between w-full">
                        {index === 0 && <FaRegSmileBeam className="size-12" />}
                        {index === 1 && (
                          <span className="self-center text-xs font-title font-semibold truncate bg-marketing-blue text-white py-1 px-4 rounded-full">
                            Most chosen
                          </span>
                        )}
                        {index === 2 && <GrDiamond className="size-12" />}
                      </div>
                      <p className="font-sans text-[24px] leading-[32px] font-bold text-black mt-2">
                        {plan.name}
                      </p>
                    </div>
                    <p className="font-sans text-base  ">
                      {plan.features[0]}
                    </p>
                    <p className="my-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        / month
                      </span>
                    </p>
                    <ul role="list" className="space-y-3 text-sm">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-x-3">
                          <FiCheck className="text-green-600" />
                          <p className="font-sans text-sm text-black mb-2 last:mb-0">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="hidden grid-cols-4 gap-3 relative z-10 lg:grid">
                <div className="col-span-full font-semibold pt-2">
                  Finance
                </div>
                {plans.map((plan, index) => (
                  <React.Fragment key={index}>
                    <div className="flex my-auto space-x-2 items-center justify-between">
                      <div className="[overflow-wrap:anywhere]">
                        <p className="font-sans text-sm text-gray-900">
                          Contract period
                        </p>
                      </div>
                      <FaRegCircleQuestion />
                    </div>
                    <div className="mx-auto">
                      <p className="font-sans text-base   mb-2 last:mb-0">
                        {plan.finance.contractPeriod}
                      </p>
                    </div>
                    <div className="flex my-auto space-x-2 items-center justify-between">
                      <div className="[overflow-wrap:anywhere]">
                        <p className="font-sans text-sm text-gray-900">
                          Commission Verloning.nl </p>
                      </div>
                      <FaRegCircleQuestion />
                    </div>
                    <div className="mx-auto">
                      <p className="font-sans text-base   mb-2 last:mb-0">
                        {plan.finance.commissionVerloning}
                      </p>
                    </div>
                    <div className="flex my-auto space-x-2 items-center justify-between">
                      <div className="[overflow-wrap:anywhere]">
                        <p className="font-sans text-sm text-gray-900">
                          Commission Prae
                        </p>
                      </div>
                      <FaRegCircleQuestion />
                    </div>
                    <div className="mx-auto">
                      <p className="font-sans text-base   mb-2 last:mb-0">
                        {plan.finance.commissionPrae}
                      </p>
                    </div>
                    <div className="flex my-auto space-x-2 items-center justify-between">
                      <div className="[overflow-wrap:anywhere]">
                        <p className="font-sans text-sm text-gray-900">Expenses</p>
                      </div>
                      <FaRegCircleQuestion />
                    </div>
                    <div className="mx-auto">
                      <p className="font-sans text-base   mb-2 last:mb-0">
                        {plan.finance.expenses}
                      </p>
                    </div>
                    <div className="flex my-auto space-x-2 items-center justify-between">
                      <div className="[overflow-wrap:anywhere]">
                        <p className="font-sans text-sm text-gray-900">
                          Tax benefit p/m
                        </p>
                      </div>
                      <FaRegCircleQuestion />
                    </div>
                    <div className="mx-auto">
                      <p className="font-sans text-base   mb-2 last:mb-0">
                        {plan.finance.taxBenefit}
                      </p>
                    </div>
                    <div className="flex my-auto space-x-2 items-center justify-between">
                      <div className="[overflow-wrap:anywhere]">
                        <p className="font-sans text-sm text-gray-900">
                          Invoice prepaid
                        </p>
                      </div>
                      <FaRegCircleQuestion />
                    </div>
                    <div className="mx-auto">
                      <p className="font-sans text-base   mb-2 last:mb-0">
                        {plan.finance.invoicePrepaid}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPricing;