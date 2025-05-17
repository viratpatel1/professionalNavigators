import Image from "next/image";

const modes = [
  {
    title: "Mock Tests for Self-Evaluation",
    icon: "/images/down.jpeg",
    description:
      "Identify your strengths and areas of improvement. Experience exam-like conditions.",
  },
  {
    title: "Customized Study Plans",
    icon: "/images/down.jpeg",
    description:
      "Tailored to your routine and convenience. Designed to optimize your preparation.",
  },
  {
    title: "Daily Study Targets",
    icon: "/images/down.jpeg",
    description:
      "Stay focused and disciplined. Clear milestones to achieve daily progress.",
  },
  {
    title: "Regular Follow-Ups",
    icon: "/images/down.jpeg",
    description:
      "Session-wise follow-ups for accountability. Ensure consistent progress throughout the day.",
  },
  {
    title: "Timely Doubt Solving",
    icon: "/images/down.jpeg",
    description:
      "Instant solutions to your queries. Expert guidance to clear concepts.",
  },
  {
    title: "Comprehensive Test Series",
    icon: "/images/down.jpeg",
    description:
      "Test series for rigorous practice. Sharpen your exam readiness.",
  },
  {
    title: "Exam Period Guidance",
    icon: "/images/down.jpeg",
    description:
      "Personalized attention during critical times. Boost confidence with strategic support.",
  },
];

const facultyTeam = [
  { name: "CA Swapnil Patni", experience: "17 years", img: "/images/down.jpeg" },
  { name: "CA Ankita Patni", experience: "13 years", img: "/images/down.jpeg" },
  { name: "CA Anand Bhangariya", experience: "20 years", img: "/images/down.jpeg" },
  { name: "CA Pooja Kamdar Date", experience: "22 years", img: "/images/down.jpeg" },
  { name: "CA Pranav Popat", experience: "7 years", img: "/images/down.jpeg" },
  { name: "CA Mohnish Vora", experience: "7 years", img: "/images/down.jpeg" },
  { name: "CA Kapil Goyal", experience: "12 years", img: "/images/down.jpeg" },
  { name: "CA Harshad Jaju", experience: "13 years", img: "/images/down.jpeg" },
];

export default function ModeOfTeaching() {
  return (
    <>
      {/* MODE OF TEACHING */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white text-center scroll-smooth scroll-mt-10">
        <h2 className="text-4xl font-bold mb-3 text-gray-700">All-In-One Services</h2>
        <div className="flex justify-center mb-6">
          <span className="w-16 h-1 bg-red-500 rounded-full"></span>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          At Professional Navigators, we specialize in guiding students pursuing professional courses to excel in their studies. Our structured and personalized approach ensures you are fully prepared to achieve your academic goals.
        </p>

        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {modes.map((mode, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full sm:w-[45%] lg:w-[22%] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={mode.icon}
                  alt={mode.title}
                  width={64}
                  height={64}
                  // className="object-contain"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">{mode.title}</h3>
              <p className="text-sm text-gray-600">{mode.description}</p>
            </div>
          ))}
        </div>


      </section>

      {/* COURSES OFFERED */}
      {/* <section className="bg-gray-100 py-20 text-center px-6 md:px-16">
        <h2 className="text-4xl font-extrabold text-black mb-4">
          Courses Offered at Professional Navigators Classes
        </h2>
        <div className="flex justify-center gap-6 flex-wrap mt-6">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            CA Foundation
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition">
            CA Intermediate
          </button>
        </div>
      </section> */}

      {/* FACULTY HIGHLIGHT */}
      {/* <section className="bg-white py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl font-extrabold text-black leading-snug">
              India’s Finest <br /> Faculties for CA Classes
            </h2>
            <p className="text-gray-700 mt-6 text-lg leading-relaxed">
              Led by India’s finest CA educators, we provide expert mentorship, conceptual clarity,
              and strategic exam guidance—ensuring you not only excel in your CA journey but emerge
              as an industry-ready CA.
            </p>
            <button className="mt-8 bg-red-600 text-white font-bold px-6 py-3 rounded hover:bg-red-700 transition">
              Get In Touch
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "CA Swapnil Patni",
                experience: "17 years of teaching experience",
                description:
                  "A distinguished CA, CS and Law graduate, founded SPC in 2010 to revolutionize CA education.",
              },
              {
                name: "CA Ankita Patni",
                experience: "13 years of teaching experience",
                description:
                  "Renowned for making theoretical law engaging and easy to understand through her unique teaching style.",
              },
            ].map((faculty, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src="/images/down.jpeg"
                  alt={faculty.name}
                  className="w-28 h-28 object-cover mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-red-600">{faculty.name}</h3>
                <p className="font-semibold mt-1 text-black">{faculty.experience}</p>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">{faculty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* OUR CORE TEAM */}
      <section id="team" className="scroll-smooth py-1 bg-white px-6 md:px-20 scroll-mt-30">
        <h2 className="text-4xl font-extrabold text-black mb-12 text-center">Our Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {facultyTeam.map((faculty, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-sm">
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-28 h-28 object-contain mx-auto mb-4"
                // className="w-full h-full object-cover rounded-full"
              />
              <h3 className="text-red-600 font-bold text-lg uppercase">{faculty.name}</h3>
              <p className="text-gray-800 mt-2 text-sm">{faculty.experience} of teaching experience</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
