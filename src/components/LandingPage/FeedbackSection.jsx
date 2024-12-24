import { Motion } from '@motionone/solid';
import { HiSolidArrowLeft, HiSolidArrowLeftCircle, HiSolidArrowLeftOnRectangle, HiSolidChevronDown, HiSolidChevronUp, HiSolidStar } from 'solid-icons/hi';
import { createSignal, createMemo, For } from 'solid-js';
import Card from '../Card';
import CardContent from '../CardContent';

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = createSignal(0);

  // Sample feedback data (replace with your actual data)
  const feedback = [
    { id: 1, name: "Rita Singh (Parent of Riyanshi Singh, Grade 6)", rating: 4, comment: "CLASSWiX has been a game-changer for my child! Within weeks, I saw significant improvement in her math skills. The interactive lessons and personalized feedback are exceptional." },
    { id: 2, name: "Sushmita Reddy (Parent of Rahul Reddy, Western Vocal)", rating: 5, comment: "5/5 stars! CLASSWiX exceeded our expectations." },
    { id: 3, name: "Shivani Kumari (Parents of Karan Kumar, Keyboard)", rating: 4, comment: "After trying several online platforms, we found CLASSWiX to be the most effective. Our child's grades have improved significantly." },
    { id: 4, name: "Vikram Sharma (Parent of Ahirbhav Sharma, Grade 8)", rating: 4, comment: "I'm thrilled with the progress my son has made on CLASSWiX. The platform's engaging content and expert teachers have boosted his confidence in science." },
    { id: 5, name: "Jane Smith", rating: 5, comment: "Exceeded my expectations completely." },
    { id: 6, name: "Mike Johnson", rating: 4, comment: "Great content and instructors." }
  ];

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
    if (currentIndex() < feedback.length - 1) {
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
  const isNextDisabled = createMemo(() => currentIndex() === feedback.length - 1);


  const [current, setCurrent] = createSignal(1)

  const nextFeed = () => {
    if (current() !== feedback.length - 1) {
      setCurrent(current() + 1)
      console.log(current())
    }
  }

  const prevFeed = () => {
    if (current() > 0) {
      setCurrent(current() - 1)
    }
    console.log(current())
  }




  return (
    <section class='py-16 px-4 lg:px-20 bg-gray-50 relative bg-gradient-to-t from-blue-300 to-indigo-200'>
      <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-64'>
        <div class='col-span-1 p-4'>
          <p class='text-blue-800'>Testimonials</p>
          <h2 class='font-bold text-3xl'>What our <br />Students/Parents say</h2>
          <p class='mb-4'>We are committed to continuous improvement and strive to provide a learning environment</p>
          <h2 class='font-bold text-md'>People Love To Learn With Us</h2>
          <div class='grid grid-cols-2 gap-5 py-2'>
            <div class='flex flex-col'>
              <h2 class='text-2xl text-orange-600 font-semibold'>90%</h2>
              <p class='text-sm text-zinc-600'>Students Completed Course Successfully</p>
            </div>
            <div class='flex flex-col'>
              <h2 class='text-2xl text-orange-600 font-semibold'>9/10</h2>
              <p class='text-sm text-zinc-600'>Users Reported Better Learning Outcome</p>
            </div>
          </div>
        </div>
        <div class='lg:col-span-2 py-4'>
          <button class='relative top-1/2 left-[calc(100%-3rem)] p-2 bg-orange-500/40 rounded-full hover:scale-95 z-30' disabled={current() === feedback.length - 1} onClick={() => nextFeed()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button class='relative top-1/2 right-8 p-2 bg-blue-500/40 rounded-full hover:scale-95 z-30' disabled={current() === 0} onClick={() => prevFeed()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div class='flex gap-4 -mt-10 overflow-hidden'>
            <For each={feedback} >
              {(feed) => (
                <div
                  key={feed.id}
                  class={`bg-white rounded-lg max-w-[340px] min-w-[340px] h-[260px] ${feed.id}  `}
                  style={{ transform: `translateX(-${current() * (340 + 16)}px)` }}
                >
                  <Card className={`h-full`}>
                    <CardContent className={`h-full flex flex-col justify-between`}>
                      <p class='mb-3 text-sm text-justify text-zinc-700 tracking-wide'>{feed.comment}</p>
                      <div>
                        <div class='flex flex-row-reverse gap-2 mt1'>
                          <div class='aspect-square h-12 w-12 flex justify-start items-center rounded-full bg-[#4d50ff]'>
                            <h2 class='text-2xl font-bold text-white m-auto'>{feed.name.charAt(0)}</h2>
                          </div>
                          <p class='my-auto text-sm text-end'>{feed.name}</p>
                        </div>
                        <div class='flex justify-end'>
                          <For each={Array.from({ length: 5 }).map((_, i) => i)}>
                            {(index) => (
                              <span
                                class={`text-xl ${index < feed.rating ? "text-orange-500" : "text-zinc-400"}`}
                              >
                                &#9733; {/* Star symbol */}
                              </span>
                            )}
                          </For>
                        </div>
                      </div>
                      
                    </CardContent>
                  </Card>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section class="py-16 px-4 bg-gray-50 relative bg-gradient-to-t from-blue-200 to-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">What Our Students Say</h2>

        {/* <div class="flex left-1/4 justify-center -translate-y-20 absolute z-10"> */}
        <Motion.div
          class="flex left-1/4 justify-center -translate-y-20 absolute z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -72 }}
          transition={{ delay: 0.2 }}
        >
          <svg fill-opacity={0.2} width="100px" height="100px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path fill="#ef6030" d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path>
            <path fill="#e46030" d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path>
          </svg>
        </Motion.div>

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
            {feedback.map((item, index) => (
              <div
                key={index}
                class="feedback-card flex-shrink-0 w-80 bg-blue-50 rounded-xl p-6 shadow-lg"
              >
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 aspect-square rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-600 mr-4">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 class="text-sm font-bold">{item.name}</h3>
                    <div class="flex items-center text-yellow-500">
                      <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;