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
        <div className="relative w-full h-dvh -mt-[var(--header-Height)]">
            {/* Slides */}
            <AnimatePresence>
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
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#21409AD6] from-0% to-[84%]" />
                </motion.div>
            </AnimatePresence>


            {/* Navigation dots (right middle) */}
            <div className="absolute bottom-[35.39px] left-1/2 -translate-x-1/2 flex flex-row gap-2">
                {slides.map((_, index) => (
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