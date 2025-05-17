// components/CourseBanner.tsx
import Image from "next/image";

export default function CourseBanner() {
  return (
    <section className="scroll-smooth relative min-h-[90vh] bg-gradient-to-br from-[#eb8954] via-[#eb8954] to-[#eb8954] text-white flex items-center px-6 py-12">


      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <div className="max-3-xl text-center ">
          {/* <p className="uppercase text-sm font-semibold text-gray-300 mb-2">Group 1</p> */}
          <h1 className="text-6xl font-extrabold leading-tight mb-4 font-extrabold text-black">
            Professional Navigator <br />
            {/* <span className="text-2xl font-medium block mt-2">For Sept 25 / Jan 26</span> */}
            <span className="text-xl font-medium block mt-2">Your Trusted Partner in Professional Course Preparation</span>
            <span className="text-xl font-medium block mt-2">Empower your journey to success!</span>
            {/* <span className="text-xl font-medium block mt-2">Join Professional Navigators Today.</span> */}
          </h1>
            {/* <h1 className="text-2xl font-extrabold leading-tight mb-4">Unlock Your True Potential</h1>
            <span className="text-2xl font-medium block mt-2">
            At Professional Navigators, we specialize in guiding students pursuing professional courses to excel in their studies. Our structured and personalized approach ensures you are fully prepared to achieve your academic goals.
            </span> */}

          {/* <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
            {["Face 2 Face", "Live Streaming"].map((label, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-white px-4 py-1 rounded-md text-sm font-bold"
              >
                {label}
              </span>
            ))}
          </div> */}

          {/* <p className="mt-6 text-sm font-medium flex items-center justify-center lg:justify-start">
            Courses also available in:
            <span className="inline-flex items-center ml-2 gap-2">
              <Image src="/google-drive.png" alt="Drive" width={24} height={24} />
              <Image src="/one-drive.png" alt="OneDrive" width={24} height={24} />
            </span>
          </p> */}
        </div>

        {/* Right: Faculty Section */}
        <div className="flex flex-col items-center mt-10 lg:mt-0 lg:ml-10 space-y-6">
          <div className="flex gap-6">
            {[
              // { name: "CA Pooja Datte", subject: "TAX", img: "/images/down.jpeg" },
              // { name: "CA Anand Bhanggriya", subject: "ADV ACC", img: "/images/down.jpeg" },
              // { name: "CA Ankita Patni", subject: "LAW", img: "/images/down.jpeg" },
            ].map((fac, idx) => (
              <div key={idx} className="text-center">
                {/* <Image
                  src={fac.img}
                  alt={fac.name}
                  width={200}
                  height={200}
                  className="rounded-xl mx-auto object-cover"
                />
                <p className="text-lg font-bold mt-2">{fac.subject}</p>
                <p className="text-sm text-gray-200">{fac.name}</p> */}
              </div>
            ))}
          </div>

          {/* <div className="bg-pink-600 text-white text-center px-6 py-4 rounded-xl shadow-lg font-extrabold text-lg leading-tight">
            Enroll Now
          </div> */}
          <button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfNH28gAsmQC5RKNX1IaxI0-Aa1coZJy8JAcXhKJl0u6nP54Q/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-9 py-6 rounded-lg shadow-lg font-bold text-lg hover:bg-white hover:text-red-600 transition duration-300"
            >
             Enroll Now
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
