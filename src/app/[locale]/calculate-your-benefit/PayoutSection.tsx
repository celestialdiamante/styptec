"use client"
import Invoice from '@/components/Forms/invoice';
import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const PayoutSection = ({ payoutValues }: { payoutValues: { grossInvoice: string, grossIncome: string, netPayout: string } }) => {
    return (
        <div>
            <h3 className="lg:text-[40px] lg:leading-[48px] font-bold text-gray-700 mb-4">
                Because you deserve more
            </h3>
            <p className="text-base lg:text-lg text-black mb-2 last:mb-0">
                See immediately what you earn net? Select all options and decide for yourself what is important to you.
            </p>
   
            <div className="flex flex-col mt-6 bg-white rounded-2xl shadow-xl border border-gray-200">
                <div className="flex justify-between p-6 lg:p-6 lg:!pb-4">
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-700 mb-2">Invoice amount</p>
                        <p className="text-base font-semibold text-gray-700">€{payoutValues.grossInvoice}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-700 mb-2">Gross Income</p>
                        <p className="text-base font-semibold text-gray-700">€{payoutValues.grossIncome}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-700 mb-2">Net payout</p>
                        <p className="text-[24px] leading-[32px] font-bold text-gray-700">€{payoutValues.netPayout}</p>
                    </div>
                </div>

                <div className="flex flex-col mt-auto px-6 pb-6 rounded-b-2xl pt-6 rounded-t-xl lg:rounded-t-none 
                                    bg-gradient-to-r from-teal-300 via-green-200 to-amber-200">
                    <p className="text-[24px] leading-[32px] font-bold text-white">
                        Working without a Chamber of Commerce or VAT number
                    </p>
                    <p className="text-base mb-2">
                        95,761 workers already preceded you.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <button type='submit'
                            className="btn btn-primary text-white"
                            onClick={() => {
                                const modal = document?.getElementById('my_modal');
                                if (modal instanceof HTMLDialogElement) {
                                    modal.showModal();
                                }
                            }}>
                            Calculate Paycheck
                            <FaChevronRight />
                        </button>

                        <dialog id="my_modal" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>

                                <h4 className="font-bold text-lg">Get Your Invoice</h4>
                                <p>Simply provide us your details and your invoice <br />will be on its way! 🚀</p>

                                <Invoice />

                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayoutSection