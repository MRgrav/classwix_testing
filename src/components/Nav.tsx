// import { A, useLocation } from "@solidjs/router";
import { HiSolidAcademicCap, HiSolidArchiveBox, HiSolidBell } from "solid-icons/hi";

// export default Navbar;


// function Navbar () {
//   const [isVisible, setIsVisible] = createSignal(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

//   onMount(() => {
//     // Trigger initial visibility
//     setTimeout(() => setIsVisible(true), 100);

//     // Setup section observations
//     // observeSections();
//   });

//   return (
//     <>
//     {/* Desktop Navigation */}
//     <nav class={`
//         fixed top-0 left-0 right-0 z-50 bg-white shadow-md 
//         transform ${isVisible() ? 'translate-y-0' : '-translate-y-full'}
//         transition-transform duration-700 ease-in-out
//         hidden md:block
//       `}>
//         <div class="container mx-auto px-4 py-3 flex justify-between items-center">
//           <div class="text-2xl font-bold text-blue-600 
//             transform transition-transform duration-500 
//             hover:scale-105
//           ">
//             EduQuest
//           </div>
//           <div class="space-x-4">
//             <a href="#" class="hover:text-blue-600 transition-colors">Home</a>
//             <a href="#" class="hover:text-blue-600 transition-colors">Courses</a>
//             <a href="#" class="hover:text-blue-600 transition-colors">Pricing</a>
//             <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav class={`
//         fixed top-0 left-0 right-0 z-50 bg-white shadow-md 
//         md:hidden
//       `}>
//         <div class="container mx-auto px-4 py-3 flex justify-between items-center">
//           <div class="text-2xl font-bold text-blue-600">EduQuest</div>
//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
//             class="focus:outline-none"
//           >
//             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Sidebar Menu */}
//         <div class={`
//           fixed top-0 left-0 w-64 h-full bg-white shadow-lg 
//           transform transition-transform duration-300
//           ${isMobileMenuOpen() ? 'translate-x-0' : '-translate-x-full'}
//           z-50 pt-16
//         `}>
//           <button 
//             onClick={() => setIsMobileMenuOpen(false)}
//             class="absolute top-4 right-4 text-2xl"
//           >
//             ×
//           </button>
//           <div class="flex flex-col space-y-4 px-6">
//             <a href="#" class="hover:text-blue-600 transition-colors">Home</a>
//             <a href="#" class="hover:text-blue-600 transition-colors">Courses</a>
//             <a href="#" class="hover:text-blue-600 transition-colors">Pricing</a>
//             <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar


// import { Bell, Menu } from 'lucide-react'
// import Button from "./Button";
import { createSignal, For, Show } from 'solid-js';
// import { Bell, Menu } from 'lucide-react'; // Assuming you've installed Lucide-React

const routes = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <div class="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      <div class="flex h-16 items-center px-4">
        <button class="md:hidden" onClick={toggleMenu}>
          <Show when={!isMenuOpen()}>
            <MenuIcon class="h-5 w-5" />
          </Show>
          <Show when={isMenuOpen()}>
            <X class="h-5 w-5" />
          </Show>
        </button>
        <Show when={isMenuOpen()}>
          <div class="absolute h-screen px-8 top-16 left-0 w-72 bg-white shadow-md">
            <nav class="flex flex-col gap-4 mt-4">
              <For each={routes}>
                {(route) => (
                  <a
                    href={route.href}
                    class="text-sm font-medium transition-colors hover:text-[#7034a1]"
                  >
                    {route.label}
                  </a>
                )}
              </For>
            </nav>
          </div>
        </Show>

        <div class="flex items-center gap-x-4">
          <a href="/" class="flex items-center gap-x-2">
            <h1 class="text-xl font-bold">EduSQL</h1>
          </a>
        </div>

        <nav class="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
          <For each={routes}>
            {(route) => (
              <a
                href={route.href}
                class="text-sm font-medium transition-colors hover:text-[#7034a1]"
              >
                {route.label}
              </a>
            )}
          </For>
        </nav>

        <div class="ml-auto flex items-center gap-x-4">
          <button class="text-[#7034a1]">
            <HiSolidBell class="h-5 w-5" />
          </button>
          <button class="bg-[#7034a1] hover:bg-[#7034a1]/90 text-white">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;