'use client'

import Image from "next/image";
import { iconMonitor } from "../../public/imgassets/assets-img";
import { motion } from 'framer-motion';
import { animate_containerStagger, animate_fadeInScaleUp, animate_slideRight } from "./a_aranimation";

const Service = () => {

    const slideRightVar = animate_slideRight;
    const containerStaggerVar = animate_containerStagger;
    const fadeInScaleUpVar = animate_fadeInScaleUp;

    return (
        <section id="service-section" className="flex w-full max-w-360 overflow-hidden">
            <div className="flex flex-col w-full justify-between md:max-w-296 mx-auto py-10 md:py-30 lg:px-0 md:px-6 px-[16px] gap-16">

                <motion.div
                    variants={slideRightVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col md:flex-row gap-xl">
                    <div className="flex flex-col w-full md:w-1/2 gap-xl">
                        <p className="text-md md:text-lg font-medium text-primary-200">SERVICE</p>
                        <p className="text-display-md md:text-display-lg font-extrabold md:max-w-77.25 max-w-50 text-white">MY SERVICE EXPERTISE</p>
                    </div>
                    <div className="flex w-full md:w-1/2 md:text-right text-md md:text-xl md:justify-end">
                        <span className="md:max-w-126 text-neutral-400">Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerStaggerVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col md:flex-row gap-10">
                    <motion.div
                        variants={fadeInScaleUpVar}
                        className="flex flex-col w-full md:max-w-[373.33px] text-neutral-400 gap-3xl">
                        <span className="border-b h-14.5 text-md md:text-xl font-semibold">01</span>
                        <Image src={iconMonitor} alt="icon-monitor" width={32} height={32} />
                        <span className="text-xl md:text-display-sm font-semibold text-white">Custom Website Development</span>
                        <span className="text-md md:text-xl">Building responsive, fast, and scalable websites tailored to your needs.</span>
                    </motion.div>

                    <motion.div
                        variants={fadeInScaleUpVar}
                        className="flex flex-col w-full md:max-w-[373.33px] text-neutral-400 gap-3xl">
                        <span className="border-b h-14.5 text-md md:text-xl font-semibold">02</span>
                        <Image src={iconMonitor} alt="icon-monitor" width={32} height={32} />
                        <span className="text-xl md:text-display-sm font-semibold text-white">Web Performance Optimization</span>
                        <span className="text-md md:text-xl">Enhancing website speed, SEO, and overall performance for better.</span>
                    </motion.div>

                    <motion.div
                        variants={fadeInScaleUpVar}
                        className="flex flex-col w-full md:max-w-[373.33px] text-neutral-400 gap-3xl">
                        <span className="border-b h-14.5 text-md md:text-xl font-semibold">03</span>
                        <Image src={iconMonitor} alt="icon-monitor" width={32} height={32} />
                        <span className="text-xl md:text-display-sm font-semibold text-white">Website Maintenance & Debugging</span>
                        <span className="text-md md:text-xl">Fixing bugs, improving UI, and ensuring smooth performance over time.</span>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Service;