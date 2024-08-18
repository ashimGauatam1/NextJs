import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { AnimatedTooltipPreview } from "@/components/Instructor";
import Quotes from "@/components/Quotes";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <Quotes/>
    <AnimatedTooltipPreview/>
    </main>
  );
}
