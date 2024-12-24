import { Motion } from '@motionone/solid';
import { HiOutlineClock, HiSolidClock, HiSolidQuestionMarkCircle } from 'solid-icons/hi';
import { createSignal, onMount, Suspense } from 'solid-js';
import StatSection from '~/components/LandingPage/StatSection';
import WhyChooseUsSection from '~/components/LandingPage/WhyChooseSection';

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

export default function AboutUs () {
  const [activeTab, setActiveTab] = createSignal('story');

  const statsData = [
    { number: '449+', label: 'Students Enrolled' },
    { number: '49+', label: 'Programs' },
    { number: '7999+', label: 'Live Classes Delivered' }
  ];

  return (
    <div class='min-h-screen w-full'>
      <div class='h-[40vh] px-4 md:px-16 lg:px-36 pt-20 bg-white w-full flex flex-col justify-center align-middle'>
        {/* <Motion.div
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
        <img src="/mains/color-wide.png" alt="" class='mx-auto max-w-[800px] w-[90%]' />
        </Motion.div> */}
        {/* <hr class='border-blue-900 my-5' /> */}
        <h2 class='text-3xl font-bold  text-center text-[#2b60ff] '>About Us</h2>
        <p class='text-zinc-900 text-center mt-2'>
        Discover Endless Possibilities With CLASSWiX Community
        </p>
      </div>
      <div class='flex justify-between items-start flex-col sm:flex-row  px-4 md:px-16 lg:px-36 py-12 sm:items-center  bg-white'>
        <div class='order-2 sm:order-1 lg:col-span-4 sm:col-span-2 flex flex-col gap-y-5 pe-3 text-justify'>
          <p class='font-semibold text-lg mb-2 text-zinc-900'>
          "Empowering minds worldwide, <span class='font-bold text-blue-900'>CLASSWiX</span> is a global learning platform where education and music come together to make magic."
          </p>
          <p>
          Our objective is clear: to offer a comprehensive educational experience that enriches both the mind and the soul.
          </p>
          <p>
          At <span class='font-bold text-blue-900'>CLASSWiX</span>, we believe in the power of holistic learning. Our expert instructors are dedicated to providing high-quality education that goes beyond textbooks, fostering personal growth and creativity in every student.
          </p>
          <p class=''>
          Whether you're passionate about academics or music, <span class='font-bold text-blue-900'>CLASSWiX</span> has something for everyone. Our diverse range of courses and programs cater to a wide array of interests and skill levels, ensuring that each student receives personalized attention and support.
          </p>
          <p>
          Join us at <span class='font-bold text-blue-900'>CLASSWiX</span> and embark on a journey of discovery and self-improvement. Let us guide you towards a brighter future filled with knowledge, harmony, and success. 
          </p>
        </div>
        <div class='order-1 sm:order-2 sm:col-span-1 px-4 flex sm:flex-col pb-4 text-start'>
          <h2 class='text-4xl font-extrabold ms-3'>WHO <br /> WE <br /> ARE</h2>
          <h1 class='text-8xl font-bold ms-3'>?</h1>
        </div>
      </div>
      <LazySection threshold={0.2}>
      <div class='grid sm:grid-cols-3 gap-5 px-4 md:px-16 lg:px-36 py-12 bg-white text-white' >
        <Motion.div 
          class='flex flex-col gap-y-3 text-center p-5 bg-gradient-to-b from-purple-600 to-pink-600 rounded hover:rounded-xl shadow-xl hover:shadow-pink-400'
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 class='font-bold text-lg'>Our Mission</h2>
          <p>
            Empowering learners through exceptional educational resources in academics and music, providing high-quality online classes that cater to diverse interests and needs. 
          </p>
        </Motion.div>
        <Motion.div 
          class='flex flex-col gap-y-3 text-center p-5 bg-gradient-to-b from-pink-600 to-red-600 rounded hover:rounded-xl shadow-xl hover:shadow-red-400'
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 class='font-bold text-lg'>Our Vision </h2>
          <p>
            Breaking geographical barriers, making education accessible to all, and fostering a supportive community of learners who inspire and uplift each other. 
          </p>
        </Motion.div>
        <Motion.div 
          class='flex flex-col gap-y-3 text-center p-5 bg-gradient-to-b from-red-600 to-orange-600 rounded hover:rounded-xl shadow-xl hover:shadow-orange-400'
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 class='font-bold text-lg'>Our Values</h2>
          <p>
            We foster accessibility, quality, diversity, community, and empowerment, creating inclusive spaces for learners to grow and reach full potential. 
          </p>
        </Motion.div>
      </div>
      </LazySection>
      <LazySection threshold={0.3} >
        <StatSection />
      </LazySection>
      <div class='grid sm:grid-cols-3 lg:grid-cols-5 gap-5 px-4 md:px-16 lg:px-36 py-12 bg-gradient-to-b from-blue-600/70 to-indigo-100'>
        <div class='col-span-1 px-4'>
          <HiOutlineClock class='w-20 h-20 ms-auto' />
          <h2 class='text-4xl font-bold text-end'>Our Story</h2>
        </div>
        <div class='sm:col-span-2 lg:col-span-4 text-justify flex flex-col gap-y-5'>
          <p>
          At <span class='font-bold text-blue-900'>CLASSWiX</span>, we're driven by a passion for empowering minds through education and music. Founded in 2016 by Bikash Borthakur, Grow Mind began as a humble initiative in Nagaon, Assam, aimed at making quality education accessible. Bikash's teaching expertise and love for mathematics propelled the institute's growth, transforming students into successful doctors, engineers, teachers etc. 
          </p>
          <p>
          Bikash's fascination with the digital world began during the 2G/3G era. Despite humble beginnings – his father being a priest – Bikash pursued mathematics graduation while working as a video editor to support his family. His technical prowess earned him opportunities with foreign companies. 
          </p>
          <p>
          The COVID-19 lockdown catalyzed Grow Mind's transition into an online platform. Bikash leveraged his technical expertise to expand the institute's reach and impact. This digital leap paved the way for a broader vision.
          </p>
          <p>
          In 2023, Bikash Borthakur partnered with music educator Pranaali Sarmah, launching Grow Music.This union sparked a harmonious convergence of academic and music education. Inspired by Grow Mind and Grow Music's success, Bikash envisioned a unified platform providing top-notch education and music under one roof. Thus, <span class='font-bold text-blue-900'>CLASSWiX</span> was born in 2024. 
          </p>
          <p>
          <span class='font-bold text-blue-900'>CLASSWiX</span> is officially registered under Bipransh EdTech Private Limited, recognized by the
          Ministry of Corporate Affairs (MCA) under the Companies Act, 2013 (18 of 2013).
          </p>
          <p>
          Today, <span class='font-bold text-blue-900'>CLASSWiX</span> stands as a premier online learning platform with an expert team, merging academic excellence with musical creativity. We're committed to shaping minds, fostering growth, and making high-quality learning accessible to all. Join us on this transformative journey. 
          </p>
        </div>
      </div>
      <LazySection threshold={0.5} >
        <WhyChooseUsSection />
      </LazySection>
    </div>
  )

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-orange-100 pt-24 py-16 px-4 md:px-8">
      <div class="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Discover Endless Possibilities with CLASSWiX
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A global learning platform where education and music come together to make magic.
          </p>
        </div>

        {/* Content Grid */}
        <div class="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div class="relative">
            <div class="bg-blue-500/10 absolute inset-0 rounded-2xl -rotate-6"></div>
            <img 
              src="/images/Calling Girl.jpg" 
              alt="CLASSWiX Founders" 
              class="relative z-10 rounded-2xl shadow-2xl object-cover w-full aspect-square"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Tabs */}
            <div class="flex mb-8 border-b">
              {[
                { key: 'story', label: 'Our Story' },
                { key: 'mission', label: 'Mission & Vision' },
                { key: 'values', label: 'Our Values' }
              ].map(tab => (
                <button
                  class={`px-4 py-2 text-lg font-semibold transition-colors ${
                    activeTab() === tab.key 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div class="min-h-[300px]">
              {activeTab() === 'story' && (
                <div>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Founded in 2016 by Bikash Borthakur, CLASSWiX began as a humble initiative in Nagaon, Assam. 
                    Driven by a passion for making quality education accessible, Bikash's expertise in mathematics 
                    and technical prowess transformed the platform.
                  </p>
                  <p class="text-gray-700 leading-relaxed">
                    The COVID-19 lockdown catalyzed CLASSWiX's digital transformation. In 2023, Bikash partnered 
                    with music educator Pranaali Sarmah, creating a unique platform that combines academic and 
                    musical education.
                  </p>
                </div>
              )}

              {activeTab() === 'mission' && (
                <div class="space-y-4">
                  <div>
                    <h3 class="text-xl font-semibold text-blue-800 mb-2">Our Mission</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Empowering learners through exceptional educational resources in academics 
                      and music, providing high-quality online classes that cater to diverse interests and needs.
                    </p>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-blue-800 mb-2">Our Vision</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Breaking geographical barriers, making education accessible to all, and fostering 
                      a supportive community of learners who inspire and uplift each other.
                    </p>
                  </div>
                </div>
              )}

              {activeTab() === 'values' && (
                <div class="space-y-4">
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold text-blue-800 mb-2">Our Core Values</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                      <li>Accessibility: Breaking down barriers to education</li>
                      <li>Quality: Delivering exceptional learning experiences</li>
                      <li>Diversity: Embracing different interests and skill levels</li>
                      <li>Community: Creating supportive learning environments</li>
                      <li>Empowerment: Helping learners reach their full potential</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div class="mt-16 grid md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div class="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div class="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div class='my-6 rounded-md'>
          <WhyChooseUsSection />
        </div>
        
      </div>
    </div>
  );
};