import Image, { StaticImageData } from "next/image";

interface ExperienceData {
    duration: string;
    role: string;
    company: string;
    logo: string | StaticImageData;
    description: string;
}

interface TimelineNodeProps {
    number: number;
    isFirst: boolean;
    isLast: boolean;
}

interface TimelineItemProps {
    data: ExperienceData;
    number: number;
    isReversed: boolean;
    isFirst: boolean;
    isLast: boolean;
}

const TimelineNode = ({ number, isFirst, isLast } : TimelineNodeProps) => {
    const lineClass = isFirst 
        ? "bg-linear-to-b from-transparent from-50% via-gray-300 to-gray-300 dark:via-gray-700 dark:to-gray-700" 
        : isLast 
        ? "bg-linear-to-b from-gray-300 via-gray-300 to-transparent to-50% dark:from-gray-700 dark:via-gray-700 dark:to-transparent"
        : "bg-gray-300 dark:bg-gray-700";

    return (
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
                <div className={`w-0.5 h-full ${lineClass}`}></div>
            </div>
            <div className="absolute w-10 h-10 -mt-5 -ml-2 flex items-center justify-center text-primary-200 font-bold border bg-background rounded-full top-1/2">
                {number}
            </div>
        </div>
    );
};

export const TimelineItem = ({ data, number, isReversed, isFirst, isLast } : TimelineItemProps) => {
    return (
        <div className={`flex md:contents ${isReversed ? "flex-row-reverse" : ""}`}>
            {!isReversed && <TimelineNode number={number} isFirst={isFirst} isLast={isLast} />}
            
            <div className={`relative gap-xl p-4 my-6 border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 rounded-xl w-full 
                ${isReversed ? "col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto" : "col-start-6 col-end-10 mr-auto"}`}>
                
                <div className="flex flex-col md:flex-row md:justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-sm md:text-lg text-neutral-400">{data.duration}</span>
                        <span className="font-bold text-md md:text-display-xs">{data.role}</span>
                    </div>
                    <Image src={data.logo} alt={data.company} />
                </div>
                <p className="text-neutral-400 text-sm md:text-md mt-4">{data.description}</p>
            </div>

            {isReversed && <TimelineNode number={number} isFirst={isFirst} isLast={isLast} />}
        </div>
    );
};