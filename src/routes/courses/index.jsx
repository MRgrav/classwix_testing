// import { For } from "solid-js";
// import { HiSolidStar } from "solid-icons/hi";
// import { A } from "@solidjs/router";

// const courses = [
//   { id: 1, title: "SQL Basics", rating: 4.5, students: 1234, price: 49.99 },
//   { id: 2, title: "Advanced SQL Queries", rating: 4.7, students: 987, price: 69.99 },
//   { id: 3, title: "Database Design with SQL", rating: 4.6, students: 1567, price: 59.99 },
//   { id: 4, title: "SQL for Data Analysis", rating: 4.8, students: 2345, price: 79.99 },
//   { id: 5, title: "SQL Server Administration", rating: 4.4, students: 876, price: 89.99 },
//   { id: 6, title: "SQL Performance Tuning", rating: 4.9, students: 654, price: 99.99 },
// ];

// function Courses() {
//   return (
//     <div class="container mx-auto px-4 py-8 mt-10">
//       <h1 class="text-3xl font-bold mb-8">Available Courses</h1>
//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <For each={courses}>
//           {(course) => (
//             <A href={`/course/${course.id}`} class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <img src={`https://picsum.photos/seed/${course.id}/400/250`} alt={course.title} class="w-full h-48 object-cover" />
//               <div class="p-4">
//                 <h2 class="text-xl font-semibold mb-2">{course.title}</h2>
//                 <div class="flex items-center mb-2">
//                   <HiSolidStar class="text-yellow-400 w-5 h-5 mr-1" />
//                   <span>{course.rating}</span>
//                   <span class="text-gray-600 text-sm ml-2">({course.students} students)</span>
//                 </div>
//                 <div class="text-violet-600 font-bold">${course.price}</div>
//               </div>
//             </A>
//           )}
//         </For>
//       </div>
//     </div>
//   );
// }

// export default Courses;


import { createSignal } from 'solid-js';
import { Motion } from "@motionone/solid";
import { A } from '@solidjs/router';
import Card from '~/components/Card';
import CardContent from '~/components/CardContent';
import { courses } from '~/data/courses';

function Courses() {
  return (
    <div class="min-h-screen bg-gray-100 font-roboto">
      {/* <Navbar /> */}
      
      <main class="pt-24 pb-16 px-4">
        <div class="container mx-auto">
          <h1 class="text-4xl font-extrabold text-center mb-12 font-open-sans text-[#2b60ff]">
            Our Courses
          </h1>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Motion
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-0 min-h-96">
                  <img src={course.image} alt={course.title} class="rounded-t-md w-full sm:h-44 h-52 object-cover" />  
                  <CardContent className="flex flex-col">
                    <div class="-mt-8 -mx-4 px-4 py-1 w-fit rounded-e-2xl bg-gray-100">
                     <h3 class="text-lg mb-1 text-[#0e2057] truncate">{course.title}</h3>
                    </div>
                    <div class='grid grid-cols-2 mb-2'>
                      <p class="font-semibold text-red-500">{course.fee}</p>
                      <p class="text-orange-600 mt-auto text-sm text-end">{course.trial_classes}</p>
                    </div>
                    <div class="flex justify-between items-center mb-0 mt-auto">
                      <p class="text-gray-600 mb-1 text-sm">class {course.age_group}</p>
                      <A href={`/course/details/${index+1}`} class="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600/90 transition-colors">
                        Learn More
                      </A>
                    </div>
                  </CardContent>
                </Card>
                {/* <div class="bg-white rounded-lg shadow-md overflow-hidden md:h-[380px]">
                  <img src={course.image} alt={course.title} class="w-full h-48 object-cover" />
                  <div class="p-5 flex flex-col justify-between">
                    <div>
                      <h3 class="text-xl font-semibold mb-2 text-[#2b60ff]">{course.title}</h3>
                      <p class="text-gray-600 mb-4">{course.description}</p>
                    </div>
                    <div class="flex justify-between items-center mb-0 mt-auto">
                      <span class="text-sm text-gray-500">{course.level}</span>
                      <button class="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600/90 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div> */}
              </Motion>
            ))}
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
