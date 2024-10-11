import React from 'react'
import { FcApproval } from 'react-icons/fc'

const Stats = () => {
    return (
        <section className="py-6 md:py-16">
            <div className="container grid lg:grid-cols-12 grid-cols-1 ">
                <div className="lg:col-span-4 flex items-start md:items-center md:justify-center gap-2">
                    <FcApproval className="size-16" />
                    <div>
                        <p>Trusted by <span className="font-semibold ">95.571</span><br />
                            customers</p>
                    </div>
                </div>
                <div className="lg:col-span-4 flex items-start md:items-center md:justify-center gap-2">
                    <div className="flex flex-col items-center md:flex-row">
                        <FcApproval className="size-16" />
                        <p className="font-bold text-base text-center lg:text-3xl">97%</p>
                    </div>
                    <div>
                        <p>would recommend us based <br /> on
                            <span className="font-semibold "> customer interviews</span>
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-4 flex items-start md:items-center md:justify-center gap-2">
                    <div className="flex flex-col items-center md:flex-row">
                        <FcApproval className="size-16" />
                        <p className="font-bold text-base text-center   lg:text-3xl">9.8</p>
                    </div>
                    <div>
                        <p>Our customer satisfaction on <br />
                            <span className="font-semibold"> Klantenvertellen</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Stats