import { createSignal, For, Show } from 'solid-js';
import { HiSolidAcademicCap, HiSolidArrowRight, HiSolidBars3, HiSolidBell, HiSolidChevronRight, HiSolidXMark } from 'solid-icons/hi';
import Button from './Button';
import { A, useNavigate } from '@solidjs/router';
import Social from './Social';
// import { isAuthenticated } from '~/store/store';

const routes = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  // { label: 'Pricing', href: '/pricing' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <div class="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      <div class="flex h-16 items-center px-4">
        <button class="md:hidden me-2" onClick={toggleMenu}>
          <Show when={!isMenuOpen()}>
            <HiSolidBars3 class="h-5 w-5" />
          </Show>
          <Show when={isMenuOpen()}>
            <HiSolidXMark class="h-5 w-5" />
          </Show>
        </button>
        <Show when={isMenuOpen()}>
          <div class="absolute flex flex-col h-[96vh] px-8 top-16 left-0 w-72 bg-white shadow-md">
            <nav class="flex flex-col gap-4 mt-4">
              <For each={routes}>
                {(route) => (
                  <a
                    href={route.href}
                    class="text-sm font-medium transition-colors hover:text-[#7034a1]"
                    onClick={toggleMenu}
                  >
                    {route.label}
                  </a>
                )}
              </For>
              
            </nav>
            <div class='flex flex-col border-t-2 py-12 mt-12'>
              <a href='/login' class='px-4 py-1 mb-2 text-center font-semibold text-sm rounded-md hover:scale-95 border border-blue-800 bg-blue-50 text-blue-700'>
                Signin
              </a>
              <a href='/#' class='px-4 py-1 text-center font-semibold text-sm rounded-md hover:scale-95 borer border-blue-500 bg-blue-700 text-white'>
                Signup
              </a>
              <button class='mb-4 cursor-pointer z-50 mt-6' onClick={toggleMenu}>
                <a href='/book-a-trial' className="px-6 rounded-md flex py-2 bg-gradient-to-tr from-blue-300 to-blue-400 text-blue-800 hover:from-blue-700 hover:to-blue-500 hover:text-white border border-blue-100 shadow-md hover:scale-95 shadow-blue-800 font-semibold">
                  Book a trial
                  <HiSolidArrowRight class='font-bold my-auto ml-2' />
                </a>
              </button>
            </div>
            <div class='mt-auto mb-14 botom-0 mx-auto border-t-2 py-6'>
              <Social color="black"/>
            </div>
          </div>
        </Show>

        <div class="flex items-center gap-x-4">
          <A href="/" class="flex items-center gap-x-2">
            {/* <h1 class="text-xl font-bold">EduSQL</h1> */}
            <img src="/mains/color-wide.webp" alt="" class='min-h-8 h-8 min-w-42 w-42 px-2' />
          </A>
        </div>

        <nav class="mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex">
          <For each={routes}>
            {(route) => (
              <A
                href={route.href}
                class="text-sm font-medium transition-colors hover:text-[#7034a1]"
              >
                {route.label}
              </A>
            )}
          </For>

          <div class='relative w-fit group text-sm font-medium transition-colors hover:text-[#7034a1]' >
            Pricing
            <ul class='absolute bg-zinc-100 text-sm shadow rounded w-fit ms-5 text-nowrap hidden group-hover:block'>
              <li class="px-1 py-1 hover:bg-blue-200">
                <A href='/pricing/academics' class="ps-2 text-black hover:text-indigo-700 flex items-center gap-2 px-3 py-1">
                  <HiSolidAcademicCap />
                  Academics Pricing
                </A>
              </li>
              <li class="px-1 py-1 hover:bg-blue-200">
                <A href='/pricing/musics' class="ps-2 text-black hover:text-indigo-700 flex items-center gap-2 px-3 py-1">
                  <HiSolidAcademicCap />
                  Musics Pricing
                </A>
              </li>
            </ul>
          </div>
        </nav>

        <div class="ml-auto flex items-center gap-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-[#7034a1]"
          >
            <HiSolidBell className="hidden h-5 w-5 text-black" />
          </Button>
          {/* <Button className="bg-blue-700 hover:bg-blue-800/90 text-white hidden font-semibold sm:block">
            Sign In
          </Button> */}
          <div class='hidden md:flex p-1'>
            {/* <button class='cursor-pointer z-50'>
              <A href='/book-a-trial' className="px-6 rounded-md flex py-1.5 bg-gradient-to-tr from-blue-800 to-blue-600 text-blue-100 hover:from-blue-700 hover:to-blue-500 hover:text-white border border-blue-100 shadow-md hover:scale-95 shadow-blue-800 font-semibold">
                Book a trial
              </A>
            </button> */}
            <div class='grid grid-cols-2'>
              <A href='/signin' class='px-4 py-1.5 font-semibold text-sm rounded-s-lg hover:scale-95 border border-blue-800 bg-blue-50 text-blue-700'>
                Signin
              </A>
              <A href='/' class='px-4 py-1.5 font-semibold text-sm rounded-e-lg hover:scale-95 borer border-blue-500 bg-blue-700 text-white'>
                Signup
              </A>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;