import { createSignal, Suspense, onMount } from 'solid-js'
import { HiOutlineBookOpen, HiOutlineUsers, HiOutlineVideoCamera, HiOutlineStar, HiOutlineCheckCircle, HiOutlinePlay } from 'solid-icons/hi'
import { animate, stagger } from '@motionone/solid'
import HeroSection from '~/components/LandingPage/HeroSection';

// const LazySection = (props) => {
//     const [isVisible, setIsVisible] = createSignal(false);
//     let sectionRef = null;
  
//     onMount(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.disconnect();
//           }
//         },
//         { 
//           threshold: props.threshold || 0.1,
//           rootMargin: props.rootMargin || '0px'
//         }
//       );
  
//       if (sectionRef) observer.observe(sectionRef);
//     });
  
//     return (
//       <div 
//         ref={sectionRef} 
//         class="min-h-[180px]"
//       >
//         <Suspense fallback={<div class="h-[200px] bg-gray-100 animate-pulse"></div>}>
//           {isVisible() && props.children}
//         </Suspense>
//       </div>
//     );
//   };

export default function Index() {
//   const animateIn = (el) => {
//     animate(
//       el,
//       { opacity: [0, 1], y: [20, 0] },
//       { duration: 0.5, delay: stagger(0.1) }
//     )
//   }

  return (
    <div class="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* <div class="relative bg-gradient-to-br from-purple-600 to-blue-600 pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="text-white space-y-6" >
              <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                Upgrade your skills and knowledge
              </h1>
              <p class="text-lg text-white/80">
                Launch your potential with our 30-day free trial – align with your needs today
              </p>
              <div class="flex gap-4">
                <button class="bg-white text-[#4f46e5] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button class="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div class="hidden md:block">
              <img 
                src="/images/std3434.png" 
                alt="Learning Illustration" 
                class="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Partners Section */}
      {/* <div class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center" >
            {Array(4).fill(null).map((_, i) => (
              <img 
                src="/placeholder-logo.svg" 
                alt={`Partner ${i + 1}`} 
                class="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* Features Section */}
      {/* <div class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8" >
            <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <HiOutlineBookOpen class="w-12 h-12 text-[#4f46e5] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Online Courses</h3>
              <p class="text-gray-600">Access our comprehensive library of courses anytime, anywhere.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <HiOutlineUsers class="w-12 h-12 text-[#4f46e5] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p class="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <HiOutlineVideoCamera class="w-12 h-12 text-[#4f46e5] mb-4" />
              <h3 class="text-xl font-semibold mb-2">HD Video Lessons</h3>
              <p class="text-gray-600">Crystal clear video content to enhance your learning experience.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Stats Section */}
      {/* <div class="bg-gradient-to-r from-orange-500 to-red-500 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3 gap-8 text-center text-white" >
            <div>
              <div class="text-4xl font-bold mb-2">450+</div>
              <div class="text-white/80">Online Courses</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">7,999+</div>
              <div class="text-white/80">Happy Students</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">15+</div>
              <div class="text-white/80">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <div class="bg-gradient-to-br from-purple-600 to-blue-600 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
            Start your learning journey today!
          </h2>
          <button class="bg-white text-[#4f46e5] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Book Your Trial Class
          </button>
        </div>
      </div> */}

      {/* Why Choose Us Section */}
      {/* <div class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Why Choose CLASSWIX</h2>
            <p class="text-gray-600">Learn Without Limits, Grow With CLASSWIX</p>
          </div>
          <div class="grid md:grid-cols-4 gap-8" >
            {[
              {
                icon: HiOutlineBookOpen,
                title: "Comprehensive Courses",
                description: "In-depth learning pathways to master your skills"
              },
              {
                icon: HiOutlineStar,
                title: "Expert Instructors",
                description: "Learn from experienced professionals in the field"
              },
              {
                icon: HiOutlineCheckCircle,
                title: "Flexible Learning",
                description: "Study at your own pace and schedule"
              },
              {
                icon: HiOutlinePlay,
                title: "Lifetime Access",
                description: "Once enrolled, access content forever"
              }
            ].map(feature => (
              <div class="text-center">
                <div class="inline-block p-3 bg-[#4f46e5]/10 rounded-full mb-4">
                  <feature.icon class="w-6 h-6 text-[#4f46e5]" />
                </div>
                <h3 class="text-lg font-semibold mb-2">{feature.title}</h3>
                <p class="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <LazySection threshold={0.1}> */}
        {/* <WhyChooseUs /> */}
      {/* </LazySection> */}
      {/* <HeroSection /> */}
    </div>
  )
}


