"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import AnnouncementCard from "./AnnouncementCard"

const announcements = [
  {
    id: 1,
    image: "/images/announcement1.jpg",
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hoverPara: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ],
  },
  {
    id: 2,
    image: "/images/announcement2.png",
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hoverPara: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ]
  },
  {
    id: 3,
    image: "/images/announcement3.png",
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hoverPara: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ]
  },
  {
    id: 4,
    image: "/images/announcement1.jpg",
    title: "Id 4 - Lorem Ipsum is simply dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hoverPara: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ],
  },
  {
    id: 5,
    image: "/images/announcement2.png",
    title: "Id 5 - Lorem Ipsum is simply dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hoverPara: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ]
  },
  {
    id: 6,
    image: "/images/announcement3.png",
    title: "Id 6 - Lorem Ipsum is simply dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hoverPara: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ]
  },
]

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)
  const [clickedButton, setClickedButton] = useState<"prev" | "next" | null>(null)

  const handlePrevious = () => {
    setDirection("prev")
    setClickedButton("prev")
    setTimeout(() => setClickedButton(null), 200)
    setCurrentIndex((prev) => {
      const newIndex = prev - 3
      return newIndex < 0 ? Math.max(announcements.length - 3, 0) : newIndex
    })
  }

  const handleNext = () => {
    setDirection("next")
    setClickedButton("next")
    setTimeout(() => setClickedButton(null), 200)
    setCurrentIndex((prev) => {
      const newIndex = prev + 3
      return newIndex >= announcements.length ? 0 : newIndex
    })
  }

  const visibleAnnouncements = announcements.slice(currentIndex, currentIndex + 3)

  return (
    <div className="w-full mx-auto global-px py-[112px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-medium text-neutral-900 leading-[160%] uppercase font-family-helvetica">
          ANNOUNCEMENTS
        </h2>
        <div className="flex gap-[18px]">
          <button
            onClick={handlePrevious}
            className={`w-12 h-12 rounded-sm flex items-center justify-center transition-colors ${clickedButton === "prev"
                ? "bg-highlight-500"
                : "bg-neutral-50"
              }`}
            aria-label="Previous announcement"
          >
            <ArrowLeft
              className={`w-6 h-6 transition-colors ${clickedButton === "prev" ? "text-white" : "text-highlight-500"
                }`}
            />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`w-12 h-12 rounded-sm flex items-center justify-center transition-colors ${clickedButton === "next"
                ? "bg-highlight-500"
                : "bg-neutral-50"
              }`}
            aria-label="Next announcement"
          >
            <ArrowRight
              className={`w-6 h-6 transition-colors ${clickedButton === "next" ? "text-white" : "text-highlight-500"
                }`}
            />
          </button>
        </div>
      </div>

      {/* Cards with Slide Transition */}
      <div className="relative w-full overflow-hidden">
        <div
          key={currentIndex} // this resets the animation on each change
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform transition-transform duration-700 ease-out ${direction === "next"
            ? "translate-x-0 animate-slide-next"
            : direction === "prev"
              ? "translate-x-0 animate-slide-prev"
              : ""
            }`}
        >
          {visibleAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </div>
    </div>
  )
}


