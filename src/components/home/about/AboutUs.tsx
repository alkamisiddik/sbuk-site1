
import { AboutUsProps } from "@/library/types";
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function AboutUs({ aboutUs }: { aboutUs: AboutUsProps }) {
    return (
        <div className="relative w-full global-px mt-0 sm:mt-10 lg:mt-28">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-10 lg:gap-12">
                {/* Left Side */}
                <div className="leftSide w-full lg:w-[900px] py-6 sm:py-10 lg:py-[55px]">
                    <div className="text-sm sm:text-base text-primary-500 font-semibold font-family-helvetica uppercase mb-3 sm:mb-4 lg:mb-5">
                        {aboutUs.title}
                    </div>

                    <h2 className="font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-thin leading-[115%] tracking-tight text-black">
                        {aboutUs.finance.main}{" "}
                        <span className="font-medium text-primary-500">{aboutUs.finance.highlight}</span>
                        {aboutUs.finance.suffix}
                    </h2>

                    <p className="py-6 sm:py-8 lg:py-12 font-normal text-sm sm:text-base lg:text-md font-family-helvetica leading-[160%]">
                        {aboutUs.para1}
                    </p>

                    <p className="font-family-helvetica font-normal text-sm sm:text-base lg:text-md leading-[160%]">
                        {aboutUs.para2}
                    </p>


                    <button
                        className="font-family-helvetica mt-8 sm:mt-12 lg:mt-16 inline-flex items-center px-4 py-3 gap-2
                            bg-secondary-500 hover:bg-secondary-500/[0.16] 
                            border border-secondary-500 rounded-sm 
                            text-white text-sm hover:text-secondary-500 font-medium 
                            shadow-lg transition group hover:translate-x-0.5"
                    >
                        {aboutUs.buttonText}
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:hidden" />
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 hidden group-hover:inline" />
                    </button>

                </div>

                {/* Right Side */}
                <div className="rightSide md:order-3 w-full lg:w-[734px]">
                    {/* First Row */}
                    <div className="flex flex-row gap-4 sm:gap-5 lg:gap-7">
                        {aboutUs.aboutUsImages.slice(0, 2).map((image: { src: string; alt: string }, index: number) => (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-lg ${index === 0 ? "flex-[1.77]" : "flex-1"
                                    }`}
                            >
                                <div className="relative h-[200px] sm:h-[280px] lg:h-[395px]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                        className="object-cover transition-transform duration-200 ease-in hover:scale-115"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-row gap-4 sm:gap-5 lg:gap-7 mt-4 sm:mt-6 lg:mt-9">
                        {aboutUs.aboutUsImages.slice(2, 4).map((image: { src: string; alt: string }, index: number) => (
                            <div
                                key={index + 2}
                                className={`overflow-hidden rounded-lg ${index === 0 ? "flex-1" : "flex-[1.77]"
                                    }`}
                            >
                                <div className="relative h-[200px] sm:h-[280px] lg:h-[395px]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                        className="object-cover transition-transform duration-200 ease-in hover:scale-115"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}