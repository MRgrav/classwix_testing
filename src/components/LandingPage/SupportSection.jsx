import { Motion } from "@motionone/solid";
import { A } from "@solidjs/router";

export default function SupportSection() {
  return (
    <section class="w-full px-8 py-8 md:px-12 bg-white">
        <div class="grid grid-cols-5 bg-gradient-to-tr from-[#191172] to-blue-700 px-6 lg:px-20 md:px-12 py-8 "
            style={{
                "border-radius" : "0% 20% 0% 10% / 10% 30% 20% 30%"
            }}
        >
            <Motion.div
                class="col-span-3 py-8"
            >
                <h2 class="font-bold text-3xl text-white mb-4">
                    NEED HELP? WE'RE HERE FOR YOU!
                </h2>
                <p class="text-blue-200 mb-2">
                    DON'T HESITATE TO CONTACT US IF YOU NEED ANY ASSISTANCE.
                </p>
                <p class="text-blue-200 mb-4">
                    OUR DEDICATED SUPPORT TEAM IS ALWAYS READY TO HELP
                </p>
                <hr />
                <h3 class="font-semibold text-xl text-white mb-2 mt-6">Contact us</h3>
                <p class="text-blue-200 mb-1">Phone: +91 2269719938</p>
                <p class="text-blue-200 mb-1">
                    WhatsApp: 
                    <A href="https://wa.me/91940140039">
                    https://wa.me/91940140039
                    </A>
                </p>
            </Motion.div>
            <Motion.div class="col-span-2 flex justify-center">
                <img 
                    src="/images/Calling_Girl.webp" 
                    alt="" 
                    class="max-h-[360px] -mb-8 mt-auto" 
                />
            </Motion.div>
        </div>
    </section>
  )
}
