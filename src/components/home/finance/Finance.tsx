import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/shadcn-ui/button"
import FinanceCard from "./FinanceCard"
import { FinanceProps } from "@/library/types"

export default function Finance({ finances }: { finances: FinanceProps }) {
  return (
    <div className="w-full global-px pt-20 md:pt-28">
      <div className="w-full bg-primary-500 rounded-[20px] p-4 pb-10 md:pb-[78.39px] md:pl-[46px] md:pr-16 pt-10 md:pt-[65.61px]">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-5 md:mb-[77px] gap-6 md:gap-0">
          <div className="w-full md:w-[752px] md:py-[13px]">
            <h1 className="text-white text-2xl md:text-5xl font-medium leading-[124%]">{finances.leftTitle}</h1>
          </div>
          <div className="w-full md:w-[510px]">
            <p className="text-title1-regular leading-[160%] text-white font-family-helvetica">{finances.rightText}</p>
            <Button className="font-family-helvetica h-13 w-[147px] bg-secondary-500 text-white rounded-xs gap-2 mt-4 px-6 py-3 text-base font-medium hover:bg-secondary-500/[0.16] hover:border hover:border-secondary-500 hover:text-secondary-500 group">
              {finances.buttonText}
              <ArrowUpRight className="w-6 h-6 group-hover:hidden" />
              <ArrowRight className="w-6 h-6 hidden group-hover:inline" />
            </Button>
          </div>
        </header>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {finances.financeCards.map((project, index) => (
            <FinanceCard key={index} financeCard={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
