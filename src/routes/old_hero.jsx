import { A } from '@solidjs/router';
import { HiSolidStar } from 'solid-icons/hi';
// import StarIcon from "../../public/icons/star.svg"

export default function Home() {
  return (
    <div class="min-h-screen">
      {/* Hero Section */}
      <header class="bg-gradient-to-r from-violet-100 to-violet-50 relative overflow-hidden">
        <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center">
            <img src="/placeholder.svg" alt="Logo" class="h-8" />
          </div>
          <div class="hidden md:flex items-center space-x-6">
            <A href="#" class="text-gray-700">Homepage</A>
            <A href="#" class="text-gray-700">Courses</A>
            <A href="#" class="text-gray-700">About</A>
            <A href="#" class="text-gray-700">Contact</A>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-700">Sign In</button>
            <button class="bg-violet-600 text-white px-4 py-2 rounded-full">Sign Up</button>
          </div>
        </nav>
        
        <div class="container mx-auto px-4 py-0 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-zinc-950">
              Upgrade your skills and knowledge.
            </h1>
            <p class="text-gray-600 mb-6">
              Learn from industry experts and advance your career with our comprehensive courses.
            </p>
            <button class="bg-violet-600 text-white px-6 py-3 rounded-full">
              Get Started
            </button>
          </div>
          <div class="md:w-1/2">
            <img 
              src="/images/std3434.png"
              alt="Student" 
              class="h-[400px]"
            />
          </div>
        </div>
      </header>

      {/* Partners Section */}
      <section class="bg-violet-700 py-8">
        <div class="container mx-auto px-4">
          <p class="text-center text-white mb-6">Trusted by over 5,000 companies and millions of learners around the world</p>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {Array(8).fill(null).map((_, i) => (
              <img 
                src="/fontawesome/svgs/solid/virus.svg?height=300&width=300" 
                alt={`Partner ${i + 1}`} 
                class="h-8 opacity-75"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <div class="text-violet-600 text-xl mb-4">Online Courses</div>
              <p class="text-gray-600 mb-4">Start learning from the world's best institutions</p>
              <button class="text-violet-600">Learn More →</button>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <div class="text-violet-600 text-xl mb-4">Expert Teachers</div>
              <p class="text-gray-600 mb-4">Learn from industry experts who are passionate about teaching</p>
              <button class="text-violet-600">Learn More →</button>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <div class="text-violet-600 text-xl mb-4">Certifications</div>
              <p class="text-gray-600 mb-4">Earn certificates recognized by top companies worldwide</p>
              <button class="text-violet-600">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section class="bg-violet-900 py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-white mb-8 text-center">Popular Category</h2>
          <div class="flex flex-wrap justify-center gap-4">
            {['Business', 'Design', 'Development', 'Marketing', 'IT & Software', 'Personal Development'].map((category) => (
              <button class="bg-violet-800 text-white px-6 py-2 rounded-full hover:bg-violet-700">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold mb-8">Latest Courses</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-zinc-800">
            {Array(8).fill(null).map((_, i) => (
              <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/english_course.jpg" 
                  alt={`Course ${i + 1}`} 
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <div class="flex items-center mb-2">
                    {Array(5).fill(null).map(() => (
                        // <img src={StarIcon} width={16} class='' alt="" srcset="" />
                        <HiSolidStar />
                    ))}
                    <span class="text-gray-600 text-sm ml-2">(5.0)</span>
                  </div>
                  <h3 class="font-semibold mb-2">Complete Web Development Course</h3>
                  <p class="text-violet-600 font-bold">199/-</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="bg-violet-900 text-white py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold mb-2">4.9k+</div>
              <div class="text-violet-300">Active Students</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">378+</div>
              <div class="text-violet-300">Total Courses</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">289+</div>
              <div class="text-violet-300">Expert Mentors</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">235+</div>
              <div class="text-violet-300">Certified Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gray-900 text-white text-center">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <div class="mb-8">
              <div class="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div class="w-8 h-8 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <h2 class="text-3xl font-bold mb-4">Start your learning journey today</h2>
            <p class="text-gray-400 mb-8">Join millions of learners from around the world</p>
            <button class="bg-violet-600 text-white px-8 py-3 rounded-full">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section class="bg-violet-100 py-0">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h2 class="text-3xl font-bold mb-4">
                Our friendly support team is here to help.
              </h2>
              <p class="text-gray-600 mb-6">
                Get in touch with our support team for any questions or concerns
              </p>
              <button class="bg-violet-600 text-white px-6 py-3 rounded-full">
                Contact Support
              </button>
            </div>
            <div class="md:w-1/2">
              <img 
                src="/images/sprt529141.png" 
                alt="Support Team" 
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">
              It's The Right One, It's The Right One, That's Education.
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Comprehensive Courses',
                'Expert Instructors',
                'Flexible Learning',
                'Career Certifications'
              ].map((feature) => (
                <div class="flex items-start">
                  <div class="bg-violet-100 p-2 rounded-lg mr-4">
                    <div class="w-6 h-6 bg-violet-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-2">{feature}</h3>
                    <p class="text-gray-600">
                      Learn at your own pace with detailed course materials
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/placeholder.svg" alt="Logo" class="h-8 mb-4" />
              <p class="text-gray-400">
                Empowering learners worldwide with quality education
              </p>
            </div>
            {['Resources', 'Support', 'Company'].map((title) => (
              <div>
                <h3 class="font-bold mb-4">{title}</h3>
                <ul class="space-y-2">
                  {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((link) => (
                    <li>
                      <a href="#" class="text-gray-400 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

