import { CarouselProps } from "@/lib/types";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Carousel({ slides }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // 4s per slide
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    if (!slides?.length) return null;

    return (
        <div className="relative w-full h-dvh -mt-[var(--header-Height)]">
            {/* Slides */}
            <AnimatePresence>
                <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* The image */}
                    <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#21409AD6] from-0% to-[84%]" />
                </motion.div>
            </AnimatePresence>


            {/* Navigation dots (right middle) */}
            <div className="absolute bottom-[35.39px] left-1/2 -translate-x-1/2 flex flex-row gap-2 z-5">
                {slides.map((_, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-opacity ${index === currentSlide ? "bg-secondary-500" : "bg-transparent border border-secondary-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}