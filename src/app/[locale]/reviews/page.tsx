import PageHeader from '@/components/Global/PageHeader'
import React from 'react'
import { IoIosStar } from 'react-icons/io'

const page = () => {
  return (
    <>

      <PageHeader title="Our reviews " />

      <section className="py-6 md:py-16">
        <div className="container grid md:grid-cols-12 grid-cols-1 p-6 gap-6">
          <div className="col-span-6">
            <div className="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-50">
              <span className="block font-title font-bold text-2xl px-6 pt-6">
                <span>Top!</span>
              </span>
              <div className="p-6">
                <div className="flex-wrap md:flex -mx-3 -mt-2 mb-2 last:-mb-2 lg:flex-row-reverse">
                  <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full lg:block lg:flex-none">
                    <div className="flex space-x-3 lg:flex-col lg:items-center">
                      <div
                        className="flex items-center justify-center aspect-square rounded-full text-white w-12 text-2xl lg:w-16 lg:text-3xl bg-green-400">
                        10
                      </div>
                      <div className="flex space-x-1 my-2 *:text-yellow-400">

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />

                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full lg:block lg:flex-1 lg:max-w-full">
                    <p className="font-sans text-base text-gray-700 mb-2 last:mb-0 whitespace-pre-line">
                      ******* ****** ****  ******* ******** ******
                    </p>
                  </div>
                </div>
                <div className="flex-wrap md:flex -mx-3 -mt-2 mb-2 last:-mb-2">
                  <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full lg:block lg:flex-1 lg:max-w-full">
                    <p className="font-sans text-base text-black">
                      <strong>XXXX XXXXX XXXX</strong>
                    </p>
                  </div>
                  <div className="py-2 px-3 block flex-1 sm:hidden lg:block lg:flex-none">
                    <p className="font-sans text-base text-gray-700">
                      ******* ***** **
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="col-span-6">
            <div className="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-50">
              <span className="block font-title font-bold text-2xl px-6 pt-6">
                <span>Top!</span>
              </span>
              <div className="p-6">
                <div className="flex-wrap md:flex -mx-3 -mt-2 mb-2 last:-mb-2 lg:flex-row-reverse">
                  <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full lg:block lg:flex-none">
                    <div className="flex space-x-3 lg:flex-col lg:items-center">
                      <div
                        className="flex items-center justify-center aspect-square rounded-full text-white w-12 text-2xl lg:w-16 lg:text-3xl bg-green-400">
                        10
                      </div>
                      <div className="flex space-x-1 my-2 *:text-yellow-400">

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />

                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full lg:block lg:flex-1 lg:max-w-full">
                    <p className="font-sans text-base text-gray-700 mb-2 last:mb-0 whitespace-pre-line">
                      ******* ****** ****  ******* ******** ******
                    </p>
                  </div>
                </div>
                <div className="flex-wrap md:flex -mx-3 -mt-2 mb-2 last:-mb-2">
                  <div className="py-2 px-3 block flex-1 sm:block sm:basis-full sm:max-w-full lg:block lg:flex-1 lg:max-w-full">
                    <p className="font-sans text-base text-black">
                      <strong>XXXX XXXXX XXXX</strong>
                    </p>
                  </div>
                  <div className="py-2 px-3 block flex-1 sm:hidden lg:block lg:flex-none">
                    <p className="font-sans text-base text-gray-700">
                      ******* ***** **
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default page