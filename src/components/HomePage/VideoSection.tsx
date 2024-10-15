"use client"
import React from 'react'
import ReactPlayer from 'react-player/vimeo'
import { useTranslations } from 'next-intl';


const VideoSection = () => {
    const lang = useTranslations('videoSection');

 
    return (
        <section className="py-2 md:py-16">
            <div>
                <p className="text-3xl leading-10 lg:text-[40px] lg:leading-[48px] font-bold text-gray-700 hidden text-center mb-12 lg:block">
                {lang('title')}
                </p>
            </div>
            <div className="flex items-center justify-center rounded-3xl">
                <ReactPlayer
                    url="https://vimeo.com/466077734"
                    width="100%"
                    height="400px"
                    controls
                    className="react-player"
                />
            </div>
        </section>
    )
}

export default VideoSection
