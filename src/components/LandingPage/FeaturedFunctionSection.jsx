import { HiSolidAcademicCap, HiSolidChartBar, HiSolidGlobeAsiaAustralia } from 'solid-icons/hi';
import { createSignal } from 'solid-js';

export default function FeaturedFunction() {
  return (
    <div class="bg-gradient-to-b from-blue-200 to-white">
      <div class="mx-auto px-4 md:px-16 lg:px-36 py-16 sm:py-32">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Online Courses Card */}
          <div class="bg-white rounded-2xl p-8 px-6 shadow-lg flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              {/* <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14v7"
                />
              </svg> */}
              <HiSolidAcademicCap class='text-white text-3xl' />
            </div>
            <h2 class="text-xl font-bold text-gray-800 mb-4">Online Courses</h2>
            <p class="text-gray-600 mb-2 text-sm">Academics (6-12) & Music (All Ages)</p>
            <p class="text-gray-600 mb-6 text-sm">Learn From Experts, Anywhere, Anytime</p>
            <button class="bg-blue-600 text-white px-6 mt-auto mb-2 py-2 rounded-full hover:bg-blue-800 hover:scale-95 transition duration-300">
              Learn more
            </button>
          </div>

          {/* Enhance Expertise Card */}
          <div class="bg-gradient-to-tr from-blue-800 to-pink-800 rounded-2xl py-8 px-4 shadow-lg flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              {/* <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg> */}
              <HiSolidChartBar class='text-white text-3xl'/>
            </div>
            <h2 class="text-xl font-bold text-white mb-4">
              Enhance Your Expertise
            </h2>
            <p class="text-purple-200 mb-2 text-sm">
              Elevate Your Expertise, Amplify Your Success
            </p>
            <p class='text-purple-200 mb-6 text-sm'>Upgrade Your Skills, Unleash Your Potential</p>
            <button class="bg-blue-600 text-white px-6 mt-auto mb-2 py-2 rounded-full hover:bg-blue-500 hover:scale-95 transition duration-300">
              Learn more
            </button>
          </div>

          {/* Get Certified Card */}
          <div class="bg-white rounded-2xl py-8 px-4 shadow-lg flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              {/* <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
              <HiSolidGlobeAsiaAustralia class='text-white text-3xl animate-spin' />
            </div>
            <h2 class="text-xl font-bold text-gray-800 mb-4">
              Get Certified In Music
            </h2>
            <p class="text-gray-600 mb-2 text-sm">
              Transform Your Passion Into A Profession
            </p>
            <p class="text-gray-600 mb-6 text-sm">
              Earn Recognition From Top Universities/Boards
            </p>
            <button class="bg-blue-600 text-white mt-auto mb-2 px-6 py-2 rounded-full hover:bg-blue-800 hover:scale-95 transition duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

