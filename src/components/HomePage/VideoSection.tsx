import React from 'react'
import { useTranslations } from 'next-intl';
import { MdKeyboardArrowRight } from 'react-icons/md';


const featuresVideo = [
        " Before it is on your account, everything is paid.So what do you really deserve? It starts with your gross salary.You pay wage tax on this.",
        " You have no control over all these costs. Isn't that crazy? Styptec is for modern workers who themselves take control of their income.",
        " Two important things are always well organized with us. Your taxes have been paid properly. And any long-term illness is covered.",
        " So no more surprises afterwards. Are you already an entrepreneur? Then this is also something for you. Because you don't have to do any administration with us.",
        " As an employee you receive a salary every month. But your net salary is not the amount that you cost. Because you don't have to do any administration with us."
    ]

const VideoSection = () => {
    const lang = useTranslations('videoSection');


    return (
        <section className="py-2 md:py-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                    <div className="md:col-span-5">
                        <p className="text-2xl md:text-3xl font-bold hidden mb-12 lg:block">
                            {lang('title')}
                        </p>

                        <ul className="mb-8 space-y-4 text-sm">
                            {featuresVideo.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <MdKeyboardArrowRight className="size-10 text-green-600" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-5 flex items-center">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-[250px] md:h-[350px] md:w-[600px] md:rounded-3xl shadow-lg">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default VideoSection
