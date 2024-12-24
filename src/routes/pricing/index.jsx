import { createSignal } from 'solid-js';
import { Motion } from "@motionone/solid";
import { A } from '@solidjs/router';

const academicPlans = [
  {
    name: "Junior Squad",
    classes: "CLASS 6-7",
    subjects: [
      { name: "Mathematics", price: 4499 },
      { name: "Science", price: 4499 },
      { name: "Social Studies", price: 4499 },
      { name: "English and Grammar + Spoken English", price: 4499 }
    ]
  },
  {
    name: "Rising Stars",
    classes: "CLASS 8-9",
    subjects: [
      { name: "Mathematics", price: 6999 },
      { name: "Science", price: 6999 },
      { name: "Social Studies", price: 6999 },
      { name: "English and Grammar", price: 6999 }
    ]
  },
  {
    name: "Board Brigade",
    classes: "CLASS 10",
    subjects: [
      { name: "Mathematics", price: 8499 },
      { name: "Science", price: 8499 },
      { name: "Social Studies", price: 8499 },
      { name: "English and Grammar", price: 8499 }
    ]
  },
  {
    name: "Seniors' Squad",
    classes: "CLASS 11-12",
    subjects: [
      { name: "Mathematics", price: 8999 },
      { name: "Physics", price: 8999 },
      { name: "Chemistry", price: 8999 },
      { name: "Biology", price: 8999 }
    ]
  }
];

const aptitudePlans = [
  { name: "CLASS 6-7", price: 1499, frequency: "2 Classes/week", duration: "3 Months" },
  { name: "CLASS 8-9", price: 2499, frequency: "2 Classes/week", duration: "3 Months" },
  { name: "CLASS 10-12", price: 2499, frequency: "2 Classes/week", duration: "3 Months" }
];

const benefits = [
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

function Pricing() {
  return (
    <div class="min-h-screen bg-gray-100 font-roboto">
      
      <main class="pt-24 pb-16 px-4">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold text-center mb-4 font-open-sans text-[#2b60ff]">
            Pricing Plan
          </h1>
          <p class="text-xl text-center mb-12 text-gray-600">
            Choose Your Plans - Upgrade your skills and knowledge
          </p>
          
          <h2 class="text-2xl font-semibold mb-6 text-[#121541]">
            One Time Payment Plans (Full Course Access)
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {academicPlans.map((plan, index) => (
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                  <div class="bg-[#2b60ff] text-white p-4 text-center">
                    <h3 class="text-xl font-semibold">{plan.name}</h3>
                    <p class="text-sm">{plan.classes}</p>
                  </div>
                  <div class="p-6">
                    {plan.subjects.map(subject => (
                      <div class="flex justify-between items-center mb-2">
                        <span>{subject.name}</span>
                        <span class="font-semibold">₹{subject.price}</span>
                      </div>
                    ))}
                    <A href='/book-a-trial' class="animate-blink w-full bg-orange-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-orange-700 transition-colors">
                      BOOK DEMO SESSION
                    </A>
                  </div>
                </div>
              </Motion>
            ))}
          </div>

          <h2 class="text-2xl font-semibold mb-6 text-[#121541]/90">
            Quantitative Aptitude & Reasoning
          </h2>

          <div class="overflow-x-auto mb-16">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead class="bg-[#2b60ff] text-white">
                <tr>
                  <th class="p-4 text-left">Class</th>
                  <th class="p-4 text-left">Price Plan</th>
                  <th class="p-4 text-left">Class Frequency</th>
                  <th class="p-4 text-left">Course Duration</th>
                </tr>
              </thead>
              <tbody>
                {aptitudePlans.map((plan, index) => (
                  <tr class={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td class="p-4">{plan.name}</td>
                    <td class="p-4">₹{plan.price}</td>
                    <td class="p-4">{plan.frequency}</td>
                    <td class="p-4">{plan.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 class="text-2xl font-semibold mb-6 text-[#121541]/90">
            BENEFITS: Unlock Your Potential with Our Online Platform!
          </h2>

          <ul class="grid md:grid-cols-2 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <li class="flex items-start">
                  <span class="text-[#ff8200] mr-2">✓</span>
                  {benefit}
                </li>
              </Motion>
            ))}
          </ul>

          <div class="bg-[#2b60ff] text-white p-8 rounded-lg text-center">
            <h2 class="text-2xl font-semibold mb-4">NEED HELP? WE'RE HERE FOR YOU!</h2>
            <p class="mb-4">
              DON'T HESITATE TO CONTACT US IF YOU NEED ANY ASSISTANCE.
              OUR DEDICATED SUPPORT TEAM IS ALWAYS READY TO HELP.
            </p>
            <p class="font-semibold">CONTACT US:</p>
            <p class='mb-3'>PHONE: +91 2269719938</p>
            <a href='https://wa.me/919401400399' class="mt-4 bg-[#ff8200] text-white px-6 py-2 rounded-full text-sm hover:bg-[#ff8200]/90 transition-colors">
              LIVE CHAT
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pricing;

