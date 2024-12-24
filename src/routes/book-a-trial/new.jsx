import { createSignal, For } from "solid-js";
import { Motion } from "@motionone/solid";
import { selectCourse } from "~/data/selectCourse";
import { HiSolidPhone } from "solid-icons/hi";

const TrialForm = () => {
  const [name, setName] = createSignal("");
  const [age, setAge] = createSignal(0);
  const [className, setClassName] = createSignal("");
  const [skillLevel, setSkillLevel] = createSignal("");
  const [subject, setSubject] = createSignal("");
  const [contactNumber, setContactNumber] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [address, setAddress] = createSignal("");
  const [pin, setPin] = createSignal("");
  const [state, setState] = createSignal("");
  const [category, setCategory] = createSignal("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name(),
      age: age(),
      class: className(),
      skillLevel: skillLevel(),
      subject: subject(),
      contactNumber: contactNumber(),
      email: email(),
      address: address(),
      pin: pin(),
      state: state(),
    });
  };

  return (
    <div class="min-h-screen flex items-center justify-center pt-24 py-16 bg-gradient-to-r from-[#e76131] to-[#2b60ff]">
      <Motion.div
        class="max-w-2xl w-full bg-white rounded-lg shadow-md p-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Motion.h2
          class="text-2xl font-bold mb-4 text-[#2b60ff]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Book a Trial
        </Motion.h2>
        <form onSubmit={handleSubmit} class="space-y-4 text-md">
          <Motion.div
            class="flex flex-col"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label for="name" class="block font-medium mb-1">
              Student's Name
            </label>
            <input
              type="text"
              id="name"
              value={name()}
              onInput={(e) => setName(e.target.value)}
              required
              class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
            />
          </Motion.div>
          {/* course type */}
          <Motion.div
            class="flex flex-col"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label for="name" class="block font-medium mb-1">
              Category
            </label>
            <select 
              name="category" 
              id="category"
              value={category()}
              onChange={setCategory}
              required
              class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
            >
              <option selected disabled value="">--select--</option>
              <For each={selectCourse || []}>
                {(selectCourse)=>(
                  <option 
                    value={selectCourse.category} 
                  >{selectCourse.category}</option>
                )}
              </For>
            </select>
          </Motion.div>
          <div class="grid sm:grid-cols-2 sm:space-x-2">
            <Motion.div
              class="flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label for="age" class="block font-medium mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age()}
                onInput={(e) => setAge(Number(e.target.value))}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
            <Motion.div
              class="flex flex-col"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label for="class" class="block font-medium mb-1">
                Class
              </label>
              <input
                type="text"
                id="class"
                value={className()}
                onInput={(e) => setClassName(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
          </div>
          
          <div class="grid sm:grid-cols-2 sm:space-x-2">
            <Motion.div
              class="flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label for="skill-level" class="block font-medium mb-1">
                Skill Level
              </label>
              <input
                type="text"
                id="skill-level"
                value={skillLevel()}
                onInput={(e) => setSkillLevel(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
            <Motion.div
              class="flex flex-col"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label for="subject" class="block font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject()}
                onInput={(e) => setSubject(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
          </div>
          
          <div class="grid sm:grid-cols-2 sm:space-x-2">
            <Motion.div
              class="flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label for="contact-number" class="block font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact-number"
                value={contactNumber()}
                onInput={(e) => setContactNumber(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
            <Motion.div
              class="flex flex-col"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label for="email" class="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email()}
                onInput={(e) => setEmail(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
          </div>    
          
          <Motion.div
            class="flex flex-col"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <label for="address" class="block font-medium mb-1">
              Address
            </label>
            <textarea
              id="address"
              value={address()}
              onInput={(e) => setAddress(e.target.value)}
              required
              class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
            ></textarea>
          </Motion.div>
          <Motion.div
              class="flex flex-col"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <label for="pin" class="block font-medium mb-1">
                Pin Code
              </label>
              <input
                type="text"
                id="pin"
                value={pin()}
                onInput={(e) => setPin(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
          <div class="grid sm:grid-cols-2 sm:space-x-2">
            <Motion.div
              class="flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <label for="state" class="block font-medium mb-1">
                Country
              </label>
              <select 
              name="category" 
              id="category"
              value={category()}
              onChange={setCategory}
              required
              class="bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
            >
              <option selected disabled value="">--select--</option>
              <option value="india">India</option>
              <option value="united states of america">United States of America</option>
            </select>
              {/* <input
                type="text"
                id="state"
                value={state()}
                onInput={(e) => setState(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              /> */}
            </Motion.div>
            <Motion.div
              class="flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <label for="state" class="block font-medium mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                value={state()}
                onInput={(e) => setState(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
          </div>
          <hr />
          <h2 class="mb-4 font-semibold text-zinc-700">Request To CallBack</h2>
          <div class="grid sm:grid-cols-2 sm:space-x-2 bg-blue-100 p-3">
            <Motion.div
              class="flex flex-col"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <label for="pin" class="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="pin"
                value={pin()}
                onInput={(e) => setPin(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
            <Motion.div
              class="flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <label for="state" class="block font-medium mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="state"
                value={state()}
                onInput={(e) => setState(e.target.value)}
                required
                class="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
              />
            </Motion.div>
          </div>
          

          <Motion.button
            type="submit"
            class="flex justify-center w-full bg-[#2b60ff] text-white py-2 px-4 rounded-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HiSolidPhone class="me-1 my-auto"/>
            <p class="my-auto">Book</p>
          </Motion.button>
          
        </form>
      </Motion.div>
    </div>
  );
};

export default TrialForm;