import { A } from "@solidjs/router";
import { HiSolidEnvelope, HiSolidGlobeAsiaAustralia, HiSolidPhone } from "solid-icons/hi";
import Social from "./Social";
import AboutSection from "./LandingPage/AboutSection";

function Footer() {
  return (
    <footer class="bg-[#020226] text-white -z-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div>
            <A href="/" class="flex items-center space-x-2 mb-4">
              <img src="/mains/white-wide.webp" class="h-8" alt="classwix" />
            </A>
            <p class="text-gray-400 text-xs mb-4">
              CLASSWiX is a global learning platform transforming lives through education and music. <br />A subsidiary of Bipransh EdTech Private Limited.
            </p>
            <div>
            {/* <h3 class="font-bold mb-4">Company</h3> */}
              <ul class="space-y-2 text-sm">
                <li>
                  <A href="/FAQ" class="text-gray-400 hover:text-white">
                    FAQ
                  </A>
                </li>
                <li>
                  <A href="/terms-and-conditions" class="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </A>
                </li>
              </ul>
          </div>
          </div>
          <div>
            <h3 class="font-bold mb-4">Pages</h3>
              <ul class="space-y-1.5 text-sm">
                <li>
                  <A href="/courses" class="text-gray-400 hover:text-white">
                    Courses
                  </A>
                </li>
                <li>
                  <A href="/instructors" class="text-gray-400 hover:text-white">
                    Instructors
                  </A>
                </li>
                <li>
                  <A href="/pricing" class="text-gray-400 hover:text-white">
                    Pricing
                  </A>
                </li>
                <li>
                  <A href="/book-a-trial" class="text-gray-400 hover:text-white">
                    Book a trial
                  </A>
                </li>
                <li>
                  <A href="/student-showcase-panel" class="text-gray-400 hover:text-white">
                    Student Showcase Panel
                  </A>
                </li>
              </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Contact Details</h3>
            <div>
              <ul class="space-y-2 text-gray-400">
                <li class="flex align-middle gap-2 hover:text-white">
                  <div class="my-auto"><HiSolidPhone /></div>
                  <p class="text-xs">+91 2269719938</p>
                </li>
                <li class="flex align-middle gap-2 hover:text-white">
                  <div class="my-auto"><HiSolidEnvelope /></div>
                  <A class="text-sm" href="mailto:info@classwix.com">info@classwix.com</A>
                </li>
                <li class="flex align-middle gap-2 hover:text-white">
                  <div class="my-auto"><HiSolidGlobeAsiaAustralia /></div>
                  <p class="text-xs">Nagaon, 782142, Assam</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 class="font-bold mb-4">Student Showcase Panel</h3>
            <div>
              <A href="https://www.youtube.com/@classwix" class=" z-50">
                <img src="/images/uyvGaAanPJU-MQ-300x169.jpg" alt="student showcase panel" class="rounded "/>
              </A>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
      <div class="flex justify-between bg-zinc-900 px-4 py-2 border-t border-zinc-600">
          <div>
            <p class="text-center text-sm text-zinc-300">©2024 CLASSWiX, All rights reserved.</p>
          </div>
          <div>
            <Social color={"white"} />
          </div>
      </div>
    </footer>
  );
}

export default Footer;

