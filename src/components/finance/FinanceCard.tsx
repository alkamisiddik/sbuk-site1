import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

function FinanceCard({ project }) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <motion.div
            className="relative bg-[#D9D9D9] rounded-2xl overflow-hidden aspect-[507/543] mb-[78.39px]"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {/* Project Image */}
            <div className="relative w-full h-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content Overlay */}
            <motion.div
                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 40 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-10 h-[160px] w-full text-white flex flex-col justify-end px-8"
            >
                {/* Border inside padded container */}
                <div className="border-b border-[#FFFFFF33]">
                    <div className="mb-6">
                        <h4 className="text-[22px] font-medium font-family-helvetica leading-[120%] mb-4">
                            {project.title}
                        </h4>
                        <p className="font-family-helvetica font-normal text-white text-md leading-[160%]">
                            {project.subtitle}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : "100%",
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col px-8 pt-8 gap-4 bg-gradient-to-t from-[#000000] from-0%"
            >
                <h4 className="text-white text-[22px] font-medium font-family-helvetica leading-[120%] mb-4">
                    {project.title}
                </h4>
                <p className="text-white font-family-helvetica font-normal text-md leading-[160%] pb-4">{project.hoverPara}</p>
                <Button className="h-13 w-[134px] rounded-xs px-4 py-3 bg-secondary-500 text-white hover:bg-transparent/40 hover:border hover:border-secondary-500 hover:text-secondary-500 group">See More
                    <ArrowUpRight className="w-6 h-6 group-hover:hidden" />
                    <ArrowRight className="w-6 h-6 hidden group-hover:inline" />
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default FinanceCard;