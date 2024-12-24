import HeroSection from "~/components/LandingPage/HeroSection";
import PartnerSection from "~/components/LandingPage/PartnerSection";
import StatSection from "~/components/LandingPage/StatSection";
import WhyChooseUsSection from "~/components/LandingPage/WhyChooseSection";

export default function landing() {
  return (
    <div class="min-h-100">
        <HeroSection />
        <StatSection />
        <PartnerSection />
        <WhyChooseUsSection />
    </div>
  )
}
