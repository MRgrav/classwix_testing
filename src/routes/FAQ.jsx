import { createSignal, createEffect, For, Show } from "solid-js";
import { HiOutlineMagnifyingGlass } from "solid-icons/hi";
import { Motion } from "@motionone/solid";
// import { Transition } from "solid-transition-group";

const ImprovedFAQ = () => {
    const faq = [
        {
            q: "How can we enroll in Academic/Music Courses?",
            ans: "After filling the booking trial form, a counselor will contact you for a trial class. If you like our teaching methodology, you can join our classes."
        },
        {
            q: "After filling the form, how will we get our trial class?",
            ans: "A counselor will contact you for a trial class and provide a link via WhatsApp to join the class."
        },
        {
            q: "After enrolling, how will we get our classes?",
            ans: " You will get access to our website and app, and a link will be provided via WhatsApp also by your counselor."
        },
        {
            q: "Can we avail recorded classes after enrolling a course?",
            ans: "Yes, you will get recorded classes after enrolling a course. The recorded session will be uploaded within 2-3 hours of the live session ending."
        },
        {
            q: "Do Music Courses have 1-on-1 classes or group classes?",
            ans: "Both are available. You can join group classes or 1-on-1 classes as per your need."
        },
        {
            q: "Have any age limit for Music Courses?",
            ans: "No, there is no age limit."
        },
        {
            q: "Can we change the timing of group classes by our own convenient time?",
            ans: "No, you cannot change the timing. However, if you have an emergency, you will get recorded classes."
        },
        {
            q: "Can we change the timing of 1-on-1 classes by our own convenient time?",
            ans: "Yes, you can change the timing with mutual understanding between the teacher and student."
        },
        {
            q: "Do you have certification and non-certification courses on Music Category?",
            ans: "Yes, both are available. Certification courses provide two certificates: one from a recognized board/university and a CLASSWiX appreciation certificate. Non-certification courses provide only a CLASSWiX appreciation certificate after course completion."
        },
        {
            q: "How can we get a certificate after course completion on Music Category?",
            ans: "You need to fill out a form for the examination and attend it. Once the board declares the result, you will receive your certificate and mark sheet by post."
        },
        {
            q: "Is CLASSWiX a government-affiliated platform?",
            ans: " No, it's not a government platform. However, it's an ed-tech company registered under the Ministry of Corporate Affairs (MCA), India)."
        },
        {
            q: "Is CLASSWiX registered under the Government of India?",
            ans: "Yes, CLASSWiX is a flagship brand of Bipransh EdTech Private Limited, an EdTech company registered under the Ministry of Corporate Affairs (MCA), India, governed by the Companies Act, 2013 (18 of 2013). As such, we adhere to the company's rules and regulations."
        },
        {
            q: "Are there any hidden charges on the plans?",
            ans: "No, there are no hidden charges. You just need to pay 18% GST on every plan."
        },
        {
            q: "Do we need an iPad or laptop? Is it compulsory?",
            ans: "No, it's not compulsory. However, using a laptop or iPad can provide a better learning experience with a bigger screen."
        }
    ];

    const [expandedIndex, setExpandedIndex] = createSignal(-1);
    const [searchQuery, setSearchQuery] = createSignal("");

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex() === index ? -1 : index);
    };

    const filteredFaqData = () => {
        const query = searchQuery().toLowerCase();
        return faq.filter((item) =>
            item.q.toLowerCase().includes(query)
        );
    };

    return (
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 w-full p-6 pt-20 md:p-12 lg:p-20">
            <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div class="p-8 md:p-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-indigo-900 mb-8">Frequently Asked Questions</h2>
                    <div class="relative mb-12">
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            class="w-full px-5 py-3 pr-12 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
                            value={searchQuery()}
                            onInput={(e) => setSearchQuery(e.currentTarget.value)}
                        />
                        <HiOutlineMagnifyingGlass class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                    <div class="space-y-6">
                        <For each={filteredFaqData()}>
                            {(item, index) => (
                                <div class="border-b border-gray-200 pb-6">
                                    <button
                                        class="flex items-center justify-between w-full text-left"
                                        onClick={() => toggleExpand(index())}
                                    >
                                        <span class="text-lg font-medium text-gray-900 hover:text-indigo-600 transition duration-200">{item.q}</span>
                                        <span class={`transition-transform duration-200 ${expandedIndex() === index() ? 'rotate-180' : ''}`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 text-indigo-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    <div 
                                        // initial = {{rotate: "0deg"}}
                                        // animate={{ rotate: "180deg"}}

                                    >
                                        <Show when={expandedIndex() === index()}>
                                            <div class="mt-4 text-gray-600 leading-relaxed">{item.ans}</div>
                                        </Show>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImprovedFAQ;

