import { ArrowRight, ArrowUpRight } from "lucide-react"

const AboutUs = () => {
    return (
        <div className="relative w-full min-h-screen global-px mt-12 sm:mt-20 lg:mt-28">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-10 lg:gap-12">
                {/* Left Side */}
                <div className="leftSide w-full lg:w-[900px] py-6 sm:py-10 lg:py-[55px]">
                    <div className="text-sm sm:text-base text-primary-500 font-semibold font-family-helvetica uppercase mb-3 sm:mb-4 lg:mb-5">
                        About Us
                    </div>

                    <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extralight leading-[115%] tracking-tight text-black">
                        Innovating Finance for a Better Tomorrow.{" "}
                        <span className="font-medium text-primary-500">Empowering you</span> with smarter, future-ready banking.
                    </h2>

                    <p className="py-6 sm:py-8 lg:py-12 font-normal text-sm sm:text-base lg:text-md font-family-helvetica leading-[160%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>

                    <p className="font-family-helvetica font-normal text-sm sm:text-base lg:text-md leading-[160%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>

                    <button
                        className="mt-8 sm:mt-12 lg:mt-16 inline-flex items-center px-4 py-3 gap-2
                            bg-secondary-500 hover:bg-transparent 
                            border border-secondary-500 rounded-sm 
                            text-white text-sm hover:text-secondary-500 font-medium 
                            shadow-lg transition group hover:translate-x-0.5"
                    >
                        More About Us
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:hidden" />
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 hidden group-hover:inline" />
                    </button>
                </div>

                {/* Right Side */}
                <div className="rightSide w-full lg:w-[734px]">
                    <div className="flex flex-row gap-4 sm:gap-5 lg:gap-7">
                        <div className="overflow-hidden rounded-lg flex-[1.77]">
                            <img
                                src="/images/about1.png"
                                alt="About Us"
                                className="h-[200px] sm:h-[280px] lg:h-[395px] w-full object-cover transition-transform duration-200 ease-in hover:scale-115"
                            />
                        </div>
                        <div className="overflow-hidden rounded-lg flex-1">
                            <img
                                src="/images/about2.png"
                                alt="About Us"
                                className="h-[200px] sm:h-[280px] lg:h-[395px] w-full object-cover transition-transform duration-200 ease-in hover:scale-115"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 sm:gap-5 lg:gap-7 mt-4 sm:mt-6 lg:mt-9">
                        <div className="overflow-hidden rounded-lg flex-1">
                            <img
                                src="/images/about3.png"
                                alt="About Us"
                                className="h-[200px] sm:h-[280px] lg:h-[395px] w-full object-cover transition-transform duration-200 ease-in hover:scale-115"
                            />
                        </div>
                        <div className="overflow-hidden rounded-lg flex-[1.77]">
                            <img
                                src="/images/about4.png"
                                alt="About Us"
                                className="h-[200px] sm:h-[280px] lg:h-[395px] w-full object-cover transition-transform duration-200 ease-in hover:scale-115"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
