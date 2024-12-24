// // import { createSignal, onMount, For } from "solid-js";
// // import { Motion } from "@motionone/solid";
// // import Navbar from "~/components/Navbar";

// // const advantages = [
// //   {
// //     title: "Conceptual clarity through visualization",
// //     description: "Learn complex concepts through interactive visualizations",
// //     image: "https://source.unsplash.com/400x300/?education,learning"
// //   },
// //   {
// //     title: "Personalized learning programs",
// //     description: "Get customized learning paths tailored to your needs",
// //     image: "https://source.unsplash.com/400x300/?student,study"
// //   },
// //   {
// //     title: "Unmatched individual attention",
// //     description: "Receive one-on-one guidance from expert teachers",
// //     image: "https://source.unsplash.com/400x300/?teacher,classroom"
// //   }
// // ];

// // const stats = [
// //   { value: "150+ Million", label: "Downloads" },
// //   { value: "4.7+ Star", label: "Ratings" },
// //   { value: "1701+ Cities", label: "Coverage" },
// //   { value: "71 mins avg.", label: "Time spent daily" }
// // ];

// // const testimonials = [
// //   {
// //     name: "Mother of Samantha",
// //     text: "BYJU'S has helped my daughter excel in her studies...",
// //     image: "https://source.unsplash.com/100x100/?portrait,smile"
// //   },
// //   {
// //     name: "Father of Roshan",
// //     text: "The personalized attention has made a huge difference...",
// //     image: "https://source.unsplash.com/100x100/?portrait,study"
// //   },
// //   {
// //     name: "Sara Patel",
// //     text: "My grades have improved significantly since joining...",
// //     image: "https://source.unsplash.com/100x100/?portrait,student"
// //   }
// // ];

// // function App() {
// //   const [currentSlide, setCurrentSlide] = createSignal(0);

// //   onMount(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   });

// //   return (
// //     <div class="min-h-screen bg-white font-roboto">
// //       <Navbar />
      
// //       {/* Advantages Section */}
// //       <section class="pt-32 pb-16 px-4">
// //         <div class="container mx-auto">
// //           <h2 class="text-3xl font-open-sans font-bold text-center mb-12">
// //             Get the BYJU'S advantage
// //           </h2>
// //           <div class="grid md:grid-cols-3 gap-8">
// //             <For each={advantages}>
// //               {(advantage, index) => (
// //                 <Motion
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index() * 0.2 }}
// //                 >
// //                   <div class="text-center">
// //                     <img
// //                       src={advantage.image}
// //                       alt={advantage.title}
// //                       class="w-full h-64 object-cover rounded-lg mb-4"
// //                     />
// //                     <h3 class="text-xl font-semibold mb-2">{advantage.title}</h3>
// //                     <p class="text-gray-600">{advantage.description}</p>
// //                   </div>
// //                 </Motion>
// //               )}
// //             </For>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section class="py-16 px-4 bg-gradient-to-r from-[#7034a1] to-[#481d70]">
// //         <div class="container mx-auto">
// //           <h2 class="text-3xl font-open-sans font-bold text-center text-white mb-12">
// //             Our students and parents love us
// //           </h2>
// //           <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
// //             <For each={stats}>
// //               {(stat, index) => (
// //                 <Motion
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index() * 0.2 }}
// //                 >
// //                   <div class="text-white">
// //                     <div class="text-4xl font-bold mb-2">{stat.value}</div>
// //                     <div class="text-sm opacity-80">{stat.label}</div>
// //                   </div>
// //                 </Motion>
// //               )}
// //             </For>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section class="py-16 px-4">
// //         <div class="container mx-auto">
// //           <div class="relative overflow-hidden">
// //             <div 
// //               class="flex transition-transform duration-500"
// //               style={`transform: translateX(-${currentSlide() * 100}%)`}
// //             >
// //               <For each={testimonials}>
// //                 {(testimonial) => (
// //                   <div class="w-full flex-shrink-0 px-4">
// //                     <div class="max-w-2xl mx-auto text-center">
// //                       <img
// //                         src={testimonial.image}
// //                         alt={testimonial.name}
// //                         class="w-20 h-20 rounded-full mx-auto mb-4"
// //                       />
// //                       <p class="text-lg mb-4">{testimonial.text}</p>
// //                       <p class="font-semibold">{testimonial.name}</p>
// //                     </div>
// //                   </div>
// //                 )}
// //               </For>
// //             </div>

// //             {/* Navigation Dots */}
// //             <div class="flex justify-center mt-6 space-x-2">
// //               <For each={testimonials}>
// //                 {(_, index) => (
// //                   <button
// //                     onClick={() => setCurrentSlide(index)}
// //                     class={`w-3 h-3 rounded-full transition-colors ${
// //                       currentSlide() === index 
// //                         ? 'bg-[#7034a1]' 
// //                         : 'bg-gray-300'
// //                     }`}
// //                   />
// //                 )}
// //               </For>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section class="py-16 px-4 bg-[#481d70]">
// //         <div class="container mx-auto text-center">
// //           <button 
// //             class="bg-[#ff8200] hover:bg-[#ff8200]/90 text-white px-8 py-3 rounded-full text-lg"
// //           >
// //             View all courses
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default App;

// // index.jsx
// // import { createSignal } from "solid-js";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { motion } from "framer-motion"; // Solid doesn't have native motion, so still using framer-motion for animations
// // import Image from "solid-js/web";
// // import Navbar from "~/components/Navbar";
// // import Button from "~/components/Button";

// // const partners = [
// //   "Fintech2.0", "Gamify", "Familia", "ConsultAI", "Canva", "Bioincy", "Accfirm"
// // ];

// // const categories = [
// //   "Basic", "Projects", "Math", "Shop", "Development", "Music"
// // ];

// // const courses = [
// //   {
// //     title: "Introduction to SQL",
// //     instructor: "Dr. Sarah Wilson",
// //     price: "$99",
// //     rating: 4.8,
// //     image: "/placeholder.svg?height=200&width=300"
// //   },
// //   {
// //     title: "Advanced Data Structures",
// //     instructor: "Prof. James Chen",
// //     price: "$149",
// //     rating: 4.9,
// //     image: "/placeholder.svg?height=200&width=300"
// //   },
// //   {
// //     title: "Web Development Bootcamp",
// //     instructor: "Emily Parker",
// //     price: "$199",
// //     rating: 5.0,
// //     image: "/placeholder.svg?height=200&width=300"
// //   },
// //   {
// //     title: "Machine Learning Basics",
// //     instructor: "David Kumar",
// //     price: "$129",
// //     rating: 4.7,
// //     image: "/placeholder.svg?height=200&width=300"
// //   }
// // ];

// // const stats = [
// //   { value: "45K+", label: "Active Students" },
// //   { value: "378+", label: "Total Courses" },
// //   { value: "25K+", label: "Reviews" },
// //   { value: "235+", label: "Instructors" }
// // ];

// // export default function Home() {
// //   return (
// //     <div class="min-h-screen bg-white">
// //       <Navbar />

// //       {/* Hero Section */}
// //       <section class="relative bg-gradient-to-r from-[#7034a1] to-[#481d70] pt-32 pb-16 px-4">
// //         <div class="container mx-auto">
// //           <div class="grid lg:grid-cols-2 gap-12 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5 }}
// //               class="text-white"
// //             >
// //               <h1 class="text-4xl md:text-6xl font-bold mb-6">
// //                 Upgrade your skills and knowledge
// //               </h1>
// //               <p class="text-xl mb-8 opacity-90">
// //                 Learn from industry experts and advance your career with our comprehensive courses
// //               </p>
// //               <Button 
// //                 size="lg" 
// //                 class="bg-[#ff8200] hover:bg-[#ff8200]/90 text-white"
// //               >
// //                 Get Started
// //               </Button>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5 }}
// //               class="relative"
// //             >
// //               <Image
// //                 src="/placeholder.svg?height=600&width=500"
// //                 alt="Student learning"
// //                 width={500}
// //                 height={600}
// //                 class="rounded-lg shadow-xl"
// //               />
// //               <div class="absolute inset-0 bg-gradient-to-t from-[#481d70]/50 to-transparent rounded-lg" />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Partners Section */}
// //       <section class="bg-[#481d70] py-8 px-4">
// //         <div class="container mx-auto">
// //           <div class="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
// //             {partners.map((partner, index) => (
// //               <motion.div
// //                 key={partner}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: index * 0.1 }}
// //                 class="text-white font-semibold"
// //               >
// //                 {partner}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Categories */}
// //       <section class="py-16 px-4">
// //         <div class="container mx-auto">
// //           <h2 class="text-3xl font-bold text-center mb-12">Popular Category</h2>
// //           <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// //             {categories.map((category, index) => (
// //               <motion.div
// //                 key={category}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ delay: index * 0.1 }}
// //                 whileHover={{ scale: 1.05 }}
// //                 class="group"
// //               >
// //                 <Card class="border-2 border-[#7034a1]/10 hover:border-[#7034a1]">
// //                   <CardContent class="p-4 text-center">
// //                     <h3 class="font-semibold">{category}</h3>
// //                   </CardContent>
// //                 </Card>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Latest Courses */}
// //       <section class="py-16 px-4 bg-gray-50">
// //         <div class="container mx-auto">
// //           <h2 class="text-3xl font-bold text-center mb-12">Latest Courses</h2>
// //           <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {courses.map((course, index) => (
// //               <motion.div
// //                 key={course.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: index * 0.2 }}
// //                 class="group"
// //               >
// //                 <Card>
// //                   <CardContent class="p-0">
// //                     <Image
// //                       src={course.image}
// //                       alt={course.title}
// //                       width={300}
// //                       height={200}
// //                       class="w-full object-cover h-48"
// //                     />
// //                     <div class="p-4">
// //                       <h3 class="font-semibold mb-2">{course.title}</h3>
// //                       <p class="text-sm text-gray-600 mb-2">{course.instructor}</p>
// //                       <div class="flex justify-between items-center">
// //                         <span class="text-[#7034a1] font-bold">{course.price}</span>
// //                         <span class="text-sm text-gray-600">⭐ {course.rating}</span>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// import { motion } from "framer-motion"
// import Button from "~/components/Button"
// import { Navbar } from "~/components/Navbar"

// const partners = [
//   "Fintech2.0",
//   "Gamify",
//   "Familia",
//   "ConsultAI",
//   "Canva",
//   "Bioincy",
//   "Accfirm"
// ]

// const categories = [
//   "Basic",
//   "Projects",
//   "Math",
//   "Shop",
//   "Development",
//   "Music"
// ]

// const courses = [
//   {
//     title: "Introduction to SQL",
//     instructor: "Dr. Sarah Wilson",
//     price: "$99",
//     rating: 4.8,
//     image: "/placeholder.svg?height=200&width=300"
//   },
//   {
//     title: "Advanced Data Structures",
//     instructor: "Prof. James Chen",
//     price: "$149",
//     rating: 4.9,
//     image: "/placeholder.svg?height=200&width=300"
//   },
//   {
//     title: "Web Development Bootcamp",
//     instructor: "Emily Parker",
//     price: "$199",
//     rating: 5.0,
//     image: "/placeholder.svg?height=200&width=300"
//   },
//   {
//     title: "Machine Learning Basics",
//     instructor: "David Kumar",
//     price: "$129",
//     rating: 4.7,
//     image: "/placeholder.svg?height=200&width=300"
//   }
// ]

// const stats = [
//   { value: "45K+", label: "Active Students" },
//   { value: "378+", label: "Total Courses" },
//   { value: "25K+", label: "Reviews" },
//   { value: "235+", label: "Instructors" }
// ]

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-[#7034a1] to-[#481d70] pt-32 pb-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-white"
//             >
//               <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                 Upgrade your skills and knowledge
//               </h1>
//               <p className="text-xl mb-8 opacity-90">
//                 Learn from industry experts and advance your career with our comprehensive courses
//               </p>
//               <Button 
//                 size="lg" 
//                 className="bg-[#ff8200] hover:bg-[#ff8200]/90 text-white"
//               >
//                 Get Started
//               </Button>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="relative"
//             >
//               <img
//                 src="/placeholder.svg?height=600&width=500"
//                 alt="Student learning"
//                 width={500}
//                 height={600}
//                 className="rounded-lg shadow-xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#481d70]/50 to-transparent rounded-lg" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="bg-[#481d70] py-8 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
//             {partners.map((partner, index) => (
//               <motion.div
//                 key={partner}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-white font-semibold"
//               >
//                 {partner}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Popular Category</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="group"
//               >
//                 {/* <Card className="border-2 border-[#7034a1]/10 hover:border-[#7034a1]"> */}
//                   {/* <CardContent className="p-4 text-center"> */}
//                     <h3 className="font-semibold">{category}</h3>
//                   {/* </CardContent> */}
//                 {/* </Card> */}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Latest Courses */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Latest Courses</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {courses.map((course, index) => (
//               <motion.div
//                 key={course.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="group"
//               >
//                 {/* <Card> */}
//                   {/* <CardContent className="p-0"> */}
//                     <img
//                       src={course.image}
//                       alt={course.title}
//                       width={300}
//                       height={200}
//                       className="w-full object-cover h-48"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-semibold mb-2">{course.title}</h3>
//                       <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
//                       <div className="flex justify-between items-center">
//                         <span className="text-[#7034a1] font-bold">{course.price}</span>
//                         <span className="text-sm text-gray-600">⭐ {course.rating}</span>
//                       </div>
//                     </div>
//                   {/* </CardContent> */}
//                 {/* </Card> */}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-4 bg-[#7034a1] text-white">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="text-4xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-sm opacity-80">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-gradient-to-r from-[#481d70] to-[#7034a1]">
//         <div className="container mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-6">Start your learning journey today</h2>
//           <p className="text-xl mb-8 opacity-90">Join thousands of students already learning with us</p>
//           <Button 
//             size="lg" 
//             className="bg-[#ff8200] hover:bg-[#ff8200]/90 text-white"
//           >
//             Enroll Now
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

