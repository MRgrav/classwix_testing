import { createSignal, onMount, Suspense } from "solid-js";
import AndroidPromoSection from "~/components/LandingPage/AndroidPromoSection";
import BenefitsSection from "~/components/LandingPage/BenefitsSection";
import CategorySection from "~/components/LandingPage/CategorySection";
import FaqSection from "~/components/LandingPage/FaqSection";
import FeaturedFunction from "~/components/LandingPage/FeaturedFunctionSection";
import FeedbackSection from "~/components/LandingPage/FeedbackSection";
import HeroSection from "~/components/LandingPage/HeroSection";
import InstructorsSection from "~/components/LandingPage/InstructorSection";
import PartnerSection from "~/components/LandingPage/PartnerSection";
import StatSection from "~/components/LandingPage/StatSection";
import SupportSection from "~/components/LandingPage/SupportSection";
import WhyChooseUsSection from "~/components/LandingPage/WhyChooseSection";

const LazySection = (props) => {
  const [isVisible, setIsVisible] = createSignal(false);
  let sectionRef = null;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: props.threshold || 0.1,
        rootMargin: props.rootMargin || '0px'
      }
    );

    if (sectionRef) observer.observe(sectionRef);
  });

  return (
    <div 
      ref={sectionRef} 
      class="min-h-[180px]"
    >
      <Suspense fallback={<div class="h-[200px] bg-gray-100 animate-pulse"></div>}>
        {isVisible() && props.children}
      </Suspense>
    </div>
  );
};

export default function index() {
  return (
    <div class="min-h-screen">
        <HeroSection />

        {/* <DynamicBenefits /> */}

      <LazySection threshold={0.2}>
        <FeaturedFunction />
      </LazySection>

      <LazySection threshold={0.3}>
        <CategorySection />
      </LazySection>

        {/* <LazySection threshold={0.3} >
          <PlansSection />
        </LazySection> */}

        {/* <Suspense >
          <LatestCourseSection />
        </Suspense> */}

        
        <LazySection threshold={0.6} >
          <StatSection />
        </LazySection>
        <LazySection threshold={0.1} >
          <BenefitsSection />
        </LazySection>

          {/* support team */}
        <LazySection threshold={0.4} >
          <SupportSection />
        </LazySection>

        <LazySection threshold={0.2} >
          <InstructorsSection />
        </LazySection>
        <LazySection >
          <AndroidPromoSection />
        </LazySection>
        <LazySection >
          <WhyChooseUsSection />
        </LazySection>
        <LazySection threshold={0.2} >
          <FeedbackSection />
        </LazySection>
        <LazySection >
          <PartnerSection />
        </LazySection>
        <LazySection >
          <FaqSection />
        </LazySection>
    </div>
  )
}