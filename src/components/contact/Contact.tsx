"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[307px] ml-[200px]">
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
                        <h2 className="text-4xl md:text-5xl font-bold font-helvetica mt-[38.81] mb-4">
                            Let’s get the conversation going
                        </h2>
                        <p className="text-base font-medium text-primary-100 mb-8 max-w-4/5">
                            Learn more about how FIS can help you run, grow, protect and connect
                            your business with unparalleled confidence.
                        </p>

                        {/* Email input with button */}
                        <div className="flex items-center bg-[#0E1E4C] rounded-lg overflow-hidden max-w-md">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-4 focus:outline-none"
                            />
                            <button className="bg-[#F3B33D] hover:bg-[#D89C2F] text-white px-4 py-4 flex items-center justify-center">
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col gap-8 mt-[137.81px] h-[364px] w-[476px]">
                    <div>
                        <div className="bg-[#FFFFFF14] pt-4 pr-6 pb-4 pl-6 rounded-xl shadow">
                            <h3 className="font-semibold mb-3">How We Can Help</h3>
                            <ul className="space-y-2 text-gray-100 text-sm">
                                <li>• Service inquiries and consultations</li>
                                <li>• Partnership opportunities</li>
                                <li>• Trade information and advisory support</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#FFFFFF14] p-6 rounded-xl shadow">
                            <h3 className="font-semibold mb-3">Why Choose Us?</h3>
                            <ul className="space-y-2 text-gray-100 text-sm">
                                <li>• Trusted partner for trade and project solutions</li>
                                <li>• Proven expertise in international markets</li>
                                <li>• Client-focused service approach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorative shapes (optional) */}
            <div className="absolute top-0 left-0">
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
            </div>

            {/* Bottom vector */}
            <div className="absolute bottom-0 right-0">
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
            </div>
        </section>
    )
}
