import { HiSolidStar } from "solid-icons/hi"
import { createMemo, createSignal } from "solid-js";
import Card from "~/components/Card"
import CardContent from "~/components/CardContent"

const feedbacks = [
    {
        "from":"Rita Singh (Parent of Riyanshi Singh, Grade 6)",
        "rating":"4.7",
        "message":"CLASSWiX has been a game-changer for my child! Within weeks, I saw significant improvement in her math skills. The interactive lessons and personalized feedback are exceptional."
    },
    {
        "from":"Sushmita Reddy (Parent of Rahul Reddy, Western Vocal)",
        "rating":"5",
        "message":"5/5 stars! CLASSWiX exceeded our expectations."
    },
    {
        "from":"Shivani Kumari (Parents of Karan Kumar, Keyboard)",
        "rating":"4.8",
        "message":"After trying several online platforms, we found CLASSWiX to be the most effective. Our child's grades have improved significantly."
    },


    {
        "from":"Sushmita Reddy (Parent of Rahul Reddy, Western Vocal)",
        "rating":"5",
        "message":"5/5 stars! CLASSWiX exceeded our expectations."
    },
    {
        "from":"Shivani Kumari (Parents of Karan Kumar, Keyboard)",
        "rating":"4.8",
        "message":"After trying several online platforms, we found CLASSWiX to be the most effective. Our child's grades have improved significantly."
    },
    // {
    //     "from":"",
    //     "rateing":"",
    //     "message":""
    // },
    // {
    //     "from":"",
    //     "rateing":"",
    //     "message":""
    // },
    // {
    //     "from":"",
    //     "rateing":"",
    //     "message":""
    // },
]


const [currentIndex, setCurrentIndex] = createSignal(0);


const scrollToIndex = (index) => {
    const container = document.querySelector('.feedback-container');
    const cardWidth = document.querySelector('.feedback-card').offsetWidth + 24; // card width + gap
    
    if (container) {
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  }

  const handleNext = () => {
    console.log('Next button clicked');
    if (currentIndex() < feedbacks.length - 1) {
      scrollToIndex(currentIndex() + 1);
    }
  };
  
  const handlePrev = () => {
    console.log('Prev button clicked');
    if (currentIndex() > 0) {
      scrollToIndex(currentIndex() - 1);
    }
  };
  

const isPrevDisabled = createMemo(() => currentIndex() === 0);
const isNextDisabled = createMemo(() => currentIndex() === feedbacks.length - 1);

export default function feedback() {
  return (
    <div class="w-full py-12 px-8 md:px-12 lg:px-28 mt-32">
        <div class="grid grid-cols-5">
            <div class="col-span-2 px-6">
                <Card className="bg-white rounded-lg" >
                    <CardContent >
                        <h2 class="text-2xl font-bold text-black">Ratings and Reviews</h2>
                    </CardContent>
                </Card>
            </div>
            <div class="col-span-3">
                {/* Navigation and Feedback Container */}
                <div class="relative">
                    {/* Previous Button */}
                    <button 
                        onClick={handlePrev}
                        disabled={isPrevDisabled()}
                        class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
                            bg-blue-100 p-2 rounded-full shadow-md 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button 
                        onClick={handleNext}
                        disabled={isNextDisabled()}
                        class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
                            bg-blue-100 p-2 rounded-full shadow-md 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Feedback Container */}
                    <div 
                        class="feedback-container flex gap-6 py-4 overflow-x-hidden scroll-smooth"
                    >
                        {feedbacks.map((item, index) => (
                        <Card
                            key={index} 
                            class="feedback-card flex-shrink-0 bg-blue-50 rounded-xl p-6 shadow-lg w-96"
                        >
                            <CardContent class="flex items-center mb-4">
                                <div class="w-12 h-12 aspect-square rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-600 mr-4">
                                    {item.from.charAt(0)}
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold">{item.from}</h3>
                                    <div class="flex items-center text-yellow-500">
                                        <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                        <span>{item.rating}</span>
                                    </div>
                                </div>
                                <p class="text-gray-700">{item.message}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div class="hidden col-span-3  flex-col-reverse gap-4 overflow-y-hidden scroll-smooth px-6 h-96">
                {feedbacks.map((feedback,index)=>(
                    <Card className="bg-white" key={index}>
                        <CardContent >
                            <div class="flex">
                                <div class="w-8 h-8 aspect-square rounded-full bg-blue-300 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
                                    {feedback.from.charAt(0)}
                                </div>
                                <h2 class="font-bold text-black">{feedback.from}</h2>
                            </div>
                            <div class="flex align-middle">
                                <div class="my-auto me-2">
                                    <HiSolidStar class="text-yellow-400" />
                                </div>
                                <p class="my-auto">{feedback.rating}</p>
                            </div>
                            <p class="my-6">{feedback.message}</p>
                        </CardContent>
                    </Card>
                ))}
            </div> */}
        </div>
    </div>
  )
}
