"use client"
import React from 'react'
import ReactPlayer from 'react-player/vimeo'

const VideoSection = () => {
    return (
        <section className="py-16">
            <div>
                <p className="text-3xl leading-10 lg:text-[40px] lg:leading-[48px] font-bold text-gray-700 hidden text-center mb-12 lg:block">
                    Learn here how we can help you!
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
