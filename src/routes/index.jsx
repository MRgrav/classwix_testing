import { Motion } from '@motionone/solid';
import { useNavigate } from '@solidjs/router';
import { createEffect, lazy, Suspense } from 'solid-js';
import { createSignal, onMount } from 'solid-js';
import AndroidPromoSection from '~/components/LandingPage/AndroidPromoSection';
import WhyChooseUs from '~/components/LandingPage/WhyChooseSection';

// Lazy load all sections
const HeroSection = lazy(() => import('~/components/LandingPage/HeroSection'));
const PartnerSection = lazy(() => import('~/components/LandingPage/PartnerSection'));
const FeaturedFunction = lazy(() => import('~/components/LandingPage/FeaturedFunctionSection'));
const CategorySection = lazy(() => import('~/components/LandingPage/CategorySection'));
const LatestCourseSection = lazy(() => import('~/components/LandingPage/LatestCourseSection'));
const StatSection = lazy(() => import('~/components/LandingPage/StatSection'));
const InstructorsSection = lazy(() => import('~/components/LandingPage/InstructorSection'));
const FeedbackSection = lazy(() => import('~/components/LandingPage/FeedbackSection'));
const Button = lazy(() => import('~/components/Button'));

// Reusable Lazy Loading Component
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

// const navigate = useNavigate()

export default function Home() {
  const navigate = useNavigate();

  createEffect(() => {
    navigate("/offer");
  })
  return (
    <div class="snap-scroll min-h-screen bg-[#0e019f1d]">
      {/* Hero Section - Always visible */}
      <Suspense>
        <HeroSection />
      </Suspense>

      {/* Lazy Loaded Sections */}
      <LazySection>
        <PartnerSection />
      </LazySection>

      <LazySection threshold={0.2}>
        <FeaturedFunction />
      </LazySection>

      <LazySection threshold={0.3}>
        <CategorySection />
      </LazySection>

      <LazySection>
        <LatestCourseSection />
      </LazySection>

      <LazySection threshold={0.4}>
        <StatSection />
      </LazySection>

      <LazySection threshold={0.4}>
        <InstructorsSection />
      </LazySection>

      {/* CTA Section */}
      <LazySection threshold={0.4}>
        <AndroidPromoSection />
      </LazySection>

      {/* Why Choose Us Section */}
      <LazySection threshold={0.5}>
        <WhyChooseUs />
      </LazySection>

      <LazySection threshold={0.4}>
        <FeedbackSection />
      </LazySection>
    </div>
  );
}