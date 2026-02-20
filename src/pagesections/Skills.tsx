import Image from "next/image";
import { imgskills01js, imgskills02css, imgskills03html, imgskills04jsexpress, imgskills05mongodb, imgskills06react, imgskills07typescript, imgskills08docker, verticalLine } from "../../public/imgassets/assets-img";

const skillsList = [
    {
        id: "imgskills01js",
        logoSrc: imgskills01js
    }, {
        id: "imgskills02css",
        logoSrc: imgskills02css
    }, {
        id: "imgskills03html",
        logoSrc: imgskills03html
    }, {
        id: "imgskills04jsexpress",
        logoSrc: imgskills04jsexpress
    }, {
        id: "imgskills05mongodb",
        logoSrc: imgskills05mongodb
    }, {
        id: "imgskills06react",
        logoSrc: imgskills06react
    }, {
        id: "imgskills07typescript",
        logoSrc: imgskills07typescript
    }, {
        id: "imgskills08docker",
        logoSrc: imgskills08docker
    },
];

const skillsPercentage = [
    {
        id: "React JS",
        percent: 50
    }, {
        id: "HTML",
        percent: 80
    }, {
        id: "Tailwind CSS",
        percent: 90
    }, {
        id: "Mongo DB",
        percent: 100
    }, {
        id: "Docker",
        percent: 70
    }, {
        id: "Javascript",
        percent: 90
    },
];

const Skills = () => {
    return (
        <section id="skills-section" className="relative flex flex-col w-full">

            <div id="skills-content" className="relative flex flex-col md:flex-row w-full items-center md:max-w-296 mx-auto py-10 md:py-30 md:px-32 lg:px-0 px-[16px] gap-10">

                <div className="flex flex-col w-full md:w-1/2 gap-14.5">
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-primary-200 text-md md:text-lg font-medium">SKILLS</p>
                        <p className="text-display-md md:text-display-2xl font-extrabold">SKILLS THAT BRING IDEAS TO LIFE</p>
                    </div>

                    <div className="w-full flex flex-wrap gap-[30.4px] max-w-87.5">
                        {
                            skillsList.map((s, i) => (
                                <div key={i}
                                    className="flex rounded-full border w-12 h-12 md:w-16 md:h-16 p-[4.8px] justify-center items-center">
                                    <Image src={s.logoSrc} alt={s.id} className="w-[38.4px] h-[38.4px] md:w-[51.2px] md:h-[51.2px]" />
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="flex flex-col w-full md:w-1/2 gap-3xl">
                    {
                        skillsPercentage.map((s, i) => (
                            <div key={i} className="w-full flex gap-4 md:gap-3xl">
                                <div className="relative w-4/5 h-[41.4px] md:h-16 flex items-center">
                                    <div className="w-full border"></div>
                                    <div
                                        className={`absolute flex left-0 h-[41.4px] md:h-16 rounded-2xl bg-primary-300 px-6 items-center`}
                                        style={{
                                            width: `${s.percent}%`,
                                            backgroundImage: `repeating-linear-gradient(
                                                        -115deg,
                                                        rgba(253, 253, 253, 0.05) 0px,
                                                        rgba(253, 253, 253, 0.15) 1px,
                                                        transparent 1px,
                                                        transparent 18px
                                                    )`
                                        }}
                                    >{s.id}</div>
                                </div>
                                <div className="w-1/5 text-sm md:text-xl font-semibold text-right md:text-left">
                                    {s.percent}%
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Skills;