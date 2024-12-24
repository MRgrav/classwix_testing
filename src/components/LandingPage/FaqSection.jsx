import { createSignal, For, Show } from "solid-js";

export default function FaqSection() {

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
            q: "Do Music Courses have 1-on-1 classes or group classes?",
            ans: "Both are available. You can join group classes or 1-on-1 classes as per your need."
        },
        {
            q: "Can we change the timing of 1-on-1 classes by our own convenient time?",
            ans: "Yes, you can change the timing with mutual understanding between the teacher and student."
        },
        {
            q: "Are there any hidden charges on the plans?",
            ans: "No, there are no hidden charges. You just need to pay 18% GST on every plan."
        }
    ];

    const [expandedIndex, setExpandedIndex] = createSignal(-1);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex() === index ? -1 : index);
    };

  return (
    <section class="w-full px-8 md:px-12 lg:px-24 py-12 bg-gradient-to-b from-[#4e2bff] to-blue-900">
        <h2 class="text-4xl font-extrabold text-blue-100 mb-4">FAQ</h2>
        <div>
            <div class="space-y-6 bg-white px-4 pt-5 rounded-md">
                <For each={faq}>
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
                            <div >
                                <Show when={expandedIndex() === index()}>
                                    <div class="mt-4 text-gray-600 leading-relaxed">{item.ans}</div>
                                </Show>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    </section>
  )
}
