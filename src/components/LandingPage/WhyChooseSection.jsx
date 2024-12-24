import { createSignal, onMount } from 'solid-js';
import { Motion, Presence } from '@motionone/solid';
import { HiSolidBookOpen, HiSolidUserGroup, HiSolidClock, HiSolidPlay } from 'solid-icons/hi';

const FeatureCard = (props) => {
  const [isVisible, setIsVisible] = createSignal(false);

  onMount(() => {
    setIsVisible(true);
  });

  return (
    <Presence>
      {isVisible() && (
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <props.icon class="w-12 h-12 text-indigo-600 mb-4" />
          <h3 class="text-xl font-semibold mb-2">{props.title}</h3>
          <p class="text-gray-600">{props.description}</p>
        </Motion>
      )}
    </Presence>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section class="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          class="text-center mb-12"
        >
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose <span class="text-indigo-600">CLASSWiX</span>
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Learn Without Limits, Grow With CLASSWiX
          </p>
        </Motion>

        <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard 
            icon={HiSolidBookOpen}
            title="Comprehensive Courses"
            description="In-depth learning pathways for accelerated progress"
          />
          <FeatureCard 
            icon={HiSolidUserGroup}
            title="Expert Instructors"
            description="Instruction from renowned experts and thought leaders in their fields"
          />
          <FeatureCard 
            icon={HiSolidClock}
            title="Flexible Learning"
            description="Learn at your pace, anywhere with personalized support"
          />
          <FeatureCard 
            icon={HiSolidPlay}
            title="Revision Made Easy"
            description="Check recorded classes for revision, clarifying doubts at your convenience"
          />
        </div>

        {/* <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          class="mt-12 text-center"
        >
          <a 
            href="#" 
            class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-colors duration-300"
          >
            Start Learning Today
          </a>
        </Motion> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

