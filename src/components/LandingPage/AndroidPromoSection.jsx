import { Motion } from "@motionone/solid";
import Button from "../Button";

export default function AndroidPromoSection() {
  return (
    <section class="px-8 py-6 sm:py-0 md:px-20 lg:px-40 bg-gradient-to-r from-[#481d70]/70 to-[#2b4eff]">
    <div class="grid sm:grid-cols-5 container mx-auto text-center text-white">
      <Motion.div 
        class="py-2 sm:py-16 col-span-3"
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 ,duration: 0.7 }}
      >
        <h2 class="text-3xl font-bold mb-6 text-left">
          Start your learning journey today! Enroll now in our online course.
        </h2>
        <div class="text-left">
            <Button
              size="lg"
              className="bg-white text-orange-600 font-semibold shadow hover:scale-95"
            >
              <img 
                src="/icons/google-play.png" 
                alt="" 
                class="w-8 my-2"
              />
              <p class='my-auto'>Download</p>
            </Button>
        </div>
      </Motion.div>
      <div class="col-span-2">
        <img 
          src="/images/BoyPhone_small.webp" 
          alt="" 
          class="w-3/4 hidden sm:block max-w-[200px] my-auto mx-auto"
        />
      </div>
    </div>
  </section>
  )
}
