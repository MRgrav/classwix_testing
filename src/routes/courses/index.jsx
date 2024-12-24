import { Motion } from "@motionone/solid";
import { A } from '@solidjs/router';
import { createSignal, For, onMount, Show } from "solid-js";
import Card from '~/components/Card';
import CardContent from '~/components/CardContent';
import { courses as academics } from '~/data/courses';
import { courses as musics } from "~/data/musicCourses";

function Courses() {
  const [courseFilter, setCourseFilter] = createSignal("academics");
  const [filteredCourses, setFilteredCourses] = createSignal(academics)

  onMount(()=>{
    setFilteredCourses(academics)
  })

  const handleCourseFilter = (courseName) => {
    setCourseFilter(courseName)
    if ( courseFilter() === 'academics' ) {
      setFilteredCourses(academics)
    } else {
      setFilteredCourses(musics)
    }
  }

  return (
    <div class="min-h-screen bg-gray-100 font-roboto">
      {/* <Navbar /> */}
      
      <main class="pt-24 pb-16 px-4">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold text-center mb-12 font-open-sans text-[#2b60ff]">
            Our Courses
          </h1>

          <div class="grid grid-cols-2 text-lg bg-zinc-300 border-2 border-blue-400 rounded-3xl w-[260px] mb-4 mx-auto">
            <button 
              onClick={()=>handleCourseFilter("academics")}
              class={`text-bold p-2 ${courseFilter()==='academics'?'bg-blue-700 text-white rounded-3xl':''} `}>
              Academics
            </button>
            <button 
              onClick={()=>handleCourseFilter("musics")}
              class={`text-bold p-2 ${courseFilter()==='musics'?'bg-blue-700 text-white rounded-3xl':''} `}>
              Musics
            </button>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <For each={filteredCourses()} >
            {(course, index) => (
              <Motion
                key={index}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.01 }}
              >
                <Card className="p-0 min-h-72">
                  <img src={course.image} alt={course.title} class="rounded-t-md w-full sm:h-44 h-52 object-cover" />  
                  <CardContent className="flex flex-col">
                    <div class="-mt-8 -mx-4 px-4 py-1 w-fit rounded-e-2xl bg-gray-100">
                     <h3 class="text-lg mb-1 font-semibold text-blue-800 truncate">{course.title}</h3>
                    </div>
                    <div class='flex flex-col mb-2'>
                      <p class="text-zinc-700 text-sm">{course.description[0]}</p>
                      <p class="text-sm text-zinc-700">class : {course.age_group}</p>
                    </div>
                    <div class="flex justify-between items-center mb-0 mt-auto">
                      {/* <p class="text-gray-600 mb-1 text-sm">class {course.age_group}</p> */}
                      <Show when={courseFilter() === 'academics'} >
                        <div>
                          <p class="font-semibold text-red-500">{course.fee}</p>
                          <p class="text-orange-600 mt-auto text-xs text-end">{course.trial_classes}</p>
                        </div>
                      </Show>
                      <Show when={courseFilter() === 'musics'}>
                        <p class="text-sm text-zinc-700">1-ON-1 Classes/ Group Classes</p>
                      </Show>
                      <A href={`/course/details/${index+1}`} class="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600/90 transition-colors">
                        Learn More
                      </A>
                    </div>
                  </CardContent>
                </Card>
              </Motion>
            )}
            </For>
          </div>
        </div>
      </main>

      <section class="py-16 px-4 bg-gradient-to-t from-blue-800/90 to-[#2b60ff]/90 text-white ">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 font-open-sans">Ready to Start Learning?</h2>
          <p class="text-xl mb-8 opacity-90">Choose a course and begin your educational journey today!</p>
          <A href='/pricing' class="bg-orange-600 hover:bg-orange-600/90 text-white px-8 py-3 shadow-lg rounded-full text-lg transition-colors">
            View Pricing Plans
          </A>
        </div>
      </section>
    </div>
  );
}

export default Courses;
