import React from 'react'
import { Inter } from "next/font/google"
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "400", "700"],
})

const AboutUs = () => {
    return (
        <div className="relative w-full min-h-screen lg:py-20 px-4 lg:px-8">
            <div className='max-w-[88%] mx-auto mt-20'>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 mt-20">
                    {/* Left Side */}
                    <div className="leftSide w-full lg:w-1/2 mt-5">
                        <div className="text-base text-primary font-bold uppercase mb-6">
                            About Us
                        </div>

                        <h2 className={`${inter.className} text-4xl sm:text-5xl lg:text-[64px] font-extralight leading-[115%] tracking-tighter text-gray-900`}>
                            Innovating Finance for a <br className="hidden sm:block" />Better Tomorrow. <br />
                            <span className="font-medium text-primary">Empowering you</span> with <br className="hidden sm:block" />
                            smarter, future-ready banking.
                        </h2>

                        <p className='mt-8 lg:mt-12 font-medium text-sm sm:text-base lg:pr-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>

                        <p className='mt-6 lg:mt-12 font-medium text-sm sm:text-base lg:pr-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <button className="mt-8 lg:mt-16 inline-flex items-center px-4 py-3 gap-2
                            bg-highlight-500 hover:bg-transparent 
                            border border-highlight-500 rounded-sm 
                            text-white text-sm hover:text-amber-500 font-medium 
                            shadow-lg transition group hover:translate-x-0.5">
                            More About Us
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:hidden" />
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 hidden group-hover:inline" />
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="rightSide w-full lg:w-1/2">
                        <div className="flex flex-row gap-4 sm:gap-7">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/images/about1.png"
                                    alt="About Us"
                                    className="h-[392px] w-full lg:w-[472px] object-cover transition-transform duration-200 ease-in hover:scale-115"
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/images/about2.png"
                                    alt="About Us"
                                    className="h-[392px] w-full lg:w-[232px] object-cover transition-transform duration-200 ease-in hover:scale-115"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 sm:gap-7 mt-4 sm:mt-9">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/images/about3.png"
                                    alt="About Us"
                                    className="h-[392px] w-full lg:w-[232px] object-cover transition-transform duration-200 ease-in hover:scale-115"
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/images/about4.png"
                                    alt="About Us"
                                    className="h-[392px] w-full lg:w-[472px] object-cover transition-transform duration-200 ease-in hover:scale-115"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs