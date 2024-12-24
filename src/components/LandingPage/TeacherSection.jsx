import { Motion } from "@motionone/solid";
import ProfileFrame from "../TecherSection/ProfileFrame";

const stats = [
  { value: "449", label: "Student Enrolled" },
  { value: "49", label: "Programs" },
  { value: "7999", label: "Live Classes Delivered" },
];

export default function TeacherSection() {
  return (
    <section className="py-16 px-4 bg-[#eae3ff] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div>
                <ProfileFrame path="/images/std3434.png" width="70%">
                  <h4>Physics</h4>
                  <p>Ph.D M asc</p>
                </ProfileFrame>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
