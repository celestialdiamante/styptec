import React from 'react'
import { FiCheck } from 'react-icons/fi';

const features: Array<string> = [
  "No administration, Chamber of Commerce or VAT number.",
  "We invoice and arrange all mandatory taxes.",
  "Our service can be canceled at any time.",
];

const RegisterInfo = () => {
    return (
        <div><h3 className="lg:text-[40px] lg:leading-[48px] font-bold text-gray-700 mb-4">Register at Styptec</h3>
            <p className="text-base lg:text-lg text-black mb-2">
                To work independently via Styptec, we apply a number of conditions and rules. Please also read our framework agreement and
                <span className="text-blue-600 font-semibold"> terms and conditions </span>
                carefully.
            </p>

            <ul className="mb-8 space-y-4 text-base text-black">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <FiCheck className="text-green-600 size-5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RegisterInfo