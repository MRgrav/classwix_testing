import { HiAcademicCap, HiMusicNote, HiPhone, HiMapPin, HiSolidAcademicCap, HiSolidMusicalNote, HiSolidPhone, HiSolidMapPin } from 'solid-icons/hi';

function LandingPage() {
  return (
    <div class="bg-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold text-blue-700 mb-8">Book Trial Class</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-xl font-bold mb-4">Select Category</h2>

            <div class="flex items-center mb-4">
              <input type="radio" name="category" value="academic" id="academic" class="mr-2" />
              <label for="academic" class="text-lg font-semibold">
                <HiSolidAcademicCap size={24} class="inline-block mr-2" />
                Academic
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input type="radio" name="category" value="music" id="music" class="mr-2" />
              <label for="music" class="text-lg font-semibold">
                <HiSolidMusicalNote size={24} class="inline-block mr-2" />
                Music
              </label>
            </div>

            <div id="academic-fields" class="hidden">
              <div class="mb-4">
                <label for="student-name" class="block text-lg font-semibold mb-2">Student Name</label>
                <input type="text" id="student-name" class="border border-gray-300 p-2 w-full" />
              </div>

              <div class="mb-4">
                <label for="student-age" class="block text-lg font-semibold mb-2">Student Age</label>
                <input type="number" id="student-age" class="border border-gray-300 p-2 w-full" />
              </div>

              <div class="mb-4">
                <label for="class" class="block text-lg font-semibold mb-2">Class</label>
                <select id="class" class="border border-gray-300 p-2 w-full">
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div class="mb-4">
                <label for="subject" class="block text-lg font-semibold mb-2">Subject</label>
                <select id="subject" class="border border-gray-300 p-2 w-full">
                  {/* Populate options based on selected class */}
                </select>
              </div>
            </div>

            <div id="music-fields" class="hidden">
              {/* Music-specific fields */}
            </div>
          </div>

          <div>
            <div class="mb-4">
              <label for="phone-number" class="block text-lg font-semibold mb-2">
                <HiSolidPhone size={24} class="inline-block mr-2" />
                Phone Number
              </label>
              <input type="tel" id="phone-number" class="border border-gray-300 p-2 w-full" />
            </div>

            <div class="mb-4">
              <label for="address" class="block text-lg font-semibold mb-2">
                <HiSolidMapPin size={24} class="inline-block mr-2" />
                Address
              </label>
              <textarea id="address" class="border border-gray-300 p-2 w-full" rows="4"></textarea>
            </div>

            <div class="mb-4">
              <label for="country" class="block text-lg font-semibold mb-2">Country</label>
              <select id="country" class="border border-gray-300 p-2 w-full">
                <option value="india">India</option>
                <option value="us">United States</option>
                {/* Add more countries here */}
              </select>
            </div>

            <div class="mb-4">
              <label for="name" class="block text-lg font-semibold mb-2">Enter Your Name</label>
              <input type="text" id="name" class="border border-gray-300 p-2 w-full" />
            </div>

            <div class="mb-4">
              <label for="phone-number" class="block text-lg font-semibold mb-2">
                <HiSolidPhone size={24} class="inline-block mr-2" />
                Enter Your Phone Number
              </label>
              <input type="tel" id="phone-number" class="border border-gray-300 p-2 w-full" />
            </div>

            <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Request to CallBack</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
