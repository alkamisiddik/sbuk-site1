import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

function AnnouncementCard({ announcement }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="relative rounded-lg bg-gray-900 h-[759px] cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {/* Background Image */}
            <div className="relative w-full h-full">
                <Image
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Bottom info (hidden on hover) */}
            <motion.div
                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 40 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute font-family-helvetica bottom-[26px] left-0 right-[54px] bg-[#21409AE5] rounded-lg h-[175px] p-6"
            >
                <span className="inline-block text-highlight-500 text-[11px] font-medium tracking-normal leading-[120%] uppercase mb-4">
                    ANNOUNCEMENTS
                </span>
                <h3 className="text-white text-[25px] font-bold leading-[120%] font-family-helvetica mb-4">
                    {announcement.title}
                </h3>
                <p className="text-white text-md leading-[160%] font-normal font-family-helvetica">
                    {announcement.description}
                </p>
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : "100%",
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col p-6 bg-[#21409AE5]/80 backdrop-blur-xs"
            >
                <span className="text-highlight-500 text-[11px] font-medium tracking-normal leading-[120%] uppercase mb-4">
                    ANNOUNCEMENTS
                </span>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: isHovered ? 0.1 : 0 }}
                    className="text-white text-[28px] font-bold leading-[130%] mb-4 font-family-helvetica"
                >
                    {announcement.title}
                </motion.h3>
                {announcement.hoverPara.map((para: string, idx: number) => (
                    <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: isHovered ? 0.2 + idx * 0.2 : 0 }}
                        className="text-white text-[17px] leading-[160%] font-medium font-family-helvetica mb-6"
                    >
                        {para}
                    </motion.p>
                ))}
                <Button className="h-[52px] w-[146px] px-3 py-4 bg-secondary-500 text-white hover:bg-transparent/40 hover:border hover:border-secondary-500 hover:text-secondary-500 group">Learn More
                    <ArrowUpRight className="w-6 h-6 group-hover:hidden" />
                    <ArrowRight className="w-6 h-6 hidden group-hover:inline" />
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default AnnouncementCard;