// import { createSignal, onMount, createEffect } from 'solid-js';

// const LandingPage = () => {
//   const [isVisible, setIsVisible] = createSignal(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
//   const [currentSlide, setCurrentSlide] = createSignal(0);
//   const [activeSection, setActiveSection] = createSignal({
//     hero: false,
//     features: false,
//     courses: false,
//     pricing: false,
//     tutors: false
//   });

//   const carouselImages = [
//     'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1503676260728-1f00da94ef5a?q=80&w=1200&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&h=400&fit=crop'
//   ];

//   // Auto-advance carousel
//   createEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   });

//   // Intersection Observer for section animations
//   const observeSections = () => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionName = entry.target.id;
//             setActiveSection(prev => ({ ...prev, [sectionName]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Observe sections
//     ['hero', 'features', 'courses', 'pricing', 'tutors'].forEach(section => {
//       const el = document.getElementById(section);
//       if (el) observer.observe(el);
//     });
//   };

//   onMount(() => {
//     // Trigger initial visibility
//     setTimeout(() => setIsVisible(true), 100);

//     // Setup section observations
//     observeSections();
//   });

//   const features = [
//     {
//       icon: '📚',
//       title: 'Comprehensive Curriculum',
//       description: 'Expertly designed courses covering all subjects for grades 6-12'
//     },
//     {
//       icon: '🧠',
//       title: 'Interactive Learning',
//       description: 'Engaging video lessons, quizzes, and interactive exercises'
//     },
//     {
//       icon: '📊',
//       title: 'Performance Tracking',
//       description: 'Detailed progress reports and personalized learning paths'
//     }
//   ];

//   const courseCategories = [
//     { name: 'Mathematics', grades: '6-12' },
//     { name: 'Science', grades: '6-12' },
//     { name: 'Social Studies', grades: '6-10' },
//     { name: 'English', grades: '6-12' },
//     { name: 'Computer Science', grades: '9-12' }
//   ];


//   const tutors = [
//     {
//       name: 'Dr. Emily Richards',
//       specialty: 'Mathematics',
//       degrees: ['PhD in Education', 'Master of Mathematics'],
//       experience: '10+ years teaching',
//       rating: 4.9,
//       image: 'https://effectivetuition.org/wp-content/uploads/2020/10/latest-tutor-profiles.jpg',
//       bio: 'Passionate about making mathematics accessible and engaging for students of all levels.',
//       strengths: ['Algebra', 'Calculus', 'Statistics'],
//       languages: ['English', 'Spanish']
//     },
//     {
//       name: 'Alex Thompson',
//       specialty: 'Computer Science',
//       degrees: ['MS in Computer Science', 'BS in Software Engineering'],
//       experience: '8 years industry experience',
//       rating: 4.8,
//       image: 'https://effectivetuition.org/wp-content/uploads/2020/10/latest-tutor-profiles.jpg',
//       bio: 'Former Google engineer dedicated to inspiring the next generation of tech innovators.',
//       strengths: ['Python', 'Web Development', 'AI & Machine Learning'],
//       languages: ['English', 'Mandarin']
//     },
//     {
//       name: 'Maria Rodriguez',
//       specialty: 'Science',
//       degrees: ['PhD in Biochemistry', 'Science Education Certification'],
//       experience: '12 years research and teaching',
//       rating: 5.0,
//       image: 'https://sb-cafetalk.s3.amazonaws.com/user-uploaded-files/cafetalk-optimized-66f51f6404182-901677100-1727340388.jpg',
//       bio: 'Transforming complex scientific concepts into exciting, understandable lessons.',
//       strengths: ['Biology', 'Chemistry', 'Environmental Science'],
//       languages: ['English', 'Portuguese']
//     }
//   ];

  

//   return (
//     <div class="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen overflow-x-hidden">
      

//       {/* Custom Carousel */}
//       <section class="container mx-auto px-4 py-20 relative">
//         <div class="relative w-full overflow-hidden rounded-xl">
//           <div class="flex transition-transform duration-500" 
//                style={`transform: translateX(-${currentSlide() * 100}%)`}
//           >
//             {carouselImages.map((url) => (
//               <div class="w-full flex-shrink-0">
//                 <img 
//                   src={url} 
//                   alt="Learning Landscape" 
//                   class="w-full h-64 md:h-96 object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {carouselImages.map((_, index) => (
//               <button
//                 onClick={() => setCurrentSlide(index)}
//                 class={`
//                   w-3 h-3 rounded-full 
//                   ${currentSlide() === index ? 'bg-blue-600' : 'bg-blue-200'}
//                   transition-colors
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section class="container mx-auto px-4 py-16">
//         <h2 class="text-3xl font-bold text-center mb-12">Why Choose EduQuest?</h2>
//         <div class="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div 
//               class={`
//                 bg-white p-6 rounded-xl shadow-lg text-center 
//                 transform hover:scale-105 transition-all duration-300 
//                 delay-${index * 100}
//               `}
//             >
//               <div class="text-5xl mb-4">{feature.icon}</div>
//               <h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
//               <p class="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section class="container mx-auto px-4 py-16 bg-white">
//         <h2 class="text-3xl font-bold text-center mb-12">Our Courses</h2>
//         <div class="grid md:grid-cols-3 gap-6">
//           {courseCategories.map((course) => (
//             <div 
//               class="
//                 bg-blue-50 p-6 rounded-xl shadow-md 
//                 transform hover:scale-105 transition-transform duration-300
//               "
//             >
//               <h3 class="text-xl font-semibold mb-3">{course.name}</h3>
//               <p class="text-gray-600">Grades: {course.grades}</p>
//               <button class="mt-4 text-blue-600 hover:underline transition-colors">
//                 Explore Course
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//        {/* Teacher Section  */}
//        <section id="tutors" class="container mx-auto px-4 py-16 bg-white">
//   <div class="text-center mb-12">
//     <h2 class="text-4xl font-bold text-blue-900 mb-4">Meet Our Expert Tutors</h2>
//     <p class="text-xl text-blue-700 max-w-2xl mx-auto">
//       Learn from industry professionals and academic experts who are passionate about student success.
//     </p>
//   </div>

//   <div class="grid md:grid-cols-3 gap-8">
//     {tutors.map((tutor) => (
//       <div class="flex items-center bg-blue-50 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4">
//         <div class="relative w-24 h-24 rounded-full overflow-hidden">
//           <img src={tutor.image} alt={tutor.name} class="w-full h-full object-cover" />
//           <div class="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full flex items-center text-xs">
//             <svg class="w-3 h-3 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//             </svg>
//             {tutor.rating}
//           </div>
//         </div>
//         <div class="ml-6">
//           <h3 class="text-xl font-bold text-blue-900 mb-1">{tutor.name}</h3>
//           <div class="text-blue-600 font-semibold">{tutor.specialty} Specialist</div>
//         </div>
//       </div>
//     ))}
//   </div>

//   <div class="text-center mt-12">
//     <p class="text-xl text-blue-800 mb-6">
//       Can't find the right tutor? We'll help you match with the perfect instructor.
//     </p>
//     <button class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
//       Find My Tutor
//     </button>
//   </div>
// </section>

//       {/* Pricing Section */}
//       <section class="container mx-auto px-4 py-16 bg-blue-50">
//         <h2 class="text-3xl font-bold text-center mb-12">Flexible Pricing</h2>
//         <div class="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: 'Basic',
//               price: '$9.99',
//               features: [
//                 'Access to Basic Courses',
//                 'Limited Practice Tests',
//                 'Basic Progress Tracking'
//               ],
//               buttonClass: 'bg-blue-600 text-white hover:bg-blue-700'
//             },
//             {
//               title: 'Premium',
//               price: '$19.99',
//               features: [
//                 'Full Course Access',
//                 'Unlimited Practice Tests',
//                 'Detailed Performance Analytics',
//                 'Personal Tutor Support'
//               ],
//               buttonClass: 'bg-white text-blue-600 hover:bg-blue-100'
//             },
//             {
//               title: 'Enterprise',
//               price: 'Custom',
//               features: [
//                 'School/Institutional Plans',
//                 'Bulk Licensing',
//                 'Custom Learning Solutions'
//               ],
//               buttonClass: 'bg-blue-600 text-white hover:bg-blue-700'
//             }
//           ].map((plan, index) => (
//             <div 
//               class={`
//                 bg-white p-6 rounded-xl shadow-lg text-center
//                 transform ${index === 1 ? 'scale-105' : ''} 
//                 hover:scale-110 transition-transform duration-300
//               `}
//             >
//               <h3 class="text-xl font-semibold mb-4">{plan.title}</h3>
//               <p class="text-4xl font-bold mb-4">{plan.price}</p>
//               <ul class="mb-6 space-y-2">
//                 {plan.features.map(feature => (
//                   <li>{feature}</li>
//                 ))}
//               </ul>
//               <button 
//                 class={`
//                   w-full py-3 rounded-full transition-colors
//                   ${plan.buttonClass}
//                 `}
//               >
//                 {plan.title === 'Enterprise' ? 'Contact Sales' : `Choose ${plan.title}`}
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer class="bg-blue-900 text-white py-12">
//         <div class="container mx-auto px-4 text-center">
//           <div class="mb-8">
//             <h2 class="text-2xl font-bold mb-4">EduQuest</h2>
//             <p>Transforming Education, One Student at a Time</p>
//           </div>
//           <div class="flex justify-center space-x-6 mb-8">
//             {['About', 'Courses', 'Contact', 'Privacy Policy'].map(link => (
//               <a href="#" class="hover:text-blue-300 transition-colors">{link}</a>
//             ))}
//           </div>
//           <div class="text-sm">
//             © 2024 EduQuest. All Rights Reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;