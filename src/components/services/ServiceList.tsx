import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { AnimatedQuote } from "./Quote"
import { ServiceListProps } from "@/lib/types"

export default function ServiceList({ serviceList }: ServiceListProps) {
  return (
    <section className="global-px mt-16 sm:mt-20 lg:mt-28">
      <div className="flex flex-col items-center gap-2.5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 itemce w-full gap-8 sm:gap-10 lg:gap-12">
          {serviceList.services.map((section) => (
            <nav
              key={section.title}
              aria-labelledby={section.title.replace(/\s+/g, "-").toLowerCase()}
              className="flex flex-col items-center md:items-start gap-4 sm:gap-5 lg:gap-6 py-4 bg-white"
            >
              <h2
                id={section.title.replace(/\s+/g, "-").toLowerCase()}
                className="text-lg sm:text-xl lg:text-[22px] font-medium leading-[120%] uppercase text-neutral-900"
              >
                {section.title}
              </h2>
              <ul className="flex flex-col items-center md:items-start gap-4 sm:gap-5 lg:gap-6 w-full">
                {section.items.map((item) => (
                  <li key={item.label} className="flex items-center">
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-3 sm:gap-4 hover:underline hover:decoration-secondary-500 hover:underline-offset-8 hover:-translate-y-[2px] transition-all duration-300"
                    >
                      <span className="opacity-70 group-hover:opacity-100 font-family-helvetica font-normal text-sm sm:text-base lg:text-md leading-[160%]">
                        {item.label}
                      </span>
                      <ArrowUpRight className="translate-x-[-4px] transition-all duration-100 group-hover:translate-x-0 text-primary-500 group-hover:text-secondary-500 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20 lg:mt-28 h-auto min-h-[400px] sm:min-h-[500px] lg:h-[570px] w-full pt-[22px] md:px-4 sm:px-8 lg:pl-[80px] lg:pr-0">
        <AnimatedQuote quote={serviceList.quote} />
      </div>
    </section>
  )
}
