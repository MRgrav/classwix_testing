import { HiOutlineCheck, HiOutlineCheckCircle, HiOutlineXMark, HiSolidCheckCircle, HiSolidPhone, HiSolidQrCode, HiSolidUserGroup } from "solid-icons/hi";
import DialogCard from "~/components/DialogCard";
import Modal from "~/components/PopSolid/Modal";
import { useToast } from "~/components/PopSolid/PopSolidManager";



export default function bene() {
    const { addToast } = useToast();

    const handleTs = () => {
        addToast('warning', 'This is a success message!');
    }
  return (
    <section class="px-8 md:px-12 lg:px-40 py-12 mt-32">
        <DialogCard key={1} />
        <DialogCard key={2} />
        {/* <Modal /> */}
        {/* <Toast  message="hello" title="Success" status="warning"/> */}
        {/* <Modal message="hello" title="Success" status="warning" /> */}
        <button class="z-50 top-[90vh] bg-red-600" onClick={()=>handleTs()} >click</button>

        <div class="flex justify-around flex-wrap bg-blue-300 mb-4">
            <div class="flex flex-col justify-center">
                <h2 class="text-4xl font-extrabold mb-4 mt-4">Recorded Classe</h2>
                <p class="text-lg text-blue-950">
                Access lessons anytime, anywhere 
                </p>
            </div>
            <div class=" p-4">
                <img src="/images/video-player.png" width={200} height={200} alt="video camera" class="mx-auto" />
            </div>
        </div>
        <div class="flex flex-wrap justify-around bg-gradient-to-b from-red-500 to-orange-600 p-4 mb-4 text-white">
            <div class="hidden sm:flex flex-col align-middle flex-1 h-full">
                <img src="/images/exam-results.png" alt="" width={160} class="mx-auto"/>
                {/* <h2 class="text-xl font-bold my-auto text-center">Tests</h2> */}
            </div>
            <div class="flex-1 mx-w-[200px] text-center p-4 flex flex-col align-bottom justify-center">
                <h2 class="text-2xl font-extrabold mb-3 ">Mock Test</h2>
                <p class="text-sm">
                    Simulate actual exams for confidence boost 
                </p>
            </div>
            <div class="flex-1 mx-w-[200px] text-center p-4 flex flex-col align-bottom justify-center">
                <h2 class="text-2xl font-extrabold mb-3">Weekly Test</h2>
                <p class="text-sm">
                Track progress and identify areas for improvement 
                </p>
            </div>
        </div>
        <div class="flex flex-wrap bg-gradient-to-l from-purple-700/90 to-blue-700/90 gap-8 py-8 mb-4">
            <div class="flex-1 min-w-60 text-center">
                {/* <img src="/images/teacher_P.png" width={180} alt="" class="mx-auto mb-2" /> */}
                <h2 class="text-lg font-bold mb-2 text-white">Homework Assistance</h2>
                <p class="text-sm text-blue-100">
                Guided practice for deeper understanding 
                </p>
            </div>
            <div class="flex-1 min-w-60 text-center">
                {/* <img src="/images/book.png" alt="" width={140} class="mx-auto" /> */}
                <h2 class="text-lg font-bold mb-2 text-white">Study Materials</h2>
                <p class="text-sm text-purple-100">
                Comprehensive notes and resources 
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 bg-gradient-to-t from-green-700 to-[#005f03]/70 gap-8 py-8">
            <div class="text-center flex flex-col justify-between">
                <HiSolidUserGroup class="mx-auto w-8 h-8 mb-2 text-white" />
                <div>
                <h2 class="text-lg font-bold mb-2 text-white">Career Guidance</h2>
                <p class="text-sm text-green-100">
                Expert advice on career paths 
                </p>
                </div>
            </div>
            <div class="text-center flex flex-col justify-between">
                <HiSolidPhone class="mx-auto w-8 h-8 mb-2 text-white" />
                <div>
                <h2 class="text-lg font-bold mb-2 text-white">Full Counselor Support</h2>
                <p class="text-sm text-green-100">
                Guided academic and career planning 
                </p>
                </div>
            </div>
            <div class="text-center flex flex-col justify-between">
                <HiSolidQrCode class="mx-auto w-8 h-8 mb-2 text-white" />
                <div>
                <h2 class="text-lg font-bold mb-2 text-white">Secure Payment Gateway</h2>
                <p class="text-sm text-green-100">
                Safe and secure transactions 
                </p>
                </div>
            </div>
            <div class="py-20 w-full">
                <div class="flex flex-col rounded-lg mx-auto">    
                    <div class="flex bg-gradient-to-t from-blue-600 to-blue-500 shadow rounded-t-2xl">
                        <div class="p-4">
                            <div class="p-3 bg-white/10 rounded-full shadow aspect-square">
                                <HiOutlineCheckCircle class="text-white w-8 h-8" />
                            </div>
                        </div>
                        <div class="flex flex-col align-bottom justify-end py-4">
                            <h2 class="text-xl font-bold text-white mb-1 text-left">Success</h2>
                            <p class="text-sm text-gray-100 text-left">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div class="flex justify-around bg-blue-500 rounded-b-2xl">
                        <div class="p-4 me-1">
                            <HiOutlineCheck />
                        </div>
                        <div class="p-4 ms-1">
                            <HiOutlineXMark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
