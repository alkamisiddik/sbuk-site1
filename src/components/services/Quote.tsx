"use client"

import { useState } from "react"
import Image from "next/image"

interface AnimatedTestimonialProps {
    imageSrc: string
    imageAlt: string
}

export function AnimatedTestimonial({ imageSrc, imageAlt }: AnimatedTestimonialProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full mx-auto overflow-hidden rounded-2xl bg-white"
        >
            <div className="flex flex-col md:flex-row items-center gap-14">
                {/* Image Section - Animates from left */}
                <div
                    className={`relative flex-shrink-0 overflow-hidden rounded-2xl transition-all duration-700 ease-out ${isHovered ? "translate-x-0 opacity-100" : "-translate-x-[100vw] opacity-0"}`}
                >
                    <div className="relative w-[340px] h-[518px]">
                        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover rounded-2xl" />
                    </div>
                </div>

                {/* Text Section - Animates from right */}
                <div
                    className={`flex relative self-center flex-col items-start justify-center gap-5 w-[1086px] mb-[2.0px] transform transition-all duration-700 ease-out ${isHovered ? "translate-x-0 opacity-100" : "translate-x-[100vw] opacity-0"
                        }`}
                >
                    <div className="relative pl-12 pr-12">
                        {/* Opening quotation mark */}
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" className="absolute left-0 top-0">
                            <path
                                d="M29.167 0C34.229 0 38.333 4.104 38.333 9.167C38.333 12.906 36.387 16.524 33.481 17.222C32.361 17.491 31.468 18.93 31.66 20.571C31.917 22.769 33.904 24.989 37.838 26.739C38.715 27.128 38.348 28.446 37.396 28.327C27.142 27.043 20.034 20.358 20 10.9C20 4.395 23.843 0 29.167 0Z"
                                fill="#99A7D1"
                            />
                            <path
                                d="M9.167 0C14.229 0 18.333 4.104 18.333 9.167C18.333 12.906 16.387 16.524 13.481 17.222C12.361 17.491 11.468 18.93 11.66 20.571C11.917 22.769 13.904 24.989 17.838 26.739C18.715 27.128 18.348 28.446 17.396 28.327C7.142 27.043 0.034 20.358 0 10.9C0 4.395 3.843 0 9.167 0Z"
                                fill="#99A7D1"
                            />
                        </svg>

                        <p className="font-light text-gray-900 text-5xl leading-[62.9px] inline">
                            At <span className="font-medium text-[#e3a91f]">SBUK</span>, we believe banking is more than transactions,
                            it's about building trust, empowering businesses, and creating opportunities that shape a better future
                            for all.
                        </p>

                        <svg
                            width="39"
                            height="39"
                            viewBox="0 0 39 39"
                            fill="none"
                            className="inline-block align-baseline ml-2 rotate-180"
                        >
                            <path
                                d="M29.167 0C34.229 0 38.333 4.104 38.333 9.167C38.333 12.906 36.387 16.524 33.481 17.222C32.361 17.491 31.468 18.93 31.66 20.571C31.917 22.769 33.904 24.989 37.838 26.739C38.715 27.128 38.348 28.446 37.396 28.327C27.142 27.043 20.034 20.358 20 10.9C20 4.395 23.843 0 29.167 0Z"
                                fill="#99A7D1"
                            />
                            <path
                                d="M9.167 0C14.229 0 18.333 4.104 18.333 9.167C18.333 12.906 16.387 16.524 13.481 17.222C12.361 17.491 11.468 18.93 11.66 20.571C11.917 22.769 13.904 24.989 17.838 26.739C18.715 27.128 18.348 28.446 17.396 28.327C7.142 27.043 0.034 20.358 0 10.9C0 4.395 3.843 0 9.167 0Z"
                                fill="#99A7D1"
                            />
                        </svg>
                    </div>

                    <p className="relative w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-[25.6px] whitespace-nowrap pl-12">
                        —&nbsp;&nbsp;MR MASUM BILLAH, CEO AT SBUK
                    </p>
                </div>
            </div>
        </div>
    )
}
