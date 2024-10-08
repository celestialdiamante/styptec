import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const CallToAction = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-teal-300 via-green-200 to-amber-200 relative">
            <div className="container mx-auto text-center">
                <div className="space-y-4 lg:px-24 2xl:px-64">
                    <p className="font-sans text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-gray-950">
                        Check out the options without obligation.
                    </p>
                    <h5 className="font-sans text-base text-gray-950 mb-2 last:mb-0">
                        Register in <span className="text-teal-800 font-bold">10 seconds</span> and see how easy it is. No strings attached.
                    </h5>
                    <a href="#" className="btn btn-primary text-white">
                        Register for free
                        <FaChevronRight />
                    </a>
                </div>

            </div>
        </section>

    )
}

export default CallToAction