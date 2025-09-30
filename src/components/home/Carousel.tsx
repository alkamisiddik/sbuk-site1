import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const slides = [
    { id: 1, src: '/images/home1.png' },
    { id: 2, src: '/images/home2.png' },
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
        <div className="relative w-full h-dvh">
            {/* Slides */}
            <AnimatePresence>
                <motion.img
                    key={slides[currentSlide].id}
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* <img src={'/images/home1.png'} alt="image" /> */}

            {/* Navigation dots (right middle) */}
            <div className="absolute right-15 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}