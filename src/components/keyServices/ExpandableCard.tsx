"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

interface BoxDetail {
  boxTitle: string
  boxDescription: string
  listData: { id: number; text: string }[]
}

interface ExpandableCardProps {
  id: number
  title: string
  image: string
  details: string
  boxDetails: BoxDetail[]
  active: number | null
  setActive: (id: number | null) => void
}

export default function ExpandableCard({
  id,
  title,
  image,
  details,
  boxDetails,
  active,
  setActive,
}: ExpandableCardProps) {
  const isActive = active === id

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative rounded-md shadow-md overflow-hidden cursor-pointer flex h-[400px] md:h-[500px] lg:h-[600px]`}
      style={{
        flex: window.innerWidth < 1024 ? "1 1 100%" : isActive ? 5 : 1,
      }}
      onClick={() => setActive(isActive ? null : id)}
    >
      {/* Background image */}
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover block" />

      {/* Dark overlay */}
      {isActive && <div className="absolute inset-0 bg-transparent/80 backdrop-blur-xs" />}

      {/* Top-right button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setActive(isActive ? null : id)
        }}
        className="absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-[8px] bg-white/30 backdrop-blur-md z-10"
      >
        {isActive ? (
          <Minus color="white" className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Plus color="white" className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Bottom-center title (only when collapsed) */}
      <h2
        className={`absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] text-white text-lg md:text-xl lg:text-[22px] font-bold uppercase text-center drop-shadow-lg ${isActive ? "hidden" : "inline"
          }`}
      >
        {title}
      </h2>

      {/* Expandable details */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-row text-white bg-black/50 backdrop-blur-[8] overflow-y-auto"
          >
            <div className="mt-12 md:mt-16 lg:mt-18 mx-6 md:mx-8 lg:ml-13 lg:mr-10 pb-6">
              {/* Title */}
              <div className="font-bold text-2xl md:text-3xl lg:text-[34px]">{title}</div>

              {/* Details */}
              <div className="text-sm md:text-base font-normal leading-[160%] mt-4 lg:mt-6">{details}</div>

              {/* Box Details */}
              <div className="flex flex-col lg:flex-row justify-between gap-3 mt-6 lg:mt-8">
                {boxDetails.map((box, idx) => (
                  <Card
                    key={idx}
                    className="w-full lg:max-w-[476px] text-sm md:text-base text-white font-normal bg-black/40 border-0 backdrop-blur-[8]"
                  >
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">{box.boxTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col">
                        <p>{box.boxDescription}</p>
                        <ul className="list-disc pt-2 ml-6 flex flex-col gap-2 lg:gap-3">
                          {box.listData.map((item) => (
                            <li key={item.id}>{item.text}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button className="mt-4 lg:mt-6 h-10 w-30 p-3 text-sm md:text-base bg-highlight-500 text-white hover:bg-transparent/40 hover:border hover:border-highlight-500 hover:text-highlight-500 group">
                See More
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:hidden" />
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 hidden group-hover:inline" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
