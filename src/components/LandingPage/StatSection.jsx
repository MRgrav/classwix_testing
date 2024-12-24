import { Motion } from "@motionone/solid";
import { HiOutlineUserGroup, HiOutlineVideoCamera, HiOutlineBookOpen } from "solid-icons/hi";
import AnimatedCounter from "../AnimatedCounter";
import { Show } from "solid-js";

const stats = [
    { icon: "students", value: "449", label: "Student Enrolled" },
    { icon: "programs", value: "49", label: "Programs" },
    { icon: "lives", value: "7999", label: "Live Classes Delivered" }
];

export default function StatSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-t from-blue-700 to-[#4e2bff]/90 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">
                <div class="flex align-middle justify-center mb-2">
                  <Show when={stat.icon === "students"}>
                    <HiOutlineUserGroup class="w-8"/>
                  </Show>
                  <Show when={stat.icon === "programs"} >
                    <HiOutlineBookOpen class="w-8"/>
                  </Show>
                  <Show when={stat.icon === "lives"}>
                    <HiOutlineVideoCamera class="w-8"/>
                  </Show>
                </div>
                <AnimatedCounter
                  target={stat.value}
                  duration={2000}
                  prefix=""
                  suffix="+"
                  className="text-4xl font-bold"
                />
              </div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
