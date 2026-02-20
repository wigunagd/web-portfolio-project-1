'use client'

import Image from "next/image";
import { iconGreenStar1 } from "../../public/imgassets/assets-img";
import { useCallback, useEffect, useState } from "react";

const faqList = [
    {
        title: "What technologies do you specialize in?",
        question: "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications."
    }, {
        title: "Do you work on both design and development?",
        question: "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience."
    }, {
        title: "Can you optimize an existing website for better performance?",
        question: "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring."
    }, {
        title: "Do you take freelance or contract-based projects?",
        question: "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!"
    }, {
        title: "How do you approach a new project?",
        question: "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow."
    }, {
        title: "How can we collaborate?",
        question: "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!"
    },
];

const FAQ = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    const checkMobile = useCallback(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [checkMobile]);

    if (!mounted) return null;

    return (
        <section id="experience-section" className="relative flex flex-col w-full">

            <div id="experience-content" className="relative flex flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto py-10 md:py-20 gap-10">

                <div className="w-full flex flex-col items-center">
                    <p className="text-md md:text-lg text-primary-200">FAQ</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">FREQUENTLY ASKED QUESTIONS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full">

                    {
                        faqList.map((faq, i) => (

                            <div key={i}
                                className={`flex flex-col w-full gap-3xl py-10 
                                ${i < faqList.length - (isMobile ? 1 : 2)
                                        ? 'border-b'
                                        : ''
                                    }
                            `}>
                                <div
                                    className={`flex flex-col w-full h-full gap-3xl md:pr-10  
                            ${(i % 2 === 0 && ('md:border-r'))}
                            ${(i % 2 !== 0 && ('md:pl-10'))}
                            `}>
                                    <div className="flex gap-lg">
                                        <Image src={iconGreenStar1} width={32} height={32} alt={`icon star green `} className="w-6 h-6 md:w-8 md:h-8" />
                                        <span className="text-lg md:text-display-xs font-bold">{faq.title}</span>
                                    </div>
                                    <span className="text-sm md:text-md text-neutral-400">{faq.question}</span>
                                </div>
                            </div>

                        ))
                    }


                </div>

            </div>

        </section>
    )
}

export default FAQ;