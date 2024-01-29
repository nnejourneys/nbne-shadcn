import About from "@/components/page-sections/about";
import CTA from "@/components/page-sections/cta";
import HeroMain from "@/components/page-sections/hero-main";
import Region from "@/components/page-sections/region";
import Testimonials from "@/components/page-sections/testimonials";
import TourTypes from "@/components/page-sections/tour-types"; 
import ToursSlider from "@/components/page-sections/tours-slider"; 

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroMain />
      <TourTypes />
      <ToursSlider />
      <About />
      <Region />
      <CTA />
      <Testimonials />
    </main>
  );
}
