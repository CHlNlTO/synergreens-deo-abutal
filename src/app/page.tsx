import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RevealLinks } from "@/components/RevealLinks";
import { RevealText } from "@/components/RevealText";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <AuroraBackground>
        <Hero />
      </AuroraBackground>
      <FeaturedTestimonial />
      <Testimonials />
      <Stats />
      <Contact />
      <Companies />
      <RevealLinks />
      <RevealText />
      <Footer />
    </div>
  );
}
