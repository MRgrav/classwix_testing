import { Motion } from "@motionone/solid";
import Card from "../Card";
import CardContent from "../CardContent";
import { createSignal } from "solid-js";


const courses = [
  {
    "title": "Mathematics",
    "image": "/images/Mathematics.png",
    "description": [
      "Develop problem-solving strategies",
      "Enhance critical thinking & analytical skills",
      "Boost academic performance"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 4,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "6-7" 
  },
  {
    "title": "Science",
    "image": "/images/Physics.jpg",
    "description": [
      "Life Sciences: Plants, Animals, and Human Body",
      "Physical Sciences: Matter, Energy, and Motion",
      "Earth Sciences: Our Planet and Climate"
    ],
    "duration": "Whole Academic year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 4,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "6-7" 
  },
  {
    "title": "Social Science",
    "image": "/images/Social Science.jpg",
    "description": [
      "History: Ancient Civilizations to Modern Times",
      "Geography: Exploring Our World",
      "Civics: Understanding Government & Citizenship"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 4,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "6-7" 
  },
  {
    "title": "English (With Grammar+ Spoken English)",
    "image": "/images/English.jpg",
    "description": [
      "Develop reading and writing skills",
      "Understand grammar fundamentals",
      "Enhance spoken English confidence"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 4,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "6-7" 
  },
  {
    "title": "Quantitative Aptitude and Reasoning",
    "image": "/images/Quatative aptitude.jpg",
    "description": [
      "Data Interpretation & Analysis",
      "Logical thinking & decision-making",
      "Pattern recognition & prediction",
      "Time management & exam strategy"
    ],
    "duration": "3 Months",
    "frequency": "2 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 1,499 +18% GST",
    "trial_classes": "2 Trial Classes: ₹ 19 only!",
    "age_group": "6-7" 
  },
  {
    "title": "Mathematics",
    "image": "/images/Mathematics.png",
    "description": [
      "Mastery of mathematical concepts",
      "Problem-solving skills & logical thinking",
      "Confidence in competitive exams & boards",
      "Strong foundation for higher studies"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 6,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "8-9" 
  },
  {
    "title": "Science",
    "image": "/images/Biology.jpg",
    "description": [
      "Mastery of scientific concepts",
      "Critical thinking & problem-solving",
      "Confidence in competitive exams & boards",
      "Foundation for STEM careers"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 6,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "8-9" 
  },
  {
    "title": "Social Studies",
    "image": "/images/Social Science.jpg",
    "description": [
      "Develop critical thinking & analytical skills",
      "Understand historical & cultural contexts",
      "Analyze geographical & economic concepts",
      "Prepare for competitive exams & boards"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 6,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "8-9" 
  },
  {
    "title": "English and Grammar",
    "image": "/images/English.jpg",
    "description": [
      "Develop reading and writing skills",
      "Understand grammar fundamentals",
      "Enhance spoken English confidence"
    ],
    "duration": "Whole Academic Year",
    "frequency": "3 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 6,499 +18% GST",
    "trial_classes": "3 Trial Classes: ₹ 49 only!",
    "age_group": "8-9" 
  },
  {
    "title": "Quantitative Aptitude and Reasoning",
    "image": "/images/Quatative aptitude.jpg",
    "description": [
      "Data Interpretation & Analysis",
      "Logical thinking & decision-making",
      "Pattern recognition & prediction",
      "Time management & exam strategy"
    ],
    "duration": "3 Months",
    "frequency": "2 classes/week",
    "class_duration": "1 hour 15 Minutes",
    "language": "English and Hindi",
    "curriculum": "NCERT Syllabus",
    "instruction_format": "Group Classes",
    "access": "Mobile App, Computer (via website)",
    "fee": "₹ 2,499 +18% GST",
    "trial_classes": "2 Trial Classes: ₹ 29 only!",
    "age_group": "8-9" 
  }
];

const courses2 = [
    {
      title: "Introduction to SQL",
      instructor: "Dr. Sarah Wilson",
      price: "₹7,500",
      rating: 4.8,
      image: "/images/Physics.jpg"
    },
    {
      title: "Advanced Data Structures",
      instructor: "Prof. James Chen",
      price: "₹11,200",
      rating: 4.9,
      image: "/images/Biology.jpg"
    },
    {
      title: "Web Development Bootcamp",
      instructor: "Emily Parker",
      price: "₹15,800",
      rating: 5.0,
      image: "/images/Keyboard.jpg"
    },
    {
      title: "Machine Learning Basics",
      instructor: "David Kumar",
      price: "₹10,700",
      rating: 4.7,
      image: "/images/Quatative aptitude.jpg"
    }
  ];


// State to track which courses are shown
const [shownCourses, setShownCourses] = createSignal([]);

// Function to toggle showing more info for a course
function handleShowMore(course) {
  setShownCourses((prev) => 
    prev.includes(course.title) 
      ? prev.filter((c) => c !== course.title) 
      : [...prev, course.title]
  );
}

// Function to check if the "Show More" info is currently displayed for a course
function isCourseShown(course) {
  return shownCourses().includes(course.title);
}

export default function LatestCourseSection() {
  console.log(courses)
  return (
    <section className="py-16 px-4 bg-gradient-to-t from-blue-700/10 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                <Card className="bg-white h-full">
                  <CardContent className="p-0 h-full">
                    <img
                      src={course.image}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="w-full object-cover h-48 rounded-md"
                    />
                    <div className="w-8 rounded-lg bg-white -mt-3 -mb-3 -translate-x-2 h-6"></div> 
                    <div className="p-4 px-0">
                      <div>
                        <h3 className="font-semibold mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#2b60ff] font-bold">{course.fee}</span> 
                        <span className="text-sm text-gray-600">⭐ {course.rating}</span>
                      </div>
                    </div>
                    <button 
                      className=" hidden mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                      onClick={() => handleShowMore(course)} 
                    >
                      Show More
                    </button>
                    {isCourseShown(course) && (
                      <div className="mt-2">
                        <p className="text-gray-600">
                          {/* {course.description.map((desc, i) => (
                            <span key={i}>{desc}<br /></span> 
                          ))} */}
                        </p>
                        <p className="text-gray-600">
                          Duration: {course.duration}<br />
                          Frequency: {course.frequency}<br />
                          Class Duration: {course.class_duration}<br />
                          Language: {course.language}<br />
                          Curriculum: {course.curriculum}<br />
                          Instruction Format: {course.instruction_format}<br />
                          Access: {course.access}<br />
                          Trial Classes: {course.trial_classes}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
