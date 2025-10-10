"use client"

import { useState } from "react"
import Image from "next/image"

interface AnimatedQuote {
    imageSrc: string
    imageAlt: string
}

export function AnimatedQuote({ imageSrc, imageAlt }: AnimatedQuote) {
    const [isHovered, setIsHovered] = useState(true)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center gap-13">
                {/* Image Section - Animates from left */}
                <div
                    className={`relative flex-shrink-0 overflow-hidden transition-all duration-700 ease-out ${isHovered ? "translate-x-0 opacity-100" : "-translate-x-[100vw] opacity-0"}`}
                >
                    <div className="relative w-[340px] h-[518px] sm:w-[300px] md:w-[340px] sm:h-[480px] md:h-[518px] pt-[25px]">
                        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover rounded-2xl" />
                    </div>
                </div>

                {/* Text Section - Animates from right */}
                <div
                    className={`bg-white flex relative self-center flex-col items-start justify-center gap-5 md:ml-4 mb-[2.0px] transform transition-all duration-700 ease-out ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        }`}
                >
                    {/* Opening quotation mark */}
                    <p className="font-light text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug md:leading-[131%] relative">
                        <span className="relative inline-block align-text-top mb-3 mr-3">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 39 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#99A7D1] fill-[#99A7D1] w-5 h-5 sm:w-7 sm:h-7 lg:w-[38.34px] lg:h-[38.34px]"
                            >
                                <path d="M29.1665 0C34.2292 0 38.3332 4.10406 38.3332 9.16667C38.3332 12.906 36.3866 16.524 33.4813 17.2222C32.3607 17.4915 31.4682 18.9296 31.6599 20.5714C31.9166 22.7689 33.9038 24.989 37.8385 26.7386C38.7145 27.1281 38.3477 28.446 37.3964 28.3269C27.1421 27.0431 20.0341 20.3579 20 10.8997C19.9999 4.39508 23.8429 0 29.1665 0Z" />
                                <path d="M9.16655 0C14.2292 0 18.3332 4.10406 18.3332 9.16667C18.3332 12.906 16.3866 16.524 13.4813 17.2222C12.3607 17.4915 11.4682 18.9296 11.6599 20.5714C11.9166 22.7689 13.9038 24.989 17.8385 26.7386C18.7145 27.1281 18.3477 28.446 17.3964 28.3269C7.14208 27.0431 0.0341 20.3579 2.94371e-09 10.8997C-0.000122814 4.39508 3.84286 0 9.16655 0Z" />
                            </svg>
                        </span>

                        At <span className="font-medium text-secondary-500">SBUK</span>, we believe banking is more than transactions,
                        it's about building trust, empowering businesses, and creating opportunities that shape a better future for all.

                        <span className="relative inline-block align-text-top ml-3">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 39 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#99A7D1] fill-[#99A7D1] w-5 h-5 sm:w-7 sm:h-7 lg:w-[38.34px] lg:h-[38.34px]"
                            >
                                <path d="M9.16939 0C4.10678 0 0.00272179 4.10406 0.00272179 9.16667C0.00272179 12.906 1.9493 16.524 4.85461 17.2222C5.97528 17.4915 6.86777 18.9296 6.676 20.5714C6.41932 22.7689 4.43212 24.989 0.497473 26.7386C-0.378601 27.1281 -0.0117702 28.446 0.939581 28.3269C11.1939 27.0431 18.3018 20.3579 18.3359 10.8997C18.3361 4.39508 14.4931 0 9.16939 0Z" />
                                <path d="M29.1694 0C24.1068 0 20.0027 4.10406 20.0027 9.16667C20.0027 12.906 21.9493 16.524 24.8546 17.2222C25.9753 17.4915 26.8678 18.9296 26.676 20.5714C26.4193 22.7689 24.4321 24.989 20.4975 26.7386C19.6214 27.1281 19.9882 28.446 20.9396 28.3269C31.1939 27.0431 38.3018 20.3579 38.3359 10.8997C38.3361 4.39508 34.4931 0 29.1694 0Z" />
                            </svg>
                        </span>
                    </p>

                    <p className="relative w-fit font-family-helvetica font-medium text-black text-base tracking-[0] leading-[160%] whitespace-nowrap md:pt-5 uppercase">
                        —&nbsp;&nbsp;MR MASUM BILLAH, CEO AT SBUK
                    </p>
                </div>
            </div>
        </div>
    )
}
