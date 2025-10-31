"use client"
import { useState } from "react"
import ExpandableCard from "./ExpandableCard"
import { KeyServicesProps } from "@/library/types"

export default function KeyServices({ keyServices }: KeyServicesProps) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="relative w-full global-px py-[68px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
        <div className="font-family-helvetica font-bold text-3xl md:text-4xl lg:text-5xl leading-[132%]">{keyServices.title}</div>
        <div className="w-full lg:w-[550px] text-justify font-family-helvetica font-normal text-sm md:text-base">
          {keyServices.text}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6 mx-auto pt-8 lg:pt-12 pb-2">
        {keyServices.cards.map((card) => (
          <ExpandableCard key={card.id} {...card} active={active} setActive={setActive} />
        ))}
      </div>
    </div>
  )
}