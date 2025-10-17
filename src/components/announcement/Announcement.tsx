"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import AnnouncementCard from "./AnnouncementCard"
import { AnnouncementData } from "@/lib/types"

export default function Announcements({ announcementData }: { announcementData: AnnouncementData }) {
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)
  const [clickedButton, setClickedButton] = useState<"prev" | "next" | null>(null)

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


  const totalPages = Math.ceil(announcementData.announcements.length / cardsPerPage)

  const handlePrevious = () => {
    setDirection("prev")
    setClickedButton("prev")
    setTimeout(() => setClickedButton(null), 200)
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setDirection("next")
    setClickedButton("next")
    setTimeout(() => setClickedButton(null), 200)
    setPage((prev) => (prev + 1) % totalPages)
  }

  const visibleAnnouncements = () => {
    const start = page * cardsPerPage
    return announcementData.announcements.slice(start, start + cardsPerPage)
  }

  return (
    <div className="w-full mx-auto global-px py-16 sm:py-20 md:py-[112px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 leading-tight sm:leading-[160%] uppercase text-center sm:text-left">
          {announcementData.title}
        </h2>

        <div className="flex justify-center sm:justify-end gap-4 sm:gap-[18px]">
          <button
            onClick={handlePrevious}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center transition-colors ${clickedButton === "prev" ? "bg-highlight-500" : "bg-neutral-50"
              }`}
            aria-label="Previous announcement"
          >
            <ArrowLeft
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${clickedButton === "prev" ? "text-white" : "text-highlight-500"
                }`}
            />
          </button>

          <button
            onClick={handleNext}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center transition-colors ${clickedButton === "next" ? "bg-highlight-500" : "bg-neutral-50"
              }`}
            aria-label="Next announcement"
          >
            <ArrowRight
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${clickedButton === "next" ? "text-white" : "text-highlight-500"
                }`}
            />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="relative w-full overflow-hidden">
        <div
          key={`${page}-${cardsPerPage}`}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transform transition-transform duration-700 ease-out ${direction === "next"
            ? "translate-x-0 animate-slide-next"
            : direction === "prev"
              ? "translate-x-0 animate-slide-prev"
              : ""
            }`}
        >
          {visibleAnnouncements().map((announcement) => (
            <AnnouncementCard key={announcement.id} title={announcementData.title} announcement={announcement} />
          ))}
        </div>
      </div>
    </div>
  )
}
