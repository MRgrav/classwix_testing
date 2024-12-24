// import { HiSolidMail, HiSolidPhone, HiSolidAcademicCap } from "solid-icons/hi";

function Profile() {
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <div class="flex items-center mb-6">
            <img src="https://picsum.photos/seed/user/150/150" alt="User" class="w-24 h-24 rounded-full mr-6" />
            <div>
              <h1 class="text-2xl font-bold">John Doe</h1>
              <p class="text-gray-600">SQL Enthusiast</p>
            </div>
          </div>
          <div class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Contact Information</h2>
            <div class="flex items-center mb-2">
              {/* <HiSolidMail class="w-5 h-5 text-gray-500 mr-2" /> */}
              <span>john.doe@example.com</span>
            </div>
            <div class="flex items-center">
              {/* <HiSolidPhone class="w-5 h-5 text-gray-500 mr-2" /> */}
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <div class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Enrolled Courses</h2>
            <ul class="space-y-2">
              <li class="flex items-center">
                {/* <HiSolidAcademicCap class="w-5 h-5 text-violet-600 mr-2" /> */}
                <span>SQL Basics</span>
              </li>
              <li class="flex items-center">
                {/* <HiSolidAcademicCap class="w-5 h-5 text-violet-600 mr-2" /> */}
                <span>Advanced SQL Queries</span>
              </li>
              <li class="flex items-center">
                {/* <HiSolidAcademicCap class="w-5 h-5 text-violet-600 mr-2" /> */}
                <span>Database Design with SQL</span>
              </li>
            </ul>
          </div>
          <button class="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

