import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'

const MiddleComponent = () => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center global-px h-full">
            <div className="max-w-5xl">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[64px] leading-[112%] text-white uppercase">
                    EFFORTLESS Global <br />
                    <span className='text-highlight-500'>TRADE FUNDING</span>
                </h1>
                
                <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-[29px]">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-white leading-[160%] max-w-2xl">
                        Our solutions help UK businesses trade confidently with flexible, risk-managed finance. <br className="hidden sm:block" />
                        Whether you buy or sell overseas, we're here to help to support every step
                    </p>
                </div>
                
                <button className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-[29px] inline-flex items-center justify-center gap-2 
                         py-2 px-3 sm:py-2.5 sm:px-3.5 md:py-3 md:px-4 
                         w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] lg:min-w-[216px]
                         bg-secondary-500 hover:bg-transparent 
                         hover:border hover:border-highlight-500 rounded-sm 
                         text-xs sm:text-sm text-white hover:text-amber-500 font-medium 
                         shadow-lg transition-all duration-300 group hover:translate-x-0.5">
                    <span>Explore Trade Finance</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:hidden transition-all" />
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 hidden group-hover:inline transition-all" />
                </button>
            </div>
        </div>
    )
}

export default MiddleComponent