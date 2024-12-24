import { Motion } from '@motionone/solid'

const partners = [
    "/images/Trinity.webp",
    "/images/Bhatkhande.webp",
    "/images/RockSchool.webp",
    
    "/images/Surnandan.webp"
];

export default function PartnerSection() {
  return (
    <section className="bg-[#4e2bff] py-8 px-4 md:px-20">
        <div className="container mx-auto">
          <h2 class="text-white font-semibold text-2xl text-center mb-4">WORLDWIDE MUSIC EDUCATION & CERTIFIED PROGRAMS WITH TOP BOARDS/UNIVERSITIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <Motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white font-semibold"
              >
                <img src={partner} alt="" class="max-h-24 aspect-[7/3] w-auto my-2"/>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
