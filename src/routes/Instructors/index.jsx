import { For, createSignal } from 'solid-js';
import TeacherCard from '~/components/TeacherCard';
import ProfileFrame from '~/components/TecherSection/ProfileFrame';

// Generate more sample instructors to demonstrate scalability
const generateInstructors = (count) => {
  const departments = [
    "Academic Music Theory",
    "Vocal Performance", 
    "Instrumental Studies", 
    "Music Technology",
    "Composition",
    "Jazz Studies",
    "World Music"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Instructor ${i + 1}`,
    department: departments[i % departments.length],
    education: `Degree in Musical Arts ${i + 1}`,
    specialty: `Specialization ${i + 1}`,
    bio: `A talented musician with extensive experience in musical education.`,
    image: `/images/std3434.png?${i}`
  }));
};

const InstructorsPage = () => {
  const instructorsData = generateInstructors(50);
  const [activeFilter, setActiveFilter] = createSignal("All");
  const [selectedInstructor, setSelectedInstructor] = createSignal(null);

  const departments = [
    "All",
    ...new Set(instructorsData.map(i => i.department))
  ];

  const filteredInstructors = () => {
    return activeFilter() === "All" 
      ? instructorsData 
      : instructorsData.filter(instructor => instructor.department === activeFilter());
  };

  return (
    <div class="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <div class="text-center mb-8 mt-20">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Musical Mentors
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A diverse ensemble of passionate educators transforming musical potential
        </p>
      </div>

      {/* Department Filter */}
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <For each={departments}>
          {(dept) => (
            <button
              class={`
                px-4 py-2 rounded-full text-sm font-medium transition duration-300
                ${activeFilter() === dept 
                  ? 'bg-[#2b60ff] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
              onClick={() => setActiveFilter(dept)}
            >
              {dept}
            </button>
          )}
        </For>
      </div>

      {/* Instructors Grid with Blob Shapes */}
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <For each={filteredInstructors()}>
          {(instructor) => (
            // <ProfileFrame 
            //   image={`/images/std3434.png`} 
            //   name={instructor.name}
            //   subject={instructor.department}
            // />
            <TeacherCard 
              image="/images/std3434.png"
              name={instructor.name}
              department={instructor.department}
              education={instructor.education}
            />
          )}
        </For>
      </div>

      {/* Instructor Details Modal */}
      {selectedInstructor() && (
        <div 
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedInstructor(null)}
        >
          <div 
            class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
            style={{
              "border-radius": "30% 70% 54% 46% / 30% 30% 70% 70%"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div class="text-center">
              <div 
                class="w-40 h-40 mx-auto mb-4 overflow-hidden"
                style={{
                  "border-radius": "30% 70% 54% 46% / 30% 30% 70% 70%"
                }}
              >
                <img 
                  src={selectedInstructor().image} 
                  alt={selectedInstructor().name} 
                  class="w-full h-full object-cover"
                />
              </div>
              <h2 class="text-2xl font-bold text-gray-800 mb-1">
                {selectedInstructor().name}
              </h2>
              <p class="text-gray-600 mb-4">{selectedInstructor().department}</p>
              
              <div class="text-left space-y-2">
                <p>
                  <span class="font-semibold text-gray-700">Education:</span>{' '}
                  <span class="text-gray-600">{selectedInstructor().education}</span>
                </p>
                <p>
                  <span class="font-semibold text-gray-700">Specialty:</span>{' '}
                  <span class="text-gray-600">{selectedInstructor().specialty}</span>
                </p>
                <p class="italic text-gray-600 mt-4">
                  {selectedInstructor().bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorsPage;