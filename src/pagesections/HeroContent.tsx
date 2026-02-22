'use client'

import Image from "next/image";
import { heroCoverImg, heroCoverImgGradient, heroManImg, imgTetris1, iconStar, logoLine, verticalLine } from "../../public/imgassets/assets-img";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { animate_fadeIn, animate_slideUp, animate_slideLeft, animate_slideRight, animate_verticalLine } from "./a_aranimation";

const MotionButton = motion(Button);

const HeroContent = () => {

    const verticalLineVar = animate_verticalLine;
    const slideLeftVar = animate_slideLeft;
    const slideRightVar = animate_slideRight;
    const fadeInVar = animate_fadeIn;
    const slideUpVar = animate_slideUp;

    return (
        <>
            <motion.div
                variants={verticalLineVar}
                initial="initialState"
                animate="animateState"
                style={{ originY: 0 }}
                id="verical-line-div"
                className="absolute flex flex-row w-full items-start md:gap-80 gap-30"
            >
                <Image id="line-1" src={verticalLine} width={1} height={875} alt="v-line" className="absolute mt-0 ml-[45.54%] md:ml-[26.04%]" />
                <Image id="line-2" src={verticalLine} width={1} height={875} alt="v-line" className="absolute mt-20 md:mt-0 ml-[70.73%] md:ml-[49.09%]" />
            </motion.div>

            <div className="relative flex md:flex-row flex-col md:mt-0 mt-20 pb-9.5 justify-center items-center">

                <motion.div
                    variants={slideRightVar}
                    initial="initialState"
                    animate="animateState"
                    className="md:absolute flex flex-col w-full md:max-w-296 z-5 mx-auto"
                >
                    <div className="flex flex-col md:max-w-201.75 z-5 gap-2.25 md:px-0 md:py-0 px-4 py-10">
                        <p className="flex gap-2.25"><Image src={logoLine} alt="Logo-line" width={24} height={0} /> Hi, I am Edwin Anderson Frontend Developer</p>
                        <p className="md:text-display-4xl text-display-lg font-extrabold text-gray-25">BUILDING FAST & <span className="text-primary-200">INTERACTIVE</span> WEB EXPERIENCES.</p>
                        <p className="text-lg text-neutral-400 max-w-149.25">Bridging creativity and functionality to deliver stunning, user-friendly web applications</p>
                        <MotionButton
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            variant={'default'}
                            className="rounded-full w-full md:max-w-75 md:h-14 h-12 shadow-green-glow">
                            HIRE ME
                        </MotionButton>
                    </div>
                </motion.div>

                <div className="relative flex w-full flex-col justify-between items-center md:items-end overflow-x-hidden">
                    <Image src={imgTetris1} alt="tetris-hero" width={138} height={92} className="absolute md:w-34.5 md:h-23 w-[103.5px] h-17.25 md:bottom-0 bottom-38.75 left-0 z-5" />

                    <div className="relative flex md:w-165.25 md:h-220.25 w-full h-128.25 items-end justify-center">

                        <motion.div
                            variants={slideUpVar}
                            initial="initialState"
                            animate="animateState"
                            className="absolute right-0 top-0 md:w-79 md:h-216 w-51.25 h-full bg-primary-200"
                        />

                        <motion.div
                            variants={fadeInVar}
                            initial="initialState"
                            animate="animateState"
                            className="absolute w-full h-full grayscale object-cover"
                        >
                            <Image src={heroManImg} alt="hero-man" width={661} height={881} className="absolute w-full h-full grayscale object-cover" />
                        </motion.div>

                        <motion.div
                            variants={slideUpVar}
                            initial="initialState"
                            animate="animateState"
                            className="absolute right-0 top-0 md:w-79 md:h-216 w-51.25 h-full opacity-40 object-cover"
                        >
                            <Image src={heroCoverImg} alt="hero-cover" width={316} height={864} className="absolute right-0 top-0 md:w-79 md:h-216 w-51.25 h-full opacity-40 object-cover" />
                        </motion.div>

                        <Image src={heroCoverImgGradient} alt="hero-gradient" width={661} height={881} className="absolute w-full h-full grayscale" />

                        <motion.div
                            variants={slideLeftVar}
                            initial="initialState"
                            animate="animateState"
                            suppressHydrationWarning
                            id="ratingbox"
                            className="w-full rounded-3xl gap-md p-2xl mb-9.75 md:mb-22.75 z-5 h-34.5 md:h-44.5 max-w-87.25 md:max-w-79 md:bottom-22.75 bottom-0 bg-background border">
                            <span className="text-display-xs md:text-display-xl font-bold">5.0</span>
                            <span className="flex">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Image key={i} src={iconStar} alt={`star-${i}`} width={32} height={32} className="w-[24] h-[24] md:w-[32] md:h-[32]" />
                                ))}
                            </span>
                            <span className="text-md md:text-xl font-semibold">Many Client Trust with me</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroContent;