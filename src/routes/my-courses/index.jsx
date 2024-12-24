import { For } from "solid-js";
// import { HiSolidAcademicCap, HiSolidVideoCamera } from "solid-icons/hi";

const courses = [
  { id: 1, title: "SQL Basics", progress: 75, nextClass: "2023-07-10 14:00" },
  { id: 2, title: "Advanced SQL Queries", progress: 40, nextClass: "2023-07-12 15:30" },
  { id: 3, title: "Database Design with SQL", progress: 10, nextClass: "2023-07-14 13:00" },
];

function MyCourses() {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">My Courses</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <For each={courses}>
          {(course) => (
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">{course.title}</h2>
                <div class="flex items-center mb-4">
                  {/* <HiSolidAcademicCap class="w-5 h-5 text-violet-600 mr-2" /> */}
                  <span>Progress: {course.progress}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div class="bg-violet-600 h-2.5 rounded-full" style={`width: ${course.progress}%`}></div>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  {/* <HiSolidVideoCamera class="w-5 h-5 mr-2" /> */}
                  <span>Next live class: {course.nextClass}</span>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right">
                <button class="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
                  Continue Learning
                </button>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default MyCourses;

