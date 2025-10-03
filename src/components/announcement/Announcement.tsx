"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const announcements = [
  {
    id: 1,
    image: "/images/announcement1.jpg",
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: "/images/announcement2.png",
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: "/images/announcement3.png",
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? announcements.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= announcements.length - 3 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-gray-500 tracking-wider">ANNOUNCEMENTS</h2>
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-lg bg-[#F5A623] hover:bg-[#E09612] flex items-center justify-center transition-colors"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 h-[500px] cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                src={announcement.image || "/placeholder.svg"}
                alt={announcement.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-[#3B5998] p-6 space-y-3">
              <span className="inline-block text-[#F5A623] text-xs font-semibold tracking-wider uppercase">
                ANNOUNCEMENTS
              </span>
              <h3 className="text-white text-xl font-semibold leading-tight">{announcement.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{announcement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
