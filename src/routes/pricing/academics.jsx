import { Motion } from "@motionone/solid";
import { A } from "@solidjs/router";
import { HiSolidAcademicCap, HiSolidCreditCard } from "solid-icons/hi";
import { For } from "solid-js";
import Card from "~/components/Card";
import CardContent from "~/components/CardContent";
import { courses } from "~/data/courses";

const academicPlans = [
  {
    name: "Junior Squad",
    classes: "CLASS 6-7",
    subjects: [
      { name: "Mathematics", price: 4499 },
      { name: "Science", price: 4499 },
      { name: "Social Studies", price: 4499 },
      { name: "English Grammar + Spoken English", price: 4499 }
    ]
  },
  {
    name: "Rising Stars",
    classes: "CLASS 8-9",
    subjects: [
      { name: "Mathematics", price: 6999 },
      { name: "Science", price: 6999 },
      { name: "Social Studies", price: 6999 },
      { name: "English and Grammar", price: 6999 }
    ]
  },
  {
    name: "Board Brigade",
    classes: "CLASS 10",
    subjects: [
      { name: "Mathematics", price: 8499 },
      { name: "Science", price: 8499 },
      { name: "Social Studies", price: 8499 },
      { name: "English and Grammar", price: 8499 }
    ]
  },
  {
    name: "Seniors' Squad",
    classes: "CLASS 11-12",
    subjects: [
      { name: "Mathematics", price: 8999 },
      { name: "Physics", price: 8999 },
      { name: "Chemistry", price: 8999 },
      { name: "Biology", price: 8999 }
    ]
  }
];

export default function academics() {

  return (
    <div class="min-h-screen py-10 px-4 md:px-16 lg:px-36 bg-blue-50">
        <div class='h-[40vh] w-full flex flex-col justify-center align-middle'>
            <h2 class='text-3xl font-bold  text-center text-blue-700 '>Pricing</h2>
            <p class='text-zinc-900 text-center mt-2'>
              Choose Your Plans - Enhance your musical skills
            </p>
        </div>

        

        <Motion.div 
            class="grid sm:grid-cols-2 lg:grid-cols-2 mb-10 gap-4"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3, delay: 0.3 }}
        >
          <For each={academicPlans}>
          {(plan)=>(
            <Card className={`bg-white`}>
            <div class="bg-gradient-to-tr from-[#2b73e6] to-blue-500 group rounded-t-lg min-h-12 p-3 text-white flex gap-4">
                <HiSolidAcademicCap class="w-20 sm:w-12 h-20 sm:h-12 group-hover:animate-ping" />
                <h2 class="font-bold text-xl my-auto">{plan.name}</h2>
            </div>
            <CardContent >
                <div class="text-sm"> 
                    <ul class="text-sm">
                        {plan.subjects.map((item)=>(
                          <li class="flex justify-between">
                            <p>{item.name}</p>
                            <p class="font-bold">{item.price}/-</p>
                          </li>
                        ))}
                    </ul>
                </div>
                <div class="mt-4">
                    <button class="flex justify-center gap-2 font-bold text-lg shadow-lg hover:scale-95 bg-gradient-to-br from-blue-700 to-blue-800 w-full py-1.5 rounded-lg text-white">
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
          )}
          </For>
        </Motion.div>

        <h2 class="my-6 text-3xl text-purple-800">Academics Courses</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <For each={courses}>
            {((item)=>(
                <Card className={`bg-white`}>
                    <img src={item.image} alt="" class="rounded-t-lg max-h-[240px] sm:max-h-[200px] w-full object-cover" />
                    <CardContent className={`flex flex-col justify-between`}>
                        <div>
                            <h2 class="font-semibold text-lg">{item.title}</h2>
                            <p class="text-sm text-zinc-700">{item.description[0]}</p>
                        </div>
                        <div class="flex justify-between pt-2 h-5/6">
                            <p class="text-md text-blue-700 font-semibold" >{item.fee}</p>
                            <A href='#' class='bg-blue-700 font-semibold text-sm my-auto px-5 rounded-md text-white py-1.5 '>
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
