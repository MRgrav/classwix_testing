import { useParams } from "@solidjs/router";
import { HiSolidStar, HiSolidPlay } from "solid-icons/hi";
import { courses } from "~/data/courses";

function CourseDetails() {
  const params = useParams();
  console.log(useParams)
  const course = courses[params.id]
  console.log(course)

  return (
    <div class="container mx-auto px-4 py-8 pt-20 ">
      <h1 class="text-xl font-bold mb-2 text-blue-800/60">Course Title</h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-2/3">
          <div class="relative aspect-video bg-gray-200 mb-4 shadow-lg">
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="bg-[#2b60ff] text-white rounded-full p-4 hover:bg-[#2b59ee]/80 hover:scale-95">
                <HiSolidPlay class="w-8 h-8" />
              </button>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 class="text-xl font-semibold mb-2">Course Description</h2>
            <p class="text-gray-600">
              This is a detailed description of the course. It covers the main topics and what students can expect to learn.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-4">
            <h2 class="text-xl font-semibold mb-2">Course Content</h2>
            <ul class="space-y-2">
              <li class="flex items-center">
                <HiSolidPlay class="w-5 h-5 mr-2 text-orange-600" />
                <span>Introduction to SQL</span>
              </li>
              <li class="flex items-center">
                <HiSolidPlay class="w-5 h-5 mr-2 text-orange-600" />
                <span>Basic SELECT Statements</span>
              </li>
              <li class="flex items-center">
                <HiSolidPlay class="w-5 h-5 mr-2 text-orange-600" />
                <span>Filtering Data with WHERE</span>
              </li>
              {/* Add more lessons here */}
            </ul>
          </div>
        </div>
        <div class="md:w-1/3">
          <div class="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 class="text-xl font-semibold mb-2">Course Details</h2>
            <div class="flex items-center mb-2">
              <HiSolidStar class="text-yellow-400 w-5 h-5 mr-1" />
              <span>4.7</span>
              <span class="text-gray-600 text-sm ml-2">(1234 ratings)</span>
            </div>
            <p class="mb-2">2345 students enrolled</p>
            <p class="mb-2">10 hours of video content</p>
            <p class="mb-4">Last updated: June 2023</p>
            <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800/80">
              Enroll Now
            </button>
          </div>
          <div class="bg-white rounded-lg shadow-md p-4">
            <h2 class="text-xl font-semibold mb-2">Instructor</h2>
            <div class="flex items-center">
              <img src="https://picsum.photos/seed/instructor/100/100" alt="Instructor" class="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 class="font-semibold">John Doe</h3>
                <p class="text-gray-600">SQL Expert & Data Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;

