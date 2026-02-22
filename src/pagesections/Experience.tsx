'use client'

import Image from "next/image";
import { imgTetris3, logoCompany01Upwork, logoCompany02Trello, logoCompany03Zoom, logoCompany04Zapier } from "../../public/imgassets/assets-img";
import { animate_fadeInScaleUp } from "./a_aranimation";
import { motion } from 'framer-motion';
import { TimelineItem } from "./ExperienceTimelineItem";

const description = "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks.";

const experiences = [
    { 
        id: 1, 
        duration: "2020 - 2022", 
        role: "Frontend Developer", 
        company: "Upwork", 
        logo: logoCompany01Upwork, 
        description 
    },
    { 
        id: 2, 
        duration: "2020 - 2022", 
        role: "Frontend Developer", 
        company: "Trello", 
        logo: logoCompany02Trello, 
        description 
    },
    { 
        id: 3, 
        duration: "2020 - 2022", 
        role: "Frontend Developer", 
        company: "Zoom", 
        logo: logoCompany03Zoom, 
        description 
    },
    { 
        id: 4, 
        duration: "2020 - 2022", 
        role: "Frontend Developer", 
        company: "Zapier", 
        logo: logoCompany04Zapier, 
        description 
    },
];

const fadeInScaleUpVar = animate_fadeInScaleUp;

const Experience = () => {
    return (
        <section id="experience-section" className="relative flex flex-col w-full">
            <div id="experience-content" className="relative flex flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto py-10 md:py-20 gap-10">

                <motion.div
                    variants={fadeInScaleUpVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full flex flex-col items-center">
                    <p className="text-md md:text-lg text-primary-200">EXPERIENCE</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">PROFESIONAL WORK</p>
                </motion.div>

                <motion.div
                    variants={fadeInScaleUpVar}
                    initial="initialState"
                    whileInView="animateState"
                    viewport={{ once: true, amount: 0.2 }} 
                className="flex flex-col grid-cols-9 p-2 mx-auto md:grid z-5">
                    {experiences.map((exp, index) => (
                        <TimelineItem
                        key={exp.id}
                            data={exp}
                            number={index + 1}
                            isReversed={index % 2 !== 0}
                            isFirst={index === 0}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
                </motion.div>

                <Image src={imgTetris3} alt="img-tetris-experience" width={92} height={138}
                    className="absolute bottom-0 right-0 w-17.25 h-[103.5px] md:w-23 md:h-34.5" />
            </div>
        </section>
    );
};

export default Experience;