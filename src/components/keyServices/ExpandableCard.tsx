"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"

interface ExpandableCardProps {
  id: number
  title: string
  image: string
  details: string
  active: number | null
  setActive: (id: number | null) => void
}

export default function ExpandableCard({
  id,
  title,
  image,
  details,
  active,
  setActive,
}: ExpandableCardProps) {
  const isActive = active === id

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative rounded-md shadow-md overflow-hidden cursor-pointer flex h-[600px] w-[402px]"
      style={{
        flex: isActive ? 3 : 1, // expands horizontally
      }}
      onClick={() => setActive(isActive ? null : id)}
    >
      {/* Background image */}
      <img src={image} alt={title} className="object-fill" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Top-right button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setActive(isActive ? null : id)
        }}
        className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center rounded-[8px] bg-white/30 backdrop-blur-md z-10"
      >
        {isActive ? <Minus color="white" /> : <Plus color="white" />}
      </button>

      {/* Bottom-center title */}
      <h2 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-[22px] font-[700] uppercase drop-shadow-lg">
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
            className="absolute inset-0 flex items-center justify-center p-6 text-white bg-black/50 backdrop-blur-[8]"
          >
            <p>{details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
