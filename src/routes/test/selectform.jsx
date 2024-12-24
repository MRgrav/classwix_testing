import { createSignal, createEffect, For } from 'solid-js';
import { HiSolidCheckCircle, HiSolidSparkles } from 'solid-icons/hi';
import { selectCourse } from '~/data/selectCourse';

const BookTrialForm = () => {
  const [category, setCategory] = createSignal('');
  const [classGroup, setClassGroup] = createSignal('');
  const [subject, setSubject] = createSignal('');

  const handleCategoryChange = (value) => {
    setCategory(value);
    setClassGroup('');
    setSubject('');
  };

  const handleClassGroupChange = (value) => {
    setClassGroup(value);
    setSubject('');
  };

  const getClassGroups = () => {
    const academicCategory = selectCourse.find(c => c.category === 'academics');
    return academicCategory ? academicCategory.classes.map(c => c['class-group']) : [];
  };

  const getSubjects = () => {
    if (category() === 'academics') {
      const academicCategory = selectCourse.find(c => c.category === 'academics');
      const selectedClass = academicCategory?.classes.find(c => c['class-group'] === classGroup());
      return selectedClass ? selectedClass.subjects.map(s => s.title) : [];
    } else if (category() === 'musics') {
      const musicCategory = selectCourse.find(c => c.category === 'musics');
      return musicCategory ? musicCategory.subjects.map(s => s.title) : [];
    }
    return [];
  };

  return (
    <div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-center text-blue-900 mb-6">Book a Trial Class</h2>
        <form class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium text-blue-900">Select Category</label>
            <select
              class="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">Choose category</option>
              <option value="academics">Academic</option>
              <option value="musics">Music</option>
            </select>
          </div>

          {category() === 'academics' && (
            <div class="space-y-2">
              <label class="text-sm font-medium text-blue-900">Select Class</label>
              <select
                class="w-full p-2 border border-gray-300 rounded-md"
                onChange={(e) => handleClassGroupChange(e.target.value)}
              >
                <option value="">Choose class</option>
                <For each={getClassGroups()}>
                  {(classGroup) => <option value={classGroup}>{classGroup}</option>}
                </For>
              </select>
            </div>
          )}

          {((category() === 'academics' && classGroup()) || category() === 'musics') && (
            <div class="space-y-2">
              <label class="text-sm font-medium text-blue-900">Select Subject</label>
              <select
                class="w-full p-2 border border-gray-300 rounded-md"
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">Choose subject</option>
                <For each={getSubjects()}>
                  {(subject) => <option value={subject}>{subject}</option>}
                </For>
              </select>
            </div>
          )}

          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium text-blue-900">Student Name</label>
              <input
                type="text"
                placeholder="Enter student name"
                class="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-blue-900">Student Age</label>
              <input
                type="number"
                placeholder="Enter age"
                class="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-blue-900">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Book Trial Class
          </button>
        </form>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const features = [
    "Recorded Classes: Access lessons anytime, anywhere",
    "Mock Tests: Simulate actual exams for confidence boost",
    "Weekly Tests: Track progress and identify areas for improvement",
    "Homework Assistance: Guided practice for deeper understanding",
    "Study Materials: Comprehensive notes and resources",
    "Revision Classes: Reinforce learning with additional review sessions",
    "Career Guidance: Expert advice on career paths",
    "Personal Feedback: Tailored guidance from expert instructors",
    "Expert Instruction: Learn from seasoned professionals",
    "Secure Payment Gateway: Safe and secure transactions",
    "User-Friendly Interface: Easy navigation",
    "Full Counselor Support: Guided academic and career planning"
  ];

  const academicSubjects = [
    "Mathematics (Class 6-12)",
    "Science (Class 6-10)",
    "Social Science (Class 6-10)",
    "English and Grammar (Class 6-10)",
    "Spoken English (Class 6-7)",
    "Physics (Class 11-12)",
    "Chemistry (Class 11-12)",
    "Biology (Class 11-12)"
  ];

  const musicCourses = [
    "Hindustani Classical Vocal",
    "Western Vocal",
    "Bollywood Vocals",
    "Piano/Keyboard",
    "Guitar",
    "Flute"
  ];

  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      <div class="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl mb-4">
            Unlock Your Potential with CLASSWiX!
          </h1>
          <p class="text-xl text-blue-700 mb-8">
            Expert Education for Every Aspiration
          </p>
          <button 
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            Book a Trial Class
          </button>
        </div>

        {/* Features Grid */}
        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <For each={features}>
            {(feature) => (
              <div class="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <HiSolidCheckCircle class="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <span class="text-blue-900">{feature}</span>
              </div>
            )}
          </For>
        </div>

        {/* Pricing Plans */}
        <div class="space-y-8 mb-16">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">Pricing Plans</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-center text-blue-900 mb-2">Basic</h3>
                <p class="text-center text-xl font-bold text-orange-500 mb-6">₹1,999/month</p>
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>4 Classes per week</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Basic study materials</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Weekly tests</span>
                  </li>
                </ul>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-orange-200 relative">
              <div class="absolute top-0 right-0 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                <HiSolidSparkles class="h-4 w-4" />
                Popular
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-center text-blue-900 mb-2">Premium</h3>
                <p class="text-center text-xl font-bold text-orange-500 mb-6">₹3,999/month</p>
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>8 Classes per week</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Complete study materials</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Personal mentor</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>1-on-1 doubt clearing</span>
                  </li>
                </ul>
                <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-center text-blue-900 mb-2">Pro</h3>
                <p class="text-center text-xl font-bold text-orange-500 mb-6">₹5,999/month</p>
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>12 Classes per week</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Premium study materials</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Personal mentor</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>24/7 doubt clearing</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                    <span>Career counseling</span>
                  </li>
                </ul>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div class="space-y-8 mb-16">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">Our Courses</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-blue-900 mb-4">Academic Courses</h3>
                <ul class="space-y-2">
                  <For each={academicSubjects}>
                    {(subject) => (
                      <li class="flex items-center gap-2">
                        <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                        <span>{subject}</span>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-blue-900 mb-4">Music Courses</h3>
                <ul class="space-y-2">
                  <For each={musicCourses}>
                    {(course) => (
                      <li class="flex items-center gap-2">
                        <HiSolidCheckCircle class="h-4 w-4 text-orange-500" />
                        <span>{course}</span>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trial Class Form */}
        <div class="mb-16">
          <BookTrialForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

