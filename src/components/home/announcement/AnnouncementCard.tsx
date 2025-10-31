import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../../shadcn-ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Announcement } from "@/lib/types"

function AnnouncementCard({ title, announcement }: { title: string; announcement: Announcement }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <motion.div
            className="relative rounded-lg h-[500px] md:h-[759px] overflow-hidden cursor-pointer"
            onHoverStart={() => setIsActive(true)}
            onHoverEnd={() => setIsActive(false)}
            onTap={() => setIsActive(!isActive)}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            aria-expanded={isActive}
        >
            {/* Background Image */}
            <div className="relative w-full h-full">
                <Image
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Bottom info (hidden on hover) */}
            <motion.div
                animate={{ opacity: isActive ? 0 : 1, y: isActive ? 40 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute font-family-helvetica bottom-[26px] left-0 right-0 lg:right-[54px] bg-[#21409AE5] rounded-lg h-[175px] p-6"
            >
                <span className="inline-block text-secondary-500 text-[11px] font-medium tracking-normal leading-[120%] uppercase mb-4">
                    {title}
                </span>
                <h3 className="text-white text-lg md:text-xl lg:text-[25px]  font-bold leading-[120%] font-family-helvetica mb-4">
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
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : "100%",
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col p-6 bg-[#21409AE5]/80 backdrop-blur-xs overflow-auto"
            >
                <span className="text-secondary-500 text-[11px] font-medium tracking-normal leading-[120%] uppercase mb-4">
                    {title}
                </span>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: isActive ? 0.1 : 0 }}
                    className="text-white text-xl md:text-[28px] font-bold leading-[130%] mb-4 font-family-helvetica"
                >
                    {announcement.title}
                </motion.h3>
                {announcement.hoverPara.map((para: string, idx: number) => (
                    <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: isActive ? 0.2 + idx * 0.2 : 0 }}
                        className="text-white text-md md:text-[17px] leading-[160%] font-medium font-family-helvetica mb-6"
                    >
                        {para}
                    </motion.p>
                ))}
                <Button className="font-family-helvetica h-[52px] w-[146px] px-3 py-4 bg-secondary-500 text-white hover:bg-transparent/40 hover:border hover:border-secondary-500 hover:text-secondary-500 group">Learn More
                    <ArrowUpRight className="w-6 h-6 group-hover:hidden" />
                    <ArrowRight className="w-6 h-6 hidden group-hover:inline" />
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default AnnouncementCard;