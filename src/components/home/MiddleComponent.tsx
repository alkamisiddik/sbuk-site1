import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'

const MiddleComponent = () => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center max-w-7/8 mx-auto">
            <div className="font-[700] text-[64px] text-white uppercase">
                EFFORTLESS Global <br /><span className='text-amber-400'>TRADE FUNDING</span>
            </div>
            <div className="mt-3">
                <p className="text-[16px] font-[500] text-white leading-[160%]">
                    Our solutions help UK businesses trade confidently with flexible, risk-managed finance. <br />
                    Whether you buy or sell overseas, we're here to help to support every step
                </p>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 w-65
                     bg-highlight-500 hover:bg-transparent 
                     border border-highlight-500 rounded-sm 
                     text-white hover:text-amber-500 font-medium 
                     shadow-lg transition group hover:translate-x-0.5">
                Explore Trade Finance
                <ArrowUpRight className="w-6 h-6 group-hover:hidden" />
                <ArrowRight className="w-6 h-6 hidden group-hover:inline" />
            </button>
        </div>
    )
}

export default MiddleComponent