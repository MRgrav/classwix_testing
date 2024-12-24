import { Motion } from "@motionone/solid";
import Card from "../Card";
import CardContent from "../CardContent";
import { selectCourse } from "~/data/selectCourse";
import { HiSolidAcademicCap } from "solid-icons/hi";
import { A } from "@solidjs/router";

const academics1 = ["Mathematics","Science","Social Science","English Grammar","Spoken English"]
const academics2 = ["Mathematics","Physics","Chemistry","Biology","Quatative Aptitude and Reasoning"]
const musics = ["Hindustani Classical Voice","Western Vocal","Bollywood Vocal","Electric Guitar","Acoustic Guitar","Piano/Keyboard","Flute"]

export default function PlansSection() {
  return (
    <div class="w-full min-h-[80vh] bg-gradient-to-t from-blue-400 to-purple-100 p-4 md:px-8 lg:py-20 lg:px-16">
        {/* <h2 class="text-blue-700 font-semibold text-2xl text-center">Our Courses</h2> */}
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-4">
            Our <span class="text-orange-500">Courses</span>
        </h2>
        <div class="max-w-sm border-b-4 border-blue-500 mx-auto"></div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-10 gap-4 lg:gap-8">
                <Motion.div
                  key={1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 * 0.2 }}
                  className="group"
                >
                <Card className="bg-white h-full p-3">
                    <h2 class="font-bold text-xl text-center">
                        Academics 
                        <span class="font-medium">/ class 6-10 </span>
                    </h2>
                    <CardContent className="p-0 h-full mt-3">
                        <div class="flex flex-wrap">
                            {academics1.map((course, index)=>(
                                <div 
                                    index={index} 
                                    class="m-1 px-4 rounded-xl p-2 hover:bg-blue-700/40 bg-blue-600/30 w-fit"
                                >
                                    {course}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Motion.div>
            <Motion.div
                  key={1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 * 0.2 }}
                  className="group"
                >
                <Card className="bg-white h-full p-3">
                    <h2 class="font-bold text-xl text-center">Academics <span class="font-medium">/ class 11-12</span> </h2>
                    <CardContent className="p-0 h-full mt-3">
                        <div class="flex flex-wrap">
                            {academics2.map((course, index)=>(
                                <div index={index} class="m-1 px-4 rounded-full p-2 hover:bg-blue-700/40 bg-blue-600/30 w-fit">
                                    {course}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Motion.div>
            <Motion.div
                  key={1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 * 0.2 }}
                  className="group"
                >
                <Card className="bg-white h-full p-3">
                    <h2 class="font-bold text-xl text-center">Musics</h2>
                    <CardContent className="p-0 h-full mt-3">
                        <div class="flex flex-wrap">
                            {musics.map((course, index)=>(
                                <div index={index} class="m-1 px-4 rounded-full p-2 hover:bg-blue-700/40 bg-blue-600/30 w-fit">
                                    {course}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Motion.div>
        </div>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          class="mb-8 text-center"
        >
          <A
            href="/courses" 
            class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-colors duration-300"
          >
            Start Learning Today
          </A>
        </Motion>
    </div>
  )
}
