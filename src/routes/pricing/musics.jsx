import { Motion } from "@motionone/solid";
import { A } from "@solidjs/router";
import { HiOutlineMusicalNote, HiSolidCreditCard } from "solid-icons/hi";
import { For } from "solid-js";
import Card from "~/components/Card";
import CardContent from "~/components/CardContent";
import { courses } from "~/data/musicCourses";

export default function musics() {

  return (
    <div class="min-h-screen py-10 px-4 md:px-16 lg:px-36 bg-blue-50">
        <div class='h-[40vh] w-full flex flex-col justify-center align-middle'>
            <h2 class='text-3xl font-bold  text-center text-[#ff402b] '>Pricing</h2>
            <p class='text-zinc-900 text-center mt-2'>
              Choose Your Plans - Enhance your musical skills
            </p>
        </div>

        

        <Motion.div 
            class="grid sm:grid-cols-2 mb-10 gap-8"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3, delay: 0.3 }}
        >
            <Card>
                <div class="bg-gradient-to-tr from-[#2b73e6] to-pink-500 group rounded-t-lg min-h-12 p-3 text-white flex gap-4">
                    <HiOutlineMusicalNote class="w-20 sm:w-12 h-20 sm:h-12 group-hover:animate-ping" />
                    <h2 class="font-bold text-xl my-auto">Individual (1:1) Classes</h2>
                </div>
                <CardContent className={`bg-white rounded-b-lg`}>
                    <div class="text-sm">
                        <ul>
                            <li>Duration: 40 minutes</li>
                            <li>Price: ₹450 → ₹375 Per Class (Discounted Price)</li>
                        </ul>
                    </div>
                    <div> 
                        <h2 class="font-semibold text-sm">Monthly Fee Options :</h2>
                        <ul class="text-sm list-disc ps-4">
                            <li>1 class/week: ₹1,499+18% GST</li>
                            <li>2 classes/week: ₹2,998+18% GST</li>
                            <li>3 classes/week: ₹4,497+18% GST</li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <button class="flex justify-center gap-2 font-bold text-lg shadow-lg hover:scale-95 bg-gradient-to-br from-[#ff402b] to-pink-600 w-full py-1.5 rounded-lg text-white">
                            <HiSolidCreditCard class="h-5 w-5 my-auto" />
                            <p>Enroll</p>
                        </button>
                    </div>

                    <div class="mt-4 text-xs text-orange-800">
                        <p>Important Note 📝</p>
                        <p>18% + GST will be added to all plans. As a government-registered platform, this tax secures your payment.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <div class="bg-gradient-to-tr from-[#2b73e6] to-pink-500 group rounded-t-lg min-h-12 p-3 text-white flex gap-4">
                    <HiOutlineMusicalNote class="w-20 sm:w-12 h-20 sm:h-12 group-hover:animate-ping" />
                    <h2 class="font-bold text-xl my-auto">Group Classes (1:4)</h2>
                </div>
                <CardContent className={`bg-white rounded-b-lg `}>
                    <div class="text-sm">
                        <ul>
                            <li>Batch Size: 4 Students</li>
                            <li>Duration: 1 hour 15 minutes</li>
                            <li>Price: ₹300 → ₹279 Per Class (Discounted Price)</li>
                            <li>Class Frequency: 1 class/week</li>
                            <li>Quatarly Total Classes: 12</li>
                            <li>Quatarly Payment: ₹3348 + 18% GST</li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <button class="flex justify-center gap-2 font-bold text-lg shadow-lg hover:scale-95 bg-gradient-to-br from-[#ff402b] to-pink-600 w-full py-1.5 rounded-lg text-white">
                            <HiSolidCreditCard class="h-5 w-5 my-auto" />
                            <p>Enroll</p>
                        </button>
                    </div>

                    <div class="mt-4 text-xs text-orange-800">
                        <p>Important Note 📝</p>
                        <p>18% + GST will be added to all plans. As a government-registered platform, this tax secures your payment.</p>
                    </div>
                </CardContent>
            </Card>
        </Motion.div>

        <h2 class="my-6 text-3xl text-purple-800">Music Courses</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <For each={courses}>
            {((item)=>(
                <Card className={`bg-white`}>
                    <img src={item.image} alt="" class="rounded-t-lg max-h-[240px] sm:max-h-[200px] w-full object-cover" />
                    <CardContent className={`flex flex-col justify-between`}>
                        <div>
                            <h2 class="font-semibold text-lg">{item.title}</h2>
                            <p class="text-sm">{item.description[0]}</p>
                        </div>
                        <div class="flex justify-between pt-2 h-5/6">
                            <p class="text-xs text-zinc-700" >1-ON-1 Classes/ Group Classes</p>
                            <A href='#' class='bg-[#ff402b] font-semibold text-sm my-auto px-5 rounded-md text-white py-1.5 '>
                                Enroll
                            </A>
                        </div>
                    </CardContent>
                </Card>
            ))}
            </For>
        </div>

        <div class="bg-[#2b60ff] text-white p-8 rounded-lg text-center">
            <h2 class="text-2xl font-semibold mb-4">NEED HELP? WE'RE HERE FOR YOU!</h2>
            <p class="mb-4">
              DON'T HESITATE TO CONTACT US IF YOU NEED ANY ASSISTANCE.
              OUR DEDICATED SUPPORT TEAM IS ALWAYS READY TO HELP.
            </p>
            <p class="font-semibold">CONTACT US:</p>
            <p class='mb-3'>PHONE: +91 2269719938</p>
            <a href='https://wa.aisensy.com/+919401400399' class="mt-4 bg-[#ff402b] text-white px-6 py-2 rounded-full text-sm hover:bg-[#ff8200]/90 transition-colors">
              LIVE CHAT
            </a>
        </div>
    </div>
  )
}
