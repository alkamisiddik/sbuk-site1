"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion";

const announcements = [
    {
        image: "/announcement-1.jpg",
        title: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/announcement-2.jpg",
        title: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/announcement-3.jpg",
        title: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
]

export default function ContactPage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % announcements.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length)
    }

    return (
        <section className="relative bg-primary-500 h-[640px] text-white">
            <div className="flex justify-between global-px">
                {/* Left side */}
                <div>
                    {/* Video box */}
                    <div className="h-[224px] w-[344px] mt-[82px] bg-transparent rounded-xl overflow-hidden">
                        <video
                            src="/SBUK G 3.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold font-family-helvetica mt-[38.81] mb-3 leading-[119%]">
                            Let’s get the conversation going
                        </h2>
                        <p className="text-base font-medium max-w-6/7 text-primary-100 mb-9 leading-[160%] tracking-normal font-family-helvetica">
                            Learn more about how FIS can help you run, grow, protect and connect your business with unparalleled confidence.
                        </p>

                        {/* Email input with button */}
                        <div className="flex items-center bg-primary-800 rounded-xl max-w-[508px] h-[68px] py-3 pl-6 pr-3">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="flex-1 bg-transparent text-white font-family-helvetica placeholder-neutral-500 px-4 py-4 focus:outline-none"
                            />
                            <button className="bg-highlight-500 text-white h-[44px] w-[44px] p-2 gap-[10px] rounded-md flex items-center justify-center">
                                <ArrowUpRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col gap-8 mt-[137.81px] h-[364px] w-[476px]">
                    <div>
                        <div className="bg-[#FFFFFF14] px-6 py-4 rounded-xl">
                            <h3 className="font-bold text-[19px] leading-[120%] font-family-helvetica mb-[11px]">How We Can Help</h3>
                            <ul className="list-disc px-6 space-y-[11px] text-[#FFFFFF] text-md font-family-helvetica font-normal leading-[160%]">
                                <li>Service inquiries and consultations</li>
                                <li>Partnership opportunities</li>
                                <li>Trade information and advisory support</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#FFFFFF14] px-4 py-6 rounded-xl">
                            <h3 className="font-bold text-[19px] leading-[120%] font-family-helvetica mb-[11px]">Why Choose Us?</h3>
                            <ul className="list-disc px-6 space-y-[11px] text-[#FFFFFF] text-[16px] font-family-helvetica font-normal leading-[160%]">
                                <li>Trusted partner for trade and project solutions</li>
                                <li>Proven expertise in international markets</li>
                                <li>Client-focused service approach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top vector */}
            <motion.div
                className="absolute left-0 top-0 origin-top-left"
                animate={{
                    scale: [1, 1.2, 1.15, 1.25, 1],
                    opacity: [0.5, 0.7, 0.6, 0.8, 0.5],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.2, 0.0, 0.2, 1], // Custom cubic-bezier for smooth flow
                }}
            >
                <svg
                    width="199"
                    height="200"
                    viewBox="0 0 199 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.47"
                        d="M0 199.812V101.483C5.2618 109.296 11.987 116.027 19.8001 121.282C31.4053 129.108 45.3901 133.67 60.4374 133.67C75.4847 133.67 89.4695 129.108 101.075 121.282C108.882 116.027 115.613 109.296 120.875 101.483C128.694 89.8778 133.256 75.8935 133.256 60.8403C133.256 45.7871 128.694 31.8091 120.875 20.1979C115.747 12.5886 109.225 6.01001 101.673 0.812012H199V1.42281C170.547 6.30905 148.908 31.0584 148.908 60.8403C148.908 90.6222 170.553 115.372 199 120.271V121.282H120.881V199.812H120.2C115.848 170.781 90.7484 148.526 60.4438 148.526C30.1392 148.526 5.03911 170.781 0.687149 199.812H0.00634766H0Z"
                        fill="white"
                        fillOpacity="0.16"
                    />
                </svg>
            </motion.div>

            {/* Bottom vector */}
            <motion.div
                className="absolute bottom-0 right-0 origin-top-right"
                animate={{
                    scale: [1, 1.2, 1.15, 1.25, 1],
                    opacity: [0.5, 0.7, 0.6, 0.8, 0.5],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.2, 0.0, 0.2, 1], // Custom cubic-bezier for smooth flow
                }}
            >
                <svg
                    width="165"
                    height="165"
                    viewBox="0 0 165 165"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M165 0V81.5294C160.637 75.0513 155.061 69.4701 148.583 65.1127C138.96 58.6241 127.365 54.8417 114.889 54.8417C102.412 54.8417 90.8167 58.6241 81.1943 65.1127C74.7214 69.4701 69.1399 75.0513 64.7772 81.5294C58.2936 91.1515 54.5111 102.746 54.5111 115.228C54.5111 127.709 58.2936 139.299 64.7772 148.926C69.0292 155.235 74.4365 160.69 80.6984 165H0V164.494C23.5918 160.442 41.5336 139.921 41.5336 115.228C41.5336 90.5342 23.5865 70.0134 0 65.9515V65.1127H64.7719V0H65.3363C68.9447 24.0711 89.7564 42.524 114.883 42.524C140.01 42.524 160.822 24.0711 164.43 0H164.995H165Z"
                        fill="white"
                        fillOpacity="0.16"
                    />
                </svg>
            </motion.div>
        </section>
    )
}
