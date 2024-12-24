import { Motion } from "@motionone/solid";
import { 
  HiOutlineAcademicCap, 
  HiOutlineBanknotes, 
  HiOutlineBookmark, 
  HiOutlineBookOpen, 
  HiOutlineChartBar, 
  HiOutlineFolderOpen, 
  HiOutlineHandThumbUp, 
  HiOutlineHome, 
  HiOutlinePresentationChartLine, 
  HiOutlineQuestionMarkCircle, 
  HiOutlineVideoCamera 
} from "solid-icons/hi";
import { createEffect, createSignal } from "solid-js";

const Benefits = () => {

const BenefitsData = [
  { id: 1, text: "Recorded Classes: Access lessons anytime, anywhere", icon: <HiOutlineVideoCamera class="w-6 h-6 " /> },
  { id: 2, text: "Mock / Weekly Tests: Simulate actual exams for confidence boost and track progress", icon: <HiOutlineQuestionMarkCircle class="w-6 h-6 " /> },
//   { id: 3, text: "Weekly Tests: Track progress and identify areas for improvement", icon: <HiOutlineBookmark class="w-6 h-6 " /> },
  { id: 4, text: "Homework Assistance: Guided practice for deeper understanding", icon: <HiOutlineHome class="w-6 h-6 " /> },
  { id: 5, text: "Study Materials: Comprehensive notes and resources", icon: <HiOutlineBookOpen class="w-6 h-6 " /> },
  { id: 5, text: "Revision Classes: Reinforce learning with additional review sessions", icon: <HiOutlineFolderOpen class="w-6 h-6" /> },
  { id: 6, text: "Expert Instruction: Learn from seasoned professionals", icon: <HiOutlinePresentationChartLine class="w-6 h-6 " /> },
  { id: 7, text: "Secure Payment Gateway: Safe and secure transactions", icon: <HiOutlineBanknotes class="w-6 h-6 " /> },
  { id: 8, text: "User-Friendly Interface: Easy navigation", icon: <HiOutlineHandThumbUp class="w-6 h-6 " /> },
  { id: 9, text: "Full Counselor Support: Guided academic and career planning", icon: <HiOutlineChartBar class="w-6 h-6 " /> },
  { id: 10, text: "Dual certification: Recognized Board/University + CLASSWiX (For Music Courses)", icon: <HiOutlineAcademicCap class="w-6 h-6 " /> }
];
  
  // Signal to track flipped state (No type annotations needed in JavaScript)
  const [flippedTiles, setFlippedTiles] = createSignal([]);

  // CreateEffect to randomly flip tiles every 2 seconds
  createEffect(() => {
    const interval = setInterval(() => {
      const tileToFlip = Math.floor(Math.random() * BenefitsData.length);
      setFlippedTiles((prev) => {
        if (prev.includes(tileToFlip)) {
          return prev.filter(id => id !== tileToFlip);  // Remove flip if already flipped
        } else {
          return [...prev, tileToFlip];  // Add tile ID to flipped array
        }
      });
    }, 2000);

    return () => clearInterval(interval);  // Cleanup the interval on component unmount
  });

  return (
    <section class="px-8 md:px-20 lg:px-36 py-8 bg-gradient-to-b from-blue-600 to-blue-200">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-4">
      {BenefitsData.map((item) => {
        // Dynamic layouts based on ID
        const layouts = {
            1:  "col-span-1 row-span-1",
            2:  "col-span-1 row-span-1 md:col-span-2",
            3:  "col-span-1 row-span-1",
            4:  "col-span-1 row-span-1",
            5:  "col-span-1 row-span-1",
            6:  "col-span-1 row-span-1",
            7:  "col-span-1 row-span-1",
            8:  "col-span-1 row-span-1",
            9:  "col-span-1 row-span-1",
            10: "col-span-1 row-span-1"
          };

          // Dynamic icon positions
          const iconPositions = {
            1: "top-4 right-4",
            2: "bottom-4 left-4",
            3: "top-4 left-4",
            4: "bottom-4 right-4",
            5: "top-1/2 right-4 -translate-y-1/2",
            6: "top-1/2 left-4 -translate-y-1/2",
            7: "top-4 left-1/2 -translate-x-1/2",
            8: "bottom-4 left-1/2 -translate-x-1/2",
            9: "top-4 right-4",
            10: "bottom-4 right-4"
          };
          return (
            <Motion.div
                key={item.id}
                class={`relative overflow-hidden rounded-2xl min-h-52 p-6 bg-orange-100 ${layouts[item.id]}`}
                style={{ perspective: "1000px" }}  // Necessary for 3D flip
                animate={{
                    rotateY: flippedTiles().includes(item.id) ? 360 : 0,  // Flip logic
                    transition: { duration: 0.5 }  // Smooth animation
                }}
                >

                {/* Icon */}
                <div class={`absolute ${iconPositions[item.id]}`}>
                    {item.icon}
                </div>

                {/* {[1, 3, 6, 9].includes(item.id) && (
                  <div className="mt-2 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=100&width=150"
                      alt=""
                      className="w-full h-16 object-cover"
                    />
                  </div>
                )} */}
                
                {/* Content */}
                <div class="h-full flex flex-col justify-center items-center">
                <h3 class="text-xl font-semibold mb-2">{item.text.split(":")[0]}</h3>
                <p class="text-sm">{item.text.split(":")[1]}</p>
                </div>
          </Motion.div>
          )
        })}
      </div>
    </section>
  )

};

export default Benefits;

