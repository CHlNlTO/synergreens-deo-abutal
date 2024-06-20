import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTestimonial />
      <Testimonials />
      <Stats />
      <Contact />
      <Companies />
      <Footer />
    </div>
  );
}
