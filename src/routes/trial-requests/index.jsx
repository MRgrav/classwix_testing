import axios from "axios"
import { createEffect, createSignal, For } from "solid-js"

export default function Index() {
    const [reqs, setReuests] = createSignal([])        // Data from API
    const [searchTerm, setSearchTerm] = createSignal("")  // Search input signal
    const [pwd, setPwd] = createSignal()

    // Fetch data from API
    const fetchTrials = async () => {
        const response = await axios(`${import.meta.env.VITE_IPA}/students`)
        // console.log(response.data.students)
        setReuests(response.data.students)
    }

    // Format the date
    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    // Search filter
    const filteredReqs = () => {
        const term = searchTerm().toLowerCase();
        return reqs().filter(request => 
            request.name.toLowerCase().includes(term) || 
            request.subject.toLowerCase().includes(term) || 
            request.class.toLowerCase().includes(term)
        );
    }

    // Sort by latest date (descending)
    const sortedReqs = () => {
        return filteredReqs().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    // Fetch data when component mounts
    createEffect(() => {
        fetchTrials()
    })

    return (
        <div class="min-h-screen px-4 lg:px-12 xl:24 pb-12 pt-24 bg-gradient-to-tr from-blue-100 to-orange-200">
            <h2 class="font-bold text-xl text-blue-700 mb-4">Trial Requests</h2>
            {/* <div>
                <input type="text" value={pwd()} onChange={()=>handlePwd()} />
            </div> */}
            <div class="bg-white mb-2 w-full grid grid-cols-6 p-2 rounded-t-md">
                <div class="col-span-2"></div>
                <div class="col-span-4 flex">
                    <input 
                        type="text" 
                        name="search" 
                        class="flex-1 border-2 border-blue-400 px-4 py-1.5 rounded-s-md bg-gray-100" 
                        value={searchTerm()} 
                        onInput={(e) => setSearchTerm(e.target.value)} 
                        placeholder="Search by Name, Subject, or Class"
                    />
                    <button 
                        type="button" 
                        id="search" 
                        class="px-4 py-1.5 font-semibold rounded-e-md bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => {}}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div class="flex flex-col border bg-white p-2">
                <div class="grid md:grid-cols-4 lg:grid-cols-7 gap-2 w-full">
                    <h2 class="font-bold text-zinc-700">Name</h2>
                    <h2 class="font-bold text-zinc-700 lg:hidden md:block">Course</h2>
                    <h2 class="font-bold text-zinc-700 md:hidden lg:block">Class</h2>
                    <h2 class="font-bold text-zinc-700 md:hidden lg:block">Subject</h2>
                    <h2 class="font-bold text-zinc-700">Contacts</h2>
                    <h2 class="font-bold text-zinc-700 md:hidden lg:block">Email</h2>
                    <h2 class="font-bold text-zinc-700">Date</h2>
                    <h2 class="font-bold text-zinc-700 md:hidden lg:block">Address</h2>
                </div>
                <For each={sortedReqs()}>
                    {(request) => (
                        <div class="grid lg:grid-cols-7 md:grid-cols-4 space-2 w-full font-serif border">
                            <div class="flex flex-col justify-start border p-1">
                                <p>{request.name}</p>
                                <p class="md:block lg:hidden">{request.address}</p>
                            </div>
                            <div class="border p-1 md:hidden lg:block">
                                <p>{request.class}, ({request.age})</p>
                            </div>
                            <div class="flex flex-col justify-start border p-1">
                                <p>{request.subject}</p>
                                <p>{request.skill_level || ''}</p>
                            </div>
                            <div class="border p-1 md:hidden lg:block">
                                <p>{request.email}</p>
                            </div>
                            <div class="flex flex-col justify-start border p-1">
                                <p>{request.contact_number}</p>
                                <p>{request.whatsapp_number}</p>
                                <p class="md:block lg:hidden">{request.email}</p>
                            </div>
                            <div class="border p-1 md:hidden lg:block">
                                <p>{request.address}</p>
                            </div>
                            <div class="border p-1">
                                <p>{formatDate(request.created_at)}</p>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    );
}
