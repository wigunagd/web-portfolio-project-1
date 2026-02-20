import Image from "next/image";
import { imgAboutFloating1, imgAboutFloating2, imgAboutFloating3, imgTetris2 } from "../../public/imgassets/assets-img";

const AboutMe = () => {
    return (
        <section id="about-me-section" className="relative flex flex-col w-full">

            <div id="about-me-content"
                className="md:absolute relative z-5
            left-1/2 -translate-x-1/2
            flex flex-col w-full items-center 
            md:max-w-296 mx-auto py-10 md:py-30 md:px-32 lg:px-0 px-[16px]">
                <p className="text-primary-200 text-md md:text-lg">ABOUT ME</p>
                <p className="font-extrabold text-display-md md:text-display-2xl mt-4">CRAFTING SEAMLESS</p>
                <p className="font-extrabold text-display-md md:text-display-2xl w-full text-center md:max-w-218">
                    <span className="text-primary-200">HIGH-PERFORMANCE WEB</span> EXPERIENCES
                </p>
                <p className="w-full md:max-w-249 text-neutral-400 text-md md:text-xl text-center mt-16">I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.</p>
            </div>

            <div id="about-me-bg" className="relative flex md:min-h-151 min-h-72">
                <Image
                    id="img-about-floating-1"
                    src={imgAboutFloating1}
                    width={238} height={178}
                    alt="img-about-floating-1"
                    className="absolute w-42.5 h-31.75 md:w-59.5 md:h-44.5 
                    top-0 
                    md:top-9.25 
                    left-[calc(40/393*100%)] 
                    md:left-[calc(252/1440*100%)]"
                />

                <Image
                    id="img-about-floating-2"
                    src={imgAboutFloating2}
                    width={250} height={287}
                    alt="img-about-floating-2"
                    className="absolute w-33.5 h-24.75 md:w-62.5 md:h-71.75 
                    top-11.25 
                    md:top-[40px]
                    right-[calc(35/393*100%)] 
                    md:right-[calc(178/1440*100%)]"
                />

                <Image
                    id="img-about-floating-3"
                    src={imgAboutFloating3}
                    width={117} height={88}
                    alt="img-about-floating-3"
                    className="absolute w-[132.47px] h-25 md:w-29.25 md:h-22 
                    top-41 
                    md:top-75.75 
                    right-[calc(116.53/393*100%)] 
                    md:right-[calc(447/1440*100%)]"
                />

                <Image
                    id="img-about-tetris"
                    src={imgTetris2}
                    width={92} height={138}
                    alt="img-about-tetris"
                    className="absolute h-[103.5px] w-17.25 md:h-34.5 md:w-23 left-0 bottom-0" />
            </div>

        </section>
    )
}

export default AboutMe;