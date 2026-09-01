import { HeroSection } from "@/components/hero/HeroSection";
import { IntroSection } from "@/components/intro/IntroSection";
import { FeaturedWorkSection } from "@/components/projects/FeaturedWorkSection";
import { CreativeArsenalSection } from "@/components/arsenal/CreativeArsenalSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { MarqueeSection } from "@/components/marquee/MarqueeSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedWorkSection />
      <CreativeArsenalSection />
      <ServicesSection />
      <ProcessSection />
      <MarqueeSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
