"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Feedback() {
    const services = [
        {
            feedback: "I signed up in minutes, and now I can manage everything from my phone. No hidden fees, no stress—just pure convenience!",
            image: "/images/customer1.png",
            name: "Aulia Morgan.",
            title: "Officer",
        },
        {
            feedback: "As someone new to digital banking, I love how simple and transparent the services are. Plus, the rewards are a great bonus!",
            image: "/images/customer2.png",
            name: "Daniel K",
            title: "Small Business Owner",
        },
        {
            feedback: "From quick money transfers to round-the-clock support, this bank has everything I need. I feel safe and in control.",
            image: "/images/customer3.png",
            name: "Carlos H",
            title: "Travel Blogger",
        },
        {
            feedback: "I signed up in minutes, and now I can manage everything from my phone. No hidden fees, no stress—just pure convenience!",
            image: "/images/customer4.png",
            name: "Theresa Webb",
            title: "Officer",
        },
        {
            feedback: "As someone new to digital banking, I love how simple and transparent the services are. Plus, the rewards are a great bonus!",
            image: "/images/customer5.png",
            name: "Kristin Watson",
            title: "Travel Blogger",
        },
        {
            feedback: "From quick money transfers to round-the-clock support, this bank has everything I need. I feel safe and in control.",
            image: "/images/customer6.png",
            name: "Darrell Steward",
            title: "Small Business Owner",
        },
    ]

    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(services.length / 3)

    useEffect(() => {
        let timeout: NodeJS.Timeout

        const nextPage = () => {
            timeout = setTimeout(() => {
                setPage((prev) => (prev + 1) % totalPages)
                nextPage()
            }, 5000)
        }

        nextPage()

        return () => clearTimeout(timeout)
    }, [totalPages])

    const getVisibleCards = () => {
        const start = page * 3
        return services.slice(start, start + 3)
    }

    return (
        <div className="w-full global-px pt-28">
            <h2 className="text-5xl font-medium text-center mb-20 uppercase font-family-helvetica leading-[160%]">
                What our customers are saying
            </h2>

            <div className="w-full overflow-hidden relative">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={page}
                        initial={{ x: "calc(100% + 24px)" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "calc(-100% - 24px)" }}
                        transition={{
                            duration: 2,
                            ease: "linear",
                        }}
                        className="flex gap-6"
                    >
                        {getVisibleCards().map((service, index) => (
                            <div
                                key={index}
                                className="w-1/3 bg-primary-50 rounded-[20px] px-5 py-[42px] flex flex-col gap-[10px]"
                            >
                                {/* Quote Icon */}
                                <div className="mb-[26px]">
                                    <svg
                                        width="47px"
                                        height="30.06px"
                                        viewBox="0 0 60 48"
                                        fill="none"
                                        className="text-primary-200"
                                    >
                                        <path
                                            d="M27.429 30.063V16.797L40.162 0H47.003L39.655 14.497L46.116 15.032V30.063H27.429ZM0 30.063V16.797L12.796 0H19.637L12.289 14.497L18.687 15.032V30.063H0Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>

                                {/* Feedback */}
                                <p className="text-md text-neutral-800 font-family-helvetica font-normal leading-[160%] mb-9">
                                    "{service.feedback}"
                                </p>

                                {/* Divider */}
                                <div className="border-t border-neutral-100 mb-9" />

                                {/* Profile */}
                                <div className="flex items-center px-6 gap-5 mt-auto">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[19px] font-bold font-family-helvetica leading-[120%] text-neutral-900">
                                            {service.name}
                                        </p>
                                        <p className="text-md text-neutral-600 font-family-helvetica font-normal leading-[160%]">
                                            {service.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}