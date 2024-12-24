import { Motion } from "@motionone/solid";
import { HiSolidPhone, HiSolidQrCode, HiSolidUserGroup } from "solid-icons/hi";

export default function BenefitsSection() {
  return (
    <section class="px-8 md:px-12 lg:px-40 py-12 bg-white">
        <h2 class="text-4xl font-extrabold text-center mb-8">
        Unlock Your Potential with <span class="text-blue-700">CLASSWiX</span>!
        </h2>
        <Motion.div 
            class="flex justify-around flex-wrap-reverse bg-blue-300 mb-4 py-6 sm:p-1"
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
        >
            <div class="flex flex-col justify-center">
                <h2 class="text-4xl font-extrabold sm:mb-4 mt-4">Recorded Classe</h2>
                <p class="text-lg text-blue-950">
                Access lessons anytime, anywhere 
                </p>
            </div>
            <Motion.div 
                class="sm:p-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
            >
                <img src="/images/video-player.png" width={160} height={160} alt="video camera" class="mx-auto" />
            </Motion.div>
        </Motion.div>
        <Motion.div 
            class="flex flex-col sm:flex-row flex-wrap justify-around bg-gradient-to-b from-red-500 to-orange-600 sm:p-4 mb-4 text-white"
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
        >
            <Motion.div 
                class="hidden sm:flex flex-col align-middle flex-1 h-full"
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
            >
                <img src="/images/exam-results.png" alt="" width={160} class="mx-auto"/>
                {/* <h2 class="text-xl font-bold my-auto text-center">Tests</h2> */}
            </Motion.div>
            <div class="flex-1 mx-w-[200px] text-center p-4 flex flex-col align-bottom justify-center">
                <h2 class="text-lg font-extrabold sm:mb-3 ">Mock Test</h2>
                <p class="text-sm">
                    Simulate actual exams for confidence boost 
                </p>
            </div>
            <div class="flex-1 mx-w-[200px] text-center p-4 flex flex-col align-bottom justify-center">
                <h2 class="text-lg font-extrabold sm:mb-3">Weekly Test</h2>
                <p class="text-sm">
                Track progress and identify areas for improvement 
                </p>
            </div>
        </Motion.div>
        <Motion.div 
            class="flex flex-wrap bg-gradient-to-l from-purple-700/90 to-blue-700/90 gap-6 sm:gap-8 py-4 sm:py-8 mb-4"
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
        >
            <div class="flex-1 min-w-60 text-center">
                {/* <img src="/images/teacher_P.png" width={180} alt="" class="mx-auto mb-2" /> */}
                <h2 class="text-lg font-bold sm:mb-2 text-white">Homework Assistance</h2>
                <p class="text-sm text-blue-100">
                Guided practice for deeper understanding 
                </p>
            </div>
            <div class="flex-1 min-w-60 text-center">
                {/* <img src="/images/book.png" alt="" width={140} class="mx-auto" /> */}
                <h2 class="text-lg font-bold sm:mb-2 text-white">Study Materials</h2>
                <p class="text-sm text-purple-100">
                Comprehensive notes and resources 
                </p>
            </div>
        </Motion.div>
        <Motion.div 
            class="grid grid-cols-1 sm:grid-cols-3 bg-gradient-to-t from-green-700 to-[#005f03]/70 gap-8 py-4 sm:py-8"
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
        >
            <div class="text-center flex flex-col justify-between">
                <HiSolidUserGroup class="mx-auto w-8 h-8 mb-2 text-white" />
                <div>
                <h2 class="text-lg font-bold sm:mb-2 text-white">Career Guidance</h2>
                <p class="text-sm text-green-100">
                Expert advice on career paths 
                </p>
                </div>
            </div>
            <div class="text-center flex flex-col justify-between">
                <HiSolidPhone class="mx-auto w-8 h-8 mb-2 text-white" />
                <div>
                <h2 class="text-lg font-bold sm:mb-2 text-white">Full Counselor Support</h2>
                <p class="text-sm text-green-100">
                Guided academic and career planning 
                </p>
                </div>
            </div>
            <div class="text-center flex flex-col justify-between">
                <HiSolidQrCode class="mx-auto w-8 h-8 mb-2 text-white" />
                <div>
                <h2 class="text-lg font-bold sm:mb-2 text-white">Secure Payment Gateway</h2>
                <p class="text-sm text-green-100">
                    Safe and secure transactions 
                </p>
                </div>
            </div>
        </Motion.div>
    </section>
  )
}
