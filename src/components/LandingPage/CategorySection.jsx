import { A } from '@solidjs/router';
import Card from '../Card'
import CardContent from '../CardContent'
import { Motion } from '@motionone/solid'

const categories = [
  { icon: "/icons/guitar.png", bg:"bg-red-600", name: "Music" },
  { icon: "/icons/earth.png", bg:"bg-green-600", name: "Social Studies" },
  { icon: "/icons/abacus.png", bg:"bg-orange-600", name: "Mathematics" },
  { icon: "/icons/chemical.png", bg:"bg-violet-600", name: "Science" },
  { icon: "/icons/eng.png", bg:"bg-blue-600", name: "English and Grammar" },
  { icon: "/icons/technology.png", bg:"bg-zinc-600", name: "Aptitude and Reasoning" }
];

export default function CategorySection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="rounded p-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses On</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`group`}
            >
              <Card 
                className={`h-full border-2 border-[#6833ff]/10 hover:border-[#2b4eff] hover:bg-opacity-20 ${category.bg} bg-opacity-10`}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${category.bg} bg-opacity-10`}>
                      <img 
                        src={category.icon} 
                        alt={category.name} 
                        className="w-8 h-8 object-contain" 
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                </CardContent>
              </Card>
            </Motion.div>
          ))}
        </div>
        <div class='flex justify-center align-middle py-6'>
          <A href="/courses" class='px-6 py-1.5 rounded-lg shadow bg-gradient-to-tr from-purple-600 to-blue-700 hover:shadow-xl text-white font-semibold' >
            Start Learing Today
          </A>
        </div>
      </div>
    </section>
  )
}