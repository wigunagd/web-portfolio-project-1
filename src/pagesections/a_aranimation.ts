import { Variants } from "framer-motion";

const animationDuration = 0.5;
const offsetGeserFrom = 100;

export const animate_verticalLine: Variants = {
    initialState: { scaleY: 0 },
    animateState: {
        scaleY: 1,
        transition: { duration: animationDuration, ease: 'circOut' as const }
    }
};

export const animate_slideRight: Variants = {
    initialState: { x: -offsetGeserFrom, opacity: 0 },
    animateState: {
        x: 0,
        opacity: 1,
        transition: { duration: animationDuration, ease: 'easeOut' as const }
    }
};

export const animate_slideLeft: Variants = {
    initialState: { x: offsetGeserFrom, opacity: 0 },
    animateState: {
        x: 0,
        opacity: 1,
        transition: { duration: animationDuration, ease: 'easeOut' as const }
    }
};

export const animate_fadeIn: Variants = {
    initialState: { opacity: 0 },
    animateState: {
        opacity: 1,
        transition: { duration: animationDuration, ease: 'easeInOut' as const }
    }
};

export const animate_slideUp: Variants = {
    initialState: {
        y: offsetGeserFrom,
        opacity: 0
    },
    animateState: {
        y: 0,
        opacity: 1,
        transition: { duration: animationDuration, ease: 'easeInOut' as const }
    }
};

export const animate_slideDown: Variants = {
    initialState: {
        y: -offsetGeserFrom,
        opacity: 0
    },
    animateState: {
        y: 0,
        opacity: 1,
        transition: { duration: animationDuration, ease: 'easeInOut' as const }
    }
};

export const animate_containerStagger: Variants = {
    initialState: {
        opacity: 0
    },
    animateState: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

export const animate_fadeInScaleUp: Variants = {
    initialState: {
        opacity: 0,
        scale: 0.7,
        y: 20
    },
    animateState: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: animationDuration,
            ease: "easeOut" as const
        }
    }
};

export const animate_progress: Variants = {
    initialState: { 
        scaleX: 0,
        originX: 0
    },
    animateState: {
        scaleX: 1,
        transition: { duration: animationDuration, ease: 'circOut' as const }
    }
};