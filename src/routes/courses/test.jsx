import { createSignal, For } from 'solid-js';
import { courses } from './data.courses.jsx';

export default function Home() {
  const [filter, setFilter] = createSignal('All');

  const filteredCourses = () => {
    if (filter() === 'All') return courses;
    return courses.filter(course => course.category === filter());
  };

  return (
    <div class="min-h-screen bg-gray-100 py-16">
      {/* <header class="bg-blue-600 text-white py-6">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">COURSES</h1>
        </div>
      </header> */}

      <main class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8">
          Exceptional Courses for an Engaging Learning Experience
        </h1>
        <h2 class="text-2xl font-semibold text-center mb-12">
          Browse Courses by Categories
        </h2>

        <div class="flex justify-center space-x-4 mb-8">
          <For each={['All', 'Academic', 'Music']}>
            {(category) => (
              <button
                onClick={() => setFilter(category)}
                class={`px-4 py-2 rounded-full ${
                  filter() === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            )}
          </For>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <For each={filteredCourses()}>
            {(course) => (
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={course.coverImage}
                  alt={course.title}
                  class="w-full h-48 object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">{course.title}</h3>
                  <p class="text-sm text-gray-600 mb-4">{course.category}</p>
                  <ul class="list-disc list-inside mb-4">
                    <For each={course.highlights.slice(0, 3)}>
                      {(highlight) => <li class="text-sm">{highlight}</li>}
                    </For>
                  </ul>
                  <div class="text-sm text-gray-600">
                    <p>Duration: {course.duration}</p>
                    <p>Frequency: {course.frequency}</p>
                    <p>Language: {course.language}</p>
                  </div>
                  <div class="mt-4">
                    <p class="font-semibold">Course Fee: {course.fee}</p>
                    <p class="text-sm text-gray-600">{course.trial}</p>
                  </div>
                </div>
                <div class="bg-gray-100 p-4">
                  <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </For>
        </div>
      </main>
    </div>
  );
}
