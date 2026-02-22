'use client'

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "framer-motion";

const AnimatedNumber = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const display = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            // count.set(value);

            const c = animate(count, value, {
                duration: 1.5,
                ease: 'linear'
            });

            return () => c.stop();

        }
    }, [value, isInView, count]);

    return (
        <motion.span ref={ref}>{display}</motion.span>
    )
}

export default AnimatedNumber;