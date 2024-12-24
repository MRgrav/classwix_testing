import { For } from "solid-js";
import Navbar from "~/components/Navbar";
import { HiSolidCheck, HiSolidClock } from "solid-icons/hi";



const assignments = [
  { id: 1, title: "SQL Basics Quiz", dueDate: "2023-07-15", completed: true },
  { id: 2, title: "Advanced Queries Project", dueDate: "2023-07-20", completed: false },
  { id: 3, title: "Database Design Exercise", dueDate: "2023-07-25", completed: false },
  { id: 4, title: "Data Analysis with SQL", dueDate: "2023-07-30", completed: false },
];

function Assignments() {
  console.log(`${HiSolidCheck} : a`)
  return (
    <div class="container mx-auto px-4 py-8">
      <Navbar />
      <h1 class="text-3xl font-bold mb-8">Assignments</h1>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <For each={assignments}>
          {(assignment) => (
            <div class="border-b last:border-b-0 p-4 flex items-center justify-between">
              <div class="flex items-center">
                <div class={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${assignment.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <HiSolidCheck class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 class="font-semibold">{assignment.title}</h2>
                  <p class="text-sm text-gray-600 flex items-center">
                    <HiSolidClock class="w-4 h-4 mr-1" />
                    Due: {assignment.dueDate}
                  </p>
                </div>
              </div>
              <button class={`px-4 py-2 rounded-lg ${assignment.completed ? 'bg-green-500 text-white' : 'bg-violet-600 text-white'}`}>
                {assignment.completed ? 'Completed' : 'Start'}
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default Assignments;

