import { Motion } from '@motionone/solid'
import { HiSolidArrowRightCircle } from 'solid-icons/hi'
import { A } from '@solidjs/router'

export default function HeroSection() {
  return (
    <section class="hero-section hero-playing min-h-[100vh] relative bg-gradient-to-r from-[#6833ff] to-[#481d70]/60 pt-28 pb-12 px-4">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
        <div class="container mx-auto mt-auto mb-0 md:px-16 lg:px-36 px-4">
          <div class="grid lg:grid-cols-2 gap-x-12 items-center lg:text-left text-center lg:py-20 md:py-12 py-4">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              class="text-white"
            >
              <small class="text-[12px] my-8 rounded-lg bg-gradient-to-l from-violet to-white p-1.5 font-semibold">
                PREMIUM ONLINE COURSES
              </small>
              <h1 class="text-4xl md:text-6xl mt-4 font-roboto font-bold mb-6">
                Upgrade your skills and knowledge
              </h1>
              <p class="lg:text-xl text-md mb-4 opacity-90 font-sans">
                Expert Education for Every Aspiration
              </p>
              <div class='grid grid-cols-2 gap-2 w-fit text-sm font-semibold mb-8 mx-auto lg:me-auto lg:ms-0'>
                <div class='bg-white/20 p-1.5 rounded w-fit'>
                  Academics
                </div>
                <div class='bg-white/20 p-1.5 rounded w-fit'>
                  Music
                </div>
              </div>
              <button class='mb-4 cursor-move z-50 mt-2 md:mt-6'>
                <A href='/book-a-trial' className="px-6 rounded-md flex py-2 bg-white text-[#2327ff] hover:bg-[#2327ff] hover:text-white border border-blue-700 shadow-md hover:scale-95 shadow-blue-700 font-bold">
                  Book a trial
                  {/* <HiSolidArrowRight class='font-bold my-auto ml-2' /> */}
                  <HiSolidArrowRightCircle class='text-xl my-auto ml-2' />
                </A>
              </button>
              {/* <button class='mb-4 cursor-pointer z-50 mt-6'>
                <A href='/book-a-trial' className="px-6 rounded-md flex py-2 bg-gradient-to-tr from-blue-300 to-blue-400 text-blue-800 hover:from-blue-700 hover:to-blue-500 hover:text-white border border-blue-100 shadow-md hover:scale-95 shadow-blue-800 font-semibold">
                  Book a trial
                  <HiSolidArrowRight class='font-bold my-auto ml-2' />
                </A>
              </button> */}
              {/* <button>
              <A href='/book-a-trial' className="px-6 rounded-md flex py-2 bg-gradient-to-tr from-orange-500 to-orange-700 text-white hover:bg-[#ff5e19]/90 hover:text-white border border-white shadow-md hover:scale-95 shadow-blue-800 font-semibold">
                Book a trial
                <HiSolidArrowRight class='font-bold my-auto ml-2' />
              </A>
              </button> */}
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              class="relative"
            >
              <img
                src="/images/Girl_Pointing_Square.webp"
                alt="Student learning"
                class="rounded-lg mx-auto max-h-[460px] max-w-[400px] aspect-[5/7] bg-gradient-to-t from-violet-600/50 to-transparent"
                style={{
                    "border-radius": "54% 46% 30% 70% / 70% 70% 30% 30%",
                    "object-fit": "cover"
                  }}
              />
              <div class="absolute inset-0 -z-20 animo-rotate max-w-[390px] bg-gradient-to-t from-blue-300/10 to-transparent top-64 md:top-0 aspect-square" style={{"border-radius":"30% 70% 54% 46% / 30% 30% 70% 70%"}} />
              <div class="absolute inset-0 -z-20 animo-rotate max-w-[390px] bg-gradient-to-t from-violet-300/10 to-transparent top-64 md:top-0 aspect-square" style={{"border-radius":"30% 70% 54% 46% / 30% 30% 70% 70%"}} />

            </Motion.div>
          </div>
        </div>
      </section>
  )
}
