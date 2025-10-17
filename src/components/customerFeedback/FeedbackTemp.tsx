"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FeedbackProps } from "@/lib/types"

export default function Feedback({ feedbacks }: { feedbacks: FeedbackProps[] }) {
    const [page, setPage] = useState(0)
    const [cardsPerPage, setCardsPerPage] = useState(3)

    // Adjust cards per page based on window size
    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 640) setCardsPerPage(1) // mobile
            else if (window.innerWidth < 1024) setCardsPerPage(2) // tablet
            else setCardsPerPage(3) // desktop
        }

        updateCardsPerPage()
        window.addEventListener("resize", updateCardsPerPage)
        return () => window.removeEventListener("resize", updateCardsPerPage)
    }, [])

    const totalPages = Math.ceil(feedbacks.length / cardsPerPage)

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
        const start = page * cardsPerPage
        return feedbacks.slice(start, start + cardsPerPage)
    }

    return (
        <div className="w-full global-px pt-20 md:pt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-12 md:mb-20 uppercase leading-[140%] md:leading-[160%]">
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
                        className={`
                            grid gap-6
                            ${cardsPerPage === 1
                                ? "grid-cols-1"
                                : cardsPerPage === 2
                                    ? "grid-cols-2"
                                    : "grid-cols-3"
                            }
                        `}
                    >
                        {getVisibleCards().map((feedbacks, index) => (
                            <div
                                key={index}
                                className="bg-primary-50 rounded-[20px] px-5 py-8 sm:py-10 flex flex-col"
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
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
                                <p className="text-base sm:text-lg text-neutral-800 font-family-helvetica font-normal leading-[160%] mb-7 sm:mb-9">
                                    "{feedbacks.feedback}"
                                </p>

                                {/* Divider */}
                                <div className="border-t border-neutral-100 mb-7 sm:mb-9" />

                                {/* Profile */}
                                <div className="flex items-center px-4 sm:px-6 gap-4 sm:gap-5 mt-auto">
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={feedbacks.image || "/placeholder.svg"}
                                            alt={feedbacks.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 
                                                (max-width: 1024px) 100vw, 
                                                100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[17px] sm:text-[19px] font-bold font-family-helvetica leading-[120%] text-neutral-900">
                                            {feedbacks.name}
                                        </p>
                                        <p className="text-sm sm:text-base text-neutral-600 font-family-helvetica font-normal leading-[160%]">
                                            {feedbacks.title}
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
