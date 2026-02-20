'use client'

import Image from "next/image";
import { imgworks1, imgworks2, imgworks3, imgworks4, imgworks5, imgworks6 } from "../../public/imgassets/assets-img";
import { motion } from 'framer-motion'

const worksTitle = "Dashboard SaaS Task Management";
const worksDesc = "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.";
const listWorks = [
    {
        workTitle: worksTitle,
        worksImg: imgworks1,
        worksDesc: worksDesc
    }, {
        workTitle: worksTitle,
        worksImg: imgworks2,
        worksDesc: worksDesc
    }, {
        workTitle: worksTitle,
        worksImg: imgworks3,
        worksDesc: worksDesc
    }, {
        workTitle: worksTitle,
        worksImg: imgworks4,
        worksDesc: worksDesc
    }, {
        workTitle: worksTitle,
        worksImg: imgworks5,
        worksDesc: worksDesc
    }, {
        workTitle: worksTitle,
        worksImg: imgworks6,
        worksDesc: worksDesc
    },
];

const Portfolio = () => {
    return (
        <section id="experience-section" className="relative flex flex-col w-full">

            <div id="experience-content" className="relative flex flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto py-10 md:py-20 gap-10">

                <div className="w-full flex flex-col items-center">
                    <p className="text-md md:text-lg text-primary-200">PORTFOLIO</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">SELECTED WORK</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
                    {listWorks.map((works, i) => (
                        <motion.div
                            key={i}
                            className="group relative flex flex-col w-full gap-4 md:gap-6 cursor-pointer"
                            initial="initial"
                            whileHover="hover"
                        >
                            <div className="relative overflow-hidden rounded-3xl">
                                <Image
                                    src={works.worksImg}
                                    width={381}
                                    height={284}
                                    alt={works.workTitle}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-xl md:text-display-xs font-bold">
                                    {works.workTitle}
                                </span>
                                <span className="text-sm md:text-md text-neutral-400">
                                    {works.worksDesc}
                                </span>
                            </div>

                            <motion.div
                                variants={{
                                    initial: { opacity: 0, scale: 0.8, x: "-50%", y: "-50%" },
                                    hover: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
                                }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute bottom-15 left-1/2 flex w-25 h-25 rounded-full items-center justify-center bg-white text-lg font-bold text-black shadow-xl z-10"
                            >
                                VISIT
                            </motion.div>

                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Portfolio;