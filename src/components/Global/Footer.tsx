import { Link } from '@/i18n/routing'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto bg-teal-950 w-full">
      <div className="mt-auto w-full container py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <a className="flex-none text-xl font-bold text-lg text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
              <img
                className="size-16"
                src="/STYPTEC_Icon-01.png"
                alt="" />
            </a>
            <div className="mt-3">
              <h4 className="font-bold text-lg text-secondary">General information</h4>

              <div className="mt-3 grid space-y-3 *:text-white *:hover:text-gray-200 *:focus:outline-none *:focus:text-gray-200">
                <p>KVK: 81188803</p>
                <p>VAT: NLXXXXXXXXXXXX</p>
                <p>IBAN: NLXXXXXXXXXXXXXXXX</p>
              </div>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-lg text-secondary">Quick Links</h4>

            <div className="mt-3 grid space-y-3">
              <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/calculate-your-benefit">Calculate your benefit</Link></p>
              <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/about-us">About us</Link></p>
              <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/how-does-it-work">How does Styptec work</Link></p>
              <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/game-rules">Game Rules</Link></p>
              <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/pricing">Pricing</Link></p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-lg text-secondary">Policy</h4>

            <div className="mt-3 grid space-y-3 *:text-white *:hover:text-gray-200 *:focus:outline-none *:focus:text-gray-200">
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/privacy">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/disclaimer">
                  Disclaimer
                </Link>
              </p>
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/terms">
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/website-rules">
                  Website Rules
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-lg text-secondary">Stay up to date</h4>

            <div className="mt-3 grid space-y-3  text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
              <p>
                STYPTEC B.V. <br />
                <span className="font-bold">Hoofdvestiging:</span> Rokin 92, 1012 KZ  Amsterdam <br />
              </p>
              <p>
                <span className="font-bold">Bezoekadres:</span> Laan van Zuidhoorn 41,<br />
                2289 DC  Rijswijk
              </p>
              <p>
                <a className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="mailto:info@styptec.nl">
                  info@styptec.nl
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-white">
              © STYPTEC 2024  |  Designed and powered by <a href="https://adronsoft.org/" className="font-bold" target="_blank">adronSoft</a>
            </p>
          </div>
          {/* End Col */}

          {/* Social Brands */}
          <div>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-bold text-lg rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-bold text-lg rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-bold text-lg rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>

          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  )
}

export default Footer