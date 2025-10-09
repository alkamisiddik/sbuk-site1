import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const slides = [
    { id: 1, src: '/images/home1.png', alt: 'Home 1' },
    { id: 2, src: '/images/home2.png', alt: 'Home 2' },
    { id: 3, src: '/images/home3.png', alt: 'Home 3' },
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // 4s per slide
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-dvh -mt-[var(--header-Height)]">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full"
                >
                    {/* The image */}
                    <img
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient overlay - responsive opacity and direction */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#21409AD6] from-0% to-[84%] md:from-[#21409AD6] md:to-[84%]" />
                </motion.div>
            </AnimatePresence>

            {/* Navigation dots (bottom center) */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[35.39px] left-1/2 -translate-x-1/2 flex flex-row gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? "bg-secondary-500 scale-110" 
                                : "bg-transparent border border-secondary-500 hover:bg-secondary-500/30"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}