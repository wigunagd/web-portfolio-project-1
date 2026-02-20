import Image from "next/image";
import { imgTetris3, logoCompany01Upwork, logoCompany02Trello, logoCompany03Zoom, logoCompany04Zapier } from "../../public/imgassets/assets-img";
import { TimelineItem } from "./ExperienceTimelineItem";

const description = "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences";
const experienceData = [
    {
        id: 1,
        duration: "2020 - 2022",
        role: "Frontend Developer",
        company: "Upwork",
        logo: logoCompany01Upwork,
        description: description
    },
    {
        id: 2,
        duration: "2020 - 2022",
        role: "Frontend Developer",
        company: "Trello",
        logo: logoCompany02Trello,
        description: description
    },
    {
        id: 3,
        duration: "2020 - 2022",
        role: "Frontend Developer",
        company: "Zoom",
        logo: logoCompany03Zoom,
        description: description
    },
    {
        id: 4,
        duration: "2020 - 2022",
        role: "Frontend Developer",
        company: "Zapier",
        logo: logoCompany04Zapier,
        description: description
    },
];

const Experience = () => {
    return (
        <section id="experience-section" className="relative flex flex-col w-full">

            <div id="experience-content" className="relative flex flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto py-10 md:py-20 gap-10">

                <div className="w-full flex flex-col items-center">
                    <p className="text-md md:text-lg text-primary-200">EXPERIENCE</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">PROFESIONAL WORK</p>
                </div>

                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid z-5">

                    {experienceData.map((exp, index) => (
                        <TimelineItem
                            key={exp.id}
                            data={exp}
                            number={index + 1}
                            isReversed={index % 2 !== 0}
                            isFirst={index === 0}
                            isLast={index === experienceData.length - 1}
                        />
                    ))}

                </div>

                <Image src={imgTetris3} alt="img-tetris-experience" width={92} height={138} 
                className="absolute bottom-0 right-0 w-17.25 h-[103.5px] md:w-23 md:h-34.5" />

            </div>

        </section>
    )
}

export default Experience;