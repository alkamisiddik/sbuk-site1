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
    <div className="w-full mx-auto global-px py-[112px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-medium text-neutral-900 leading-[160%] uppercase font-family-helvetica">
          ANNOUNCEMENTS
        </h2>
        <div className="flex gap-[18px]">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-sm bg-neutral-50 flex items-center justify-center transition-colors"
            aria-label="Previous announcement"
          >
            <ArrowLeft className="w-6 h-6 text-highlight-500" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-sm bg-highlight-500 flex items-center justify-center transition-colors"
            aria-label="Next announcement"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </div>
  )
}


