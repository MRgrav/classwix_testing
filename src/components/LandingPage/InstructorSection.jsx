import { Motion } from '@motionone/solid';
import { A } from '@solidjs/router';

const InstructorsSection = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-t from-orange-500/60 to-red-700/70 py-10 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Side - Image Placeholder */}
        <div class="relative my-auto">
          <div class="bg-[#6833ff] bg-opacity-10 -top-20 mx-auto aspect-square rounded-full absolute -inset-4 -z-10"></div>
          <img 
            src="/images/teaching_man.jpg" 
            alt="Instructors" 
            class="rounded-2xl object-cover w-full mx-auto aspect-square max-w-[260px] mb-8 md:mb-auto md:max-w-[400px] md:mx-auto bg-gradient-to-t from-orange-600/30 to-transparent"
            style={{
                "border-radius": "65% 25% 44% 50% / 31% 27% 76% 40% "
            }}
          />
        </div>

        {/* Right Side - Content and Progress Bars */}
        {/* <div class="space-y-8"> */}
        <Motion.div
          class="space-y-8"
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h2 class="text-4xl font-bold text-gray-100 mb-6">
              Our Passionate Instructors
            </h2>
            <p class="text-gray-200 mb-8">
              Our teachers are knowledgeable and passionate, fostering an engaging and supportive atmosphere. We create a positive learning environment, essential for success.
            </p>
          </div>

          {/* Progress Bars */}
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-200 font-medium">Academic Instructors</span>
                <span class="text-gray-200 font-medium">75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <Motion.div 
                  class="bg-gradient-to-r from-blue-400 to-blue-700 border h-3 rounded-full" 
                  initial={{ width: '0%' }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                ></Motion.div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-200 font-medium">Vocal Instructors</span>
                <span class="text-gray-200 font-medium">75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
              <Motion.div 
                  class="bg-gradient-to-r from-blue-400 to-blue-700 border h-3 rounded-full" 
                  initial={{ width: '0%' }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                ></Motion.div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-100 font-medium">Instruments Instructors</span>
                <span class="text-gray-100 font-medium">55%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <Motion.div 
                  class="bg-gradient-to-r from-blue-400 to-blue-700 border h-3 rounded-full" 
                  initial={{ width: '0%' }}
                  animate={{ width: '55%' }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                ></Motion.div>
              </div>
            </div>
          </div>

          {/* Discover More Button */}
          <div class='pt-8'>
            <A href="/instructors" 
              class="px-8 py-3 rounded-full text-white font-semibold 
                     transition duration-300 ease-in-out transform hover:scale-105 
                     bg-[#e76131] hover:bg-opacity-90 shadow-lg hover:shadow-xl hover:shadow-orange-700 shadow-orange-800/60"
            >
              Discover More
            </A>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default InstructorsSection;