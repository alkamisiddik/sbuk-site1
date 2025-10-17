"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, ArrowUpRight, X } from "lucide-react"
import { FinanceCardPros } from "@/lib/types"

function FinanceCard({ financeCard }: { financeCard: FinanceCardPros }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <motion.div
            className="relative bg-[#D9D9D9] rounded-2xl overflow-hidden w-full max-w-[540px] mx-auto"
            onHoverStart={() => setIsActive(true)}
            onHoverEnd={() => setIsActive(false)}
            onTap={() => setIsActive(!isActive)}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            aria-expanded={isActive}
        >
            {/* Image area with responsive heights so content won't overflow */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
                <Image
                    src={financeCard.image || "/placeholder.svg"}
                    alt={financeCard.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Non-hover (base) content - shown when NOT active (desktop) */}
            <motion.div
                animate={{ opacity: isActive ? 0 : 1, y: isActive ? 24 : 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute bottom-6 sm:bottom-10 w-full text-white flex flex-col justify-end px-4 sm:px-8 pointer-events-none"
            >
                <div className="border-b border-[#FFFFFF33] pb-3 sm:pb-4">
                    <h4 className="text-[22px] font-medium font-family-helvetica leading-[120%] mb-4"> {financeCard.title} </h4>
                    <p className="text-sm sm:text-base leading-[160%]">
                        {financeCard.subtitle}
                    </p>
                </div>
            </motion.div>

            {/* Overlay: either slides up on hover (desktop) or toggles on tap (mobile) */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : "100%",
                    pointerEvents: isActive ? "auto" : "none",
                }}
                transition={{ duration: 0.36, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col px-4 sm:px-8 pt-6 sm:pt-8 gap-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                role="dialog"
                aria-hidden={!isActive}
            >
                <div className="flex items-start justify-between overflow-auto">
                    <div>
                        <h4 className="text-white text-[22px] font-medium font-family-helvetica leading-[120%] mb-4"> {financeCard.title} </h4>
                        <p className="text-white text-sm sm:text-[16px] leading-[160%] max-w-[90%]">
                            {financeCard.hoverPara}
                        </p>
                    </div>
                </div>

                <div className="mt-auto pb-4">
                    <Button
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className="font-family-helvetica self-start h-12 sm:h-13 w-[130px] sm:w-[147px] rounded-xs px-4 py-3 bg-secondary-500 text-white hover:bg-transparent/40 hover:border hover:border-secondary-500 hover:text-secondary-500 group"
                    >
                        {financeCard.buttonText}
                        <ArrowUpRight className="w-5 h-5 sm:w-[32px] sm:h-[32px] group-hover:hidden ml-2" />
                        <ArrowRight className="w-5 h-5 sm:w-[32px] sm:h-[32px] hidden group-hover:inline ml-2" />
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default FinanceCard
