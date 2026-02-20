import Footer from "@/components/Footer";

import Navigation from "@/components/Navigation";
import AboutMe from "@/pagesections/AboutMe";
import Contact from "@/pagesections/Contact";
import Experience from "@/pagesections/Experience";
import FAQ from "@/pagesections/FAQ";
import HeroContent from "@/pagesections/HeroContent";
import Portfolio from "@/pagesections/Portfolio";
import Service from "@/pagesections/Service";
import Skills from "@/pagesections/Skills";
import Testimonials from "@/pagesections/Testimonials";
import WhyChooseMe from "@/pagesections/WhyChooseMe";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <Navigation />
      <main className="min-h-screen w-full max-w-360">
        <HeroContent />
        <Service />
        <AboutMe />
        <Skills />
        <WhyChooseMe />
        <Experience />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}