import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Indie Hacker",
    subtitle: "The indie hacker",
    image: "/images/finance1.jpg",
  },
  {
    title: "Startup",
    subtitle: "The startup",
    image: "/images/finance2.jpg",
  },
  {
    title: "Enterprise",
    subtitle: "The enterprise",
    image: "/images/finance3.jpg",
  },
]

export default function Finance() {
  return (
    <div className="w-full max-w-[1680px] max-h-[910px] bg-primary-500 rounded-[20px] ml-30 mr-30 mt-28 pl-[46px] pt-[65.61px]">
      {/* Header */}
      <header className="flex items-center justify-between mb-16">
        <div className="pt-[13px] pb-[13px]">
          <h1 className="font-helvetica text-white text-5xl font-medium leading-[124%]">It has never been easier to manage your finances</h1>
        </div>
        <div className="ml-[308px]">
          <p className="text-title1-regular leading-[160%] text-white">The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank</p>
          <Button className="bg-[#AB782B] hover:bg-[#8F6323] text-white rounded gap-2 mt-4 px-6 py-6 text-base font-medium">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-gray-200 rounded-2xl overflow-hidden aspect-[507/543] mb-[78.39px]">
            {/* Project Image */}
            <div className="relative w-full h-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              {/* Divider Line */}
              <div className="w-full h-px bg-white/20 mb-6" />

              {/* Title and Subtitle */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-white/80 text-sm">{project.subtitle}</p>
              </div>

              {/* Get Started Button */}
              <Button variant="ghost" className="text-white hover:bg-white/10 p-0 h-auto font-normal text-sm gap-1">
                Get Started
                <ArrowUpRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
