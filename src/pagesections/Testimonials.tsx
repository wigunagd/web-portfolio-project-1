'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { allTestimonials } from "./TestimonialsArray";
import { iconStar } from "../../public/imgassets/assets-img";
import { animate_fadeInScaleUp } from "./a_aranimation";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const fadeInScaleUpVar = animate_fadeInScaleUp;
const MotionButton = motion(Button);

const Testimonials = () => {
    const [mounted, setMounted] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right"): void => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left"
                ? -current.offsetWidth
                : current.offsetWidth;

            current.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft <= 1);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // [CHANGE: Effect 2 - Only handles initial scroll check AFTER mount]
    useEffect(() => {
        if (mounted) {
            handleScroll();
        }
    }, [mounted, handleScroll]);

    if (!mounted) return null;

    return (
        <section id="experience-section" className="relative flex flex-col w-full overflow-hidden">

            <div id="experience-content" className="relative flex flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto py-10 md:py-20 gap-10">

                <motion.div
                    variants={fadeInScaleUpVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full flex flex-col items-center">
                    <p className="text-md md:text-lg text-primary-200">TESTIMONIALS</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">PEOPLE SAYS ABOUT ME</p>
                </motion.div>

                <div
                    id="grid-flow"
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="grid grid-flow-col grid-rows-3 md:grid-rows-2 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar w-full md:max-w-[1080px]"
                >

                    {
                        allTestimonials.map((t, i) => {
                            return (
                                <div key={i} className="flex flex-col w-[calc(100vw-32px)] md:w-[532px] rounded-3xl border p-6 md:p-8 md:gap-lg snap-start shrink-0">
                                    <div className="flex flex-col md:flex-row md:justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-md md:text-display-xs">{t.name}</span>
                                            <span className="text-sm md:text-lg text-neutral-400">{t.title}</span>
                                        </div>
                                        <Image src={t.logoSrc} alt={t.company} />
                                    </div>
                                    <div className="flex">
                                        {
                                            [...Array(t.stars)].map((_, i) => (
                                                <Image key={i} src={iconStar} width={32} height={32} alt="" className="w-5 h-5 md:w-8 md:h-8" />
                                            ))
                                        }
                                    </div>
                                    <p className="text-neutral-400 text-sm md:text-md mt-4">{`"${t.comment}"`}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex gap-4">
                    <MotionButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        variant={'ghost'}
                        id="btn-scroll-left"
                        type="button"
                        onClick={() => scroll('left')}
                        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border hover:bg-neutral-900">
                        <span className={`text-xl md:text-2xl ${!isAtStart && ('text-primary-200')}`}>←</span>
                    </MotionButton>
                    <MotionButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        variant={'ghost'}
                        id="btn-scroll-right"
                        type="button"
                        onClick={() => scroll('right')}
                        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border hover:bg-neutral-900">
                        <span className={`text-xl md:text-2xl ${!isAtEnd && ('text-primary-200')}`}>→</span>
                    </MotionButton>
                </div>

            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

        </section>
    )
}

export default Testimonials;