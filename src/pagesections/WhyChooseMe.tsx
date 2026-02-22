'use client'

import Image from "next/image";
import { iconGreenStar1, iconGreenStar2, imgPortraitBlankSm, imgPortraitSm } from "../../public/imgassets/assets-img";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { animate_containerStagger, animate_fadeInScaleUp } from "./a_aranimation";

const me = [
    "React Expert",
    "Precise Website Implementation",
    "TypeScript Proficiency",
    "Clean, Maintainable Code",
    "Responsive Website Development",
    "UI Design Proficiency (Figma)"
];

const other = [
    "Basic React Knowledge",
    "Inconsistent Design Translation",
    "Little to No TypeScript Knowledge",
    "Unstructured Code",
    "Inconsistent Responsiveness",
    "No Design Skills"
];

const containerStaggerVar = animate_containerStagger;
const fadeInScaleUpVar = animate_fadeInScaleUp;

const MotionButton = motion(Button);

const WhyChooseMe = () => {
    return (
        <section id="why-choose-me-section" className="relative flex flex-col w-full">

            <div id="why-choose-me-content" className="relative flex flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto py-10 md:py-20 gap-10">

                <motion.div
                    variants={fadeInScaleUpVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full flex flex-col items-center">
                    <p className="text-md md:text-lg text-primary-200">WORKING</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">WHY CHOOSE ME?</p>
                </motion.div>

                <motion.div
                    variants={containerStaggerVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }} 
                    className="w-full flex flex-col md:flex-row  gap-8 md:gap-20">

                    <motion.div
                        variants={fadeInScaleUpVar}
                        className="flex flex-col w-full md:w-1/2 gap-4xl items-center ">
                        <span className="text-xl md:text-display-sm">WORKING WITH ME</span>
                        <Image src={imgPortraitSm} width={80} height={80} alt="img-portrait-sm" className="w-15 h-15 md:w-20 md:h-20 rounded-full" />
                        <ul className="flex flex-col w-full text-md md:text-xl font-bold ">
                            {
                                me.map((v, i) => (
                                    <li className={`flex py-8 gap-4 items-center border-b ${i == me.length - 1 && ('md:border-0')}`} key={i}>
                                        <Image src={iconGreenStar1} width={32} height={32} alt={`icon star green ${i}`} className="w-6 h-6 md:w-8 md:h-8" />
                                        {v}
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={fadeInScaleUpVar}
                        className="flex flex-col w-full md:w-1/2 gap-4xl items-center ">
                        <span className="text-xl md:text-display-sm">ANOTHER TALENT</span>
                        <Image src={imgPortraitBlankSm} width={80} height={80} alt="img-portrait-blank-sm" className="w-15 h-15 md:w-20 md:h-20 rounded-full" />
                        <ul className="flex flex-col  w-full text-md md:text-xl text-neutral-400 ">
                            {
                                other.map((v, i) => (
                                    <li className={`flex py-8 gap-4 items-center border-b ${i == me.length - 1 && ('md:border-0')}`} key={i}>
                                        <Image src={iconGreenStar2} width={32} height={32} alt={`icon star green ${i}`} className="w-6 h-6 md:w-8 md:h-8" />
                                        {v}
                                    </li>
                                ))
                            }
                        </ul>

                    </motion.div>
                </motion.div>

                <MotionButton
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    variant={'default'}
                    className="rounded-full w-full md:max-w-60 md:h-14 h-12 shadow-green-glow"
                >HIRE ME</MotionButton>

            </div>

        </section>
    )
}

export default WhyChooseMe;